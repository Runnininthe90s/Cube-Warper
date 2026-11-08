// Server-side companion for wooden_hopper_nuclear_furnace_fix.js
// Ensures that Wooden Hoppers placed adjacent to an incomplete Nuclear Furnace
// (alexscaves:nuclear_furnace_component[active=false]) are immediately guarded
// even if loaded via /reload on a live server without a restart.

(() => {
    const $WoodenHopperBlockEntity = Java.loadClass('cech12.woodenhopper.tileentity.WoodenHopperBlockEntity')
    const $WorldlyContainerHolder = Java.loadClass('net.minecraft.world.WorldlyContainerHolder')
    const $Level = Java.loadClass('net.minecraft.world.level.Level')

    global.trackedWoodenHoppers = global.trackedWoodenHoppers || []

    let blockEntityTickersField = null
    let pendingTickersField = null
    try {
        blockEntityTickersField = $Level.getDeclaredField('f_151512_') // blockEntityTickers
        blockEntityTickersField.setAccessible(true)
    } catch (e) {}
    try {
        pendingTickersField = $Level.getDeclaredField('f_151503_') // pendingBlockEntityTickers
        pendingTickersField.setAccessible(true)
    } catch (e) {}

    function isClientSideLevel(level) {
        if (!level) return true
        if (typeof level.isClientSide === 'function') {
            return Boolean(level.isClientSide())
        }
        if (typeof level.m_5776_ === 'function') {
            return Boolean(level.m_5776_())
        }
        return Boolean(level.f_46443_)
    }

    function isNullContainerHolderServer(level, pos) {
        if (!level || !pos) return false
        try {
            const state = level.getBlockState ? level.getBlockState(pos) : level.m_8055_(pos)
            if (!state) return false
            const block = state.getBlock ? state.getBlock() : state.m_60734_()
            if (block instanceof $WorldlyContainerHolder) {
                const container = block.getContainer
                    ? block.getContainer(state, level, pos)
                    : block.m_5840_(state, level, pos)
                return container == null
            }
        } catch (e) {}
        return false
    }

    function guardWoodenHopperServer(hopper) {
        if (!hopper) return false
        try {
            const removed = hopper.isRemoved ? hopper.isRemoved() : hopper.m_58901_()
            if (removed) return false
            const hasLevel = hopper.hasLevel ? hopper.hasLevel() : hopper.m_58898_()
            if (!hasLevel) return true
            const level = hopper.getLevel ? hopper.getLevel() : hopper.m_58904_()
            if (isClientSideLevel(level)) return true

            const pos = hopper.getBlockPos ? hopper.getBlockPos() : hopper.m_58899_()
            if (!pos) return true

            const neighbors = [
                pos.above ? pos.above() : pos.m_7494_(),
                pos.below ? pos.below() : pos.m_7495_(),
                pos.north ? pos.north() : pos.m_122012_(),
                pos.south ? pos.south() : pos.m_122019_(),
                pos.west ? pos.west() : pos.m_122024_(),
                pos.east ? pos.east() : pos.m_122029_()
            ]

            for (let i = 0; i < neighbors.length; i++) {
                if (isNullContainerHolderServer(level, neighbors[i])) {
                    hopper.setTransferCooldown(20)
                    return true
                }
            }
        } catch (e) {}

        return true
    }

    function trackWoodenHopperServer(be) {
        if (be instanceof $WoodenHopperBlockEntity) {
            try {
                be.setTransferCooldown(20)
                if (global.trackedWoodenHoppers.indexOf(be) === -1) {
                    global.trackedWoodenHoppers.push(be)
                    const pos = be.getBlockPos ? be.getBlockPos() : be.m_58899_()
                    console.info('[WoodenHopperFix-Server] Successfully tracked Wooden Hopper at ' + pos)
                }
                guardWoodenHopperServer(be)
            } catch (e) {}
        }
    }

    function scanLevelTickersServer(level) {
        if (!level) return
        const lists = []
        if (blockEntityTickersField) {
            try {
                const active = blockEntityTickersField.get(level)
                if (active) lists.push(active)
            } catch (e) {}
        }
        if (pendingTickersField) {
            try {
                const pending = pendingTickersField.get(level)
                if (pending) lists.push(pending)
            } catch (e) {}
        }

        for (let l = 0; l < lists.length; l++) {
            const list = lists[l]
            const size = list.size ? list.size() : 0
            for (let i = 0; i < size; i++) {
                const ticker = list.get(i)
                if (!ticker) continue
                try {
                    const pos = ticker.getPos ? ticker.getPos() : ticker.m_142689_()
                    if (pos) {
                        const be = level.getBlockEntity ? level.getBlockEntity(pos) : level.m_7702_(pos)
                        if (be instanceof $WoodenHopperBlockEntity) {
                            trackWoodenHopperServer(be)
                        }
                    }
                } catch (e) {}
            }
        }
    }

    global.guardWoodenHopper = guardWoodenHopperServer
    global.trackWoodenHopper = trackWoodenHopperServer

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
        if (isClientSideLevel(level)) return

        scanLevelTickersServer(level)

        const list = global.trackedWoodenHoppers
        if (!list || list.length === 0) return
        for (let i = list.length - 1; i >= 0; i--) {
            if (!guardWoodenHopperServer(list[i])) {
                list.splice(i, 1)
            }
        }
    })
})()
