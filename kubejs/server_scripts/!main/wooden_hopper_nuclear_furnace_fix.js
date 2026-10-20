// Server-side companion for wooden_hopper_nuclear_furnace_fix.js
// Ensures that Wooden Hoppers placed adjacent to an incomplete Nuclear Furnace
// (alexscaves:nuclear_furnace_component[active=false]) are immediately guarded
// even if loaded via /reload on a live server without a restart.

const $WoodenHopperBlockEntity = Java.loadClass('cech12.woodenhopper.tileentity.WoodenHopperBlockEntity')
const $WorldlyContainerHolder = Java.loadClass('net.minecraft.world.WorldlyContainerHolder')
const $HopperBlock = Java.loadClass('net.minecraft.world.level.block.HopperBlock')
const $Level = Java.loadClass('net.minecraft.world.level.Level')

global.trackedWoodenHoppers = global.trackedWoodenHoppers || []

let blockEntityTickersField = null
try {
    blockEntityTickersField = $Level.getDeclaredField('f_151512_') // blockEntityTickers
    blockEntityTickersField.setAccessible(true)
} catch (e) {}

const scannedLevels = {}

function isNullContainerHolderServer(level, pos) {
    if (!level || !pos) return false
    const state = level.getBlockState ? level.getBlockState(pos) : level.m_8055_(pos)
    if (!state) return false
    const hasBE = state.hasBlockEntity ? state.hasBlockEntity() : state.m_155947_()
    if (hasBE) return false
    const block = state.getBlock ? state.getBlock() : state.m_60734_()
    if (block instanceof $WorldlyContainerHolder) {
        const container = block.getContainer
            ? block.getContainer(state, level, pos)
            : block.m_5840_(state, level, pos)
        return container == null
    }
    return false
}

function guardWoodenHopperServer(hopper) {
    if (global.guardWoodenHopper) {
        return global.guardWoodenHopper(hopper)
    }
    if (!hopper) return false
    const removed = hopper.isRemoved ? hopper.isRemoved() : hopper.m_58901_()
    if (removed) return false
    const hasLevel = hopper.hasLevel ? hopper.hasLevel() : hopper.m_58898_()
    if (!hasLevel) return true
    const level = hopper.getLevel ? hopper.getLevel() : hopper.m_58904_()
    if (!level || level.isClientSide) return true

    const pos = hopper.getBlockPos ? hopper.getBlockPos() : hopper.m_58899_()
    const state = hopper.getBlockState ? hopper.getBlockState() : hopper.m_58900_()
    if (!pos || !state) return true

    const abovePos = pos.above ? pos.above() : pos.m_7494_()
    if (isNullContainerHolderServer(level, abovePos)) {
        hopper.setTransferCooldown(20)
        return true
    }

    const facingProp = $HopperBlock.FACING || $HopperBlock.f_54021_
    const facing = state.getValue ? state.getValue(facingProp) : state.m_61143_(facingProp)
    if (facing) {
        const targetPos = pos.relative ? pos.relative(facing) : pos.m_121945_(facing)
        if (isNullContainerHolderServer(level, targetPos)) {
            hopper.setTransferCooldown(20)
            return true
        }
    }

    return true
}

function trackWoodenHopperServer(be) {
    if (global.trackWoodenHopper) {
        global.trackWoodenHopper(be)
        return
    }
    if (be instanceof $WoodenHopperBlockEntity) {
        if (global.trackedWoodenHoppers.indexOf(be) === -1) {
            global.trackedWoodenHoppers.push(be)
        }
        guardWoodenHopperServer(be)
    }
}

BlockEvents.placed('woodenhopper:wooden_hopper', event => {
    const be = event.block.entity
    if (be) trackWoodenHopperServer(be)
})

BlockEvents.placed('alexscaves:nuclear_furnace_component', event => {
    const b = event.block
    const neighbors = [b.up, b.down, b.north, b.south, b.east, b.west]
    for (let i = 0; i < neighbors.length; i++) {
        const adj = neighbors[i]
        if (adj && adj.id === 'woodenhopper:wooden_hopper' && adj.entity) {
            trackWoodenHopperServer(adj.entity)
        }
    }
})

LevelEvents.tick(event => {
    const level = event.level
    if (!level || level.isClientSide) return

    // Discover any existing Wooden Hoppers in loaded chunks (e.g. after /reload)
    const dimKey = String(level.dimension)
    if (!scannedLevels[dimKey] && blockEntityTickersField) {
        scannedLevels[dimKey] = true
        try {
            const tickers = blockEntityTickersField.get(level)
            if (tickers) {
                for (let i = 0; i < tickers.size(); i++) {
                    const ticker = tickers.get(i)
                    if (!ticker) continue
                    const typeStr = ticker.getType ? ticker.getType() : ticker.m_142280_()
                    if (String(typeStr) === 'woodenhopper:wooden_hopper') {
                        const pos = ticker.getPos ? ticker.getPos() : ticker.m_142689_()
                        if (pos) {
                            const be = level.getBlockEntity ? level.getBlockEntity(pos) : level.m_7702_(pos)
                            if (be) trackWoodenHopperServer(be)
                        }
                    }
                }
            }
        } catch (e) {}
    }

    const list = global.trackedWoodenHoppers
    if (!list || list.length === 0) return
    for (let i = list.length - 1; i >= 0; i--) {
        if (!guardWoodenHopperServer(list[i])) {
            list.splice(i, 1)
        }
    }
})
