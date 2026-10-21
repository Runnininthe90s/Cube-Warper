// Prevents a NullPointerException crash and permanent chunk-ban when a Wooden Hopper
// interacts with an incomplete Nuclear Furnace multiblock (or any WorldlyContainerHolder
// whose getContainer() returns null while unformed).
//
// Root cause:
// - NuclearFurnaceComponentBlock implements WorldlyContainerHolder, returning null from
//   getContainer() (m_5840_) whenever its 'active' blockstate property is false.
// - Unlike Forge's VanillaInventoryCodeHooks (used by vanilla Hoppers), which checks
//   if (container != null) before wrapping, WoodenHopperBlockEntity.getItemHandler()
//   passes holder.getContainer(...) directly into new SidedInvWrapper(null, side).
// - When the Wooden Hopper ticks and checks slot count via SidedInvWrapper.getSlots(),
//   it throws NullPointerException ("this.inv" is null) every time the chunk ticks.
//
// Fix:
// Tracks loaded WoodenHopperBlockEntity instances and keeps their transferCooldown > 0
// before each level tick (and on neighbor block updates) whenever any adjacent block
// is a WorldlyContainerHolder that currently returns a null container. Once the Nuclear
// Furnace multiblock is completed (active=true), getContainer() returns the valid
// NuclearFurnaceBlockEntity and the Wooden Hopper automatically resumes transferring items.

(() => {
    const $WoodenHopperBlockEntity = Java.loadClass('cech12.woodenhopper.tileentity.WoodenHopperBlockEntity')
    const $WorldlyContainerHolder = Java.loadClass('net.minecraft.world.WorldlyContainerHolder')

    global.trackedWoodenHoppers = global.trackedWoodenHoppers || []

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

    function isNullContainerHolder(level, pos) {
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

    function guardWoodenHopper(hopper) {
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

            // Check all 6 adjacent positions (above for pull, sides/below for push)
            const neighbors = [
                pos.above ? pos.above() : pos.m_7494_(),
                pos.below ? pos.below() : pos.m_7495_(),
                pos.north ? pos.north() : pos.m_122012_(),
                pos.south ? pos.south() : pos.m_122019_(),
                pos.west ? pos.west() : pos.m_122024_(),
                pos.east ? pos.east() : pos.m_122029_()
            ]

            for (let i = 0; i < neighbors.length; i++) {
                if (isNullContainerHolder(level, neighbors[i])) {
                    hopper.setTransferCooldown(20)
                    return true
                }
            }
        } catch (e) {}

        return true
    }

    function trackWoodenHopper(be) {
        if (be instanceof $WoodenHopperBlockEntity) {
            be.setTransferCooldown(20)
            if (global.trackedWoodenHoppers.indexOf(be) === -1) {
                global.trackedWoodenHoppers.push(be)
            }
            guardWoodenHopper(be)
        }
    }

    global.guardWoodenHopper = guardWoodenHopper
    global.trackWoodenHopper = trackWoodenHopper

    // 1. Hook block entity capability attachment (fires when block entity is instantiated / loaded)
    ForgeEvents.onGenericEvent(
        'net.minecraftforge.event.AttachCapabilitiesEvent',
        'net.minecraft.world.level.block.entity.BlockEntity',
        event => {
            trackWoodenHopper(event.getObject())
        }
    )

    // 2. Hook Fabric ServerBlockEntityEvents.BLOCK_ENTITY_LOAD if available
    try {
        const $UtilsJS = Java.loadClass('dev.latvian.mods.kubejs.util.UtilsJS')
        const $ServerBlockEntityEvents = Java.loadClass('net.fabricmc.fabric.api.event.lifecycle.v1.ServerBlockEntityEvents')
        const $ServerBlockEntity$Load = Java.loadClass('net.fabricmc.fabric.api.event.lifecycle.v1.ServerBlockEntityEvents$Load')
        if ($ServerBlockEntityEvents && $ServerBlockEntityEvents.BLOCK_ENTITY_LOAD) {
            const serverLoadHandler = $UtilsJS.makeFunctionProxy('STARTUP', $ServerBlockEntity$Load, (blockEntity, world) => {
                trackWoodenHopper(blockEntity)
            })
            $ServerBlockEntityEvents.BLOCK_ENTITY_LOAD.register(serverLoadHandler)
        }
    } catch (e) {}

    // 3. Keep cooldown refreshed every level tick
    ForgeEvents.onEvent('net.minecraftforge.event.TickEvent$LevelTickEvent', event => {
        const list = global.trackedWoodenHoppers
        if (!list || list.length === 0) return
        if (isClientSideLevel(event.level)) return
        for (let i = list.length - 1; i >= 0; i--) {
            if (!guardWoodenHopper(list[i])) {
                list.splice(i, 1)
            }
        }
    })

    // 4. Check on block neighbor updates
    ForgeEvents.onEvent('net.minecraftforge.event.level.BlockEvent$NeighborNotifyEvent', event => {
        const list = global.trackedWoodenHoppers
        if (!list || list.length === 0) return
        for (let i = list.length - 1; i >= 0; i--) {
            if (!guardWoodenHopper(list[i])) {
                list.splice(i, 1)
            }
        }
    })
})()
