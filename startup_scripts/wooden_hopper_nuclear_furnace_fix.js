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
// Discovers Wooden Hoppers via ChunkEvent$Load, level ticker lists (active & pending),
// block placement, and neighbor updates, and keeps their transferCooldown > 0 whenever
// any adjacent block is an unformed WorldlyContainerHolder returning a null container.

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
            try {
                be.setTransferCooldown(20)
                if (global.trackedWoodenHoppers.indexOf(be) === -1) {
                    global.trackedWoodenHoppers.push(be)
                    const pos = be.getBlockPos ? be.getBlockPos() : be.m_58899_()
                    console.info('[WoodenHopperFix] Successfully tracked Wooden Hopper at ' + pos)
                }
                guardWoodenHopper(be)
            } catch (e) {}
        }
    }

    function scanLevelTickers(level) {
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
                            trackWoodenHopper(be)
                        }
                    }
                } catch (e) {}
            }
        }
    }

    global.guardWoodenHopper = guardWoodenHopper
    global.trackWoodenHopper = trackWoodenHopper

    // 1. Chunk load hook (discovers hoppers when chunks load from disk)
    ForgeEvents.onEvent('net.minecraftforge.event.level.ChunkEvent$Load', event => {
        try {
            const chunk = event.chunk || (event.getChunk ? event.getChunk() : null)
            if (!chunk) return
            const level = event.level || (event.getLevel ? event.getLevel() : null)
            if (isClientSideLevel(level)) return

            // Check chunk block entities map
            if (chunk.m_62954_) {
                const beMap = chunk.m_62954_()
                if (beMap && beMap.values) {
                    const values = beMap.values().toArray()
                    for (let i = 0; i < values.length; i++) {
                        trackWoodenHopper(values[i])
                    }
                }
            }
            // Check chunk block entity positions set
            if (chunk.m_5928_ && level) {
                const posSet = chunk.m_5928_()
                if (posSet && posSet.toArray) {
                    const posArr = posSet.toArray()
                    for (let i = 0; i < posArr.length; i++) {
                        const pos = posArr[i]
                        const be = level.getBlockEntity ? level.getBlockEntity(pos) : level.m_7702_(pos)
                        trackWoodenHopper(be)
                    }
                }
            }
        } catch (e) {}
    })

    // 2. Keep cooldown refreshed every level tick and scan for pending tickers
    ForgeEvents.onEvent('net.minecraftforge.event.TickEvent$LevelTickEvent', event => {
        try {
            const level = event.level
            if (isClientSideLevel(level)) return

            scanLevelTickers(level)

            const list = global.trackedWoodenHoppers
            if (!list || list.length === 0) return
            for (let i = list.length - 1; i >= 0; i--) {
                if (!guardWoodenHopper(list[i])) {
                    list.splice(i, 1)
                }
            }
        } catch (e) {}
    })

    // 3. Block neighbor notification
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
