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
// before each level tick (and on neighbor block updates) whenever the block above or
// the block in the hopper's facing direction is a WorldlyContainerHolder that currently
// returns a null container. Once the Nuclear Furnace multiblock is completed (active=true),
// getContainer() returns the valid NuclearFurnaceBlockEntity and the Wooden Hopper
// automatically resumes transferring items.

(() => {
    const $WoodenHopperBlockEntity = Java.loadClass('cech12.woodenhopper.tileentity.WoodenHopperBlockEntity')
    const $WorldlyContainerHolder = Java.loadClass('net.minecraft.world.WorldlyContainerHolder')
    const $HopperBlock = Java.loadClass('net.minecraft.world.level.block.HopperBlock')
    const $UtilsJS = Java.loadClass('dev.latvian.mods.kubejs.util.UtilsJS')
    const $ServerBlockEntityEvents = Java.loadClass('net.fabricmc.fabric.api.event.lifecycle.v1.ServerBlockEntityEvents')
    const $ServerBlockEntity$Load = Java.loadClass('net.fabricmc.fabric.api.event.lifecycle.v1.ServerBlockEntityEvents$Load')

    global.trackedWoodenHoppers = global.trackedWoodenHoppers || []

    function isNullContainerHolder(level, pos) {
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

    function guardWoodenHopper(hopper) {
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

        // 1. Check block directly above (pullItems)
        const abovePos = pos.above ? pos.above() : pos.m_7494_()
        if (isNullContainerHolder(level, abovePos)) {
            hopper.setTransferCooldown(20)
            return true
        }

        // 2. Check block in hopper output direction (transferItemsOut)
        const facingProp = $HopperBlock.FACING || $HopperBlock.f_54021_
        const facing = state.getValue ? state.getValue(facingProp) : state.m_61143_(facingProp)
        if (facing) {
            const targetPos = pos.relative ? pos.relative(facing) : pos.m_121945_(facing)
            if (isNullContainerHolder(level, targetPos)) {
                hopper.setTransferCooldown(20)
                return true
            }
        }

        return true
    }

    function trackWoodenHopper(be) {
        if (be instanceof $WoodenHopperBlockEntity) {
            if (global.trackedWoodenHoppers.indexOf(be) === -1) {
                global.trackedWoodenHoppers.push(be)
            }
            guardWoodenHopper(be)
        }
    }

    global.guardWoodenHopper = guardWoodenHopper
    global.trackWoodenHopper = trackWoodenHopper

    ForgeEvents.onGenericEvent(
        'net.minecraftforge.event.AttachCapabilitiesEvent',
        'net.minecraft.world.level.block.entity.BlockEntity',
        event => {
            trackWoodenHopper(event.getObject())
        }
    )

    const serverLoadHandler = $UtilsJS.makeFunctionProxy('STARTUP', $ServerBlockEntity$Load, (blockEntity, world) => {
        trackWoodenHopper(blockEntity)
    })
    $ServerBlockEntityEvents.BLOCK_ENTITY_LOAD.register(serverLoadHandler)

    ForgeEvents.onEvent('net.minecraftforge.event.TickEvent$LevelTickEvent', event => {
        const list = global.trackedWoodenHoppers
        if (!list || list.length === 0) return
        if (!event.level || event.level.isClientSide) return
        for (let i = list.length - 1; i >= 0; i--) {
            if (!guardWoodenHopper(list[i])) {
                list.splice(i, 1)
            }
        }
    })

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
