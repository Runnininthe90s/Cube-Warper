BlockEvents.rightClicked('kubejs:launch_button', event => {
	event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function hexahedron:first_init/world_start`)
	event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run tag @e[tag=core] add pre_runtime`)
})

BlockEvents.rightClicked('kubejs:ancient_core', event => {
    const { player, item, server, block } = event;
    if (item.id !== 'minecraft:redstone') return;
    const isMachine = player.isFake();

    if (!isMachine) {
        const now = player.level.time;
        const last = player.persistentData.getLong('core_last_use');
        if (now - last < 100) {
            event.cancel();
            return;
        }
        player.persistentData.putLong('core_last_use', now);
    }

    server.runCommandSilent(`execute in ${player.level.dimension} positioned ${block.x} ${block.y} ${block.z} run function hexahedron:machines/ancient_redstone`);
    item.count--;
    player.giveInHand('kubejs:energized_redstone');

    if (!isMachine) {
        player.addItemCooldown('minecraft:redstone', 100);
    }
})

BlockEvents.rightClicked('kubejs:ancient_core', event => {

	if (event.item.id == 'kubejs:vector_operator_infinite_empty') {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} unless score @e[distance=..2,tag=ancient_redstone,limit=1,sort=nearest] redstone_cooldown matches 1.. run function hexahedron:machines/ancient_redstone`)
		event.item.count--
		event.player.giveInHand('kubejs:vector_operator_step2')	
	}
})

ItemEvents.rightClicked('minecraft:glass_bottle', event => {
    if (event.level.dimension != "hexahedron:lavender_fields") return
		event.item.count--
		event.player.giveInHand('botania:ender_air_bottle')
		event.player.level.playSound(null, event.entity.x, event.entity.y, event.entity.z, "minecraft:item.bottle.fill_dragonbreath", "blocks", 1, 1);
})

ItemEvents.rightClicked('kubejs:portal_lantern', event => {
		event.item.count--
		event.player.level.playSound(null, event.entity.x, event.entity.y, event.entity.z, "minecraft:block.glass.break", "blocks", 1, 0);
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run function hexahedron:return_portal/return_portal`)

})

ItemEvents.rightClicked('kubejs:party_popper', event => {
		event.item.count--
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run function hexahedron:effects/confetti`)

})

BlockEvents.rightClicked(event => {
    if (event.item.id != 'alexscaves:desolate_dagger') return
    if (!event.player.isFake()) return
    if (event.block.id != 'malum:block_of_living_flesh') return

    let e = event.entity
    let at = `execute in ${e.level.dimension} positioned ${e.x} ${e.y} ${e.z} run`

    event.server.runCommandSilent(`${at} playsound minecraft:block.honey_block.place master @a ~ ~ ~ 1 0`)
    event.server.runCommandSilent(`${at} particle untagged_mobs:blood ~ ~ ~ 0 0 0 0.2 1000`)
    event.server.runCommandSilent(`${at} execute as @e[type=marker,tag=ritual_marker,distance=..5,limit=1,sort=nearest] at @s unless entity @e[tag=active_ritual] run function hexahedron:machines/shrine_ritual`)
})
	
ItemEvents.rightClicked('alexscaves:desolate_dagger', event => {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run damage @a[limit=1,sort=nearest,distance=..1] 10 minecraft:player_attack by @a[limit=1,sort=nearest,distance=..1]`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run playsound minecraft:block.honey_block.place master @a ~ ~ ~ 1 0`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run particle untagged_mobs:blood ~ ~ ~ 0 0 0 0.2 1000`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run execute as @e[type=marker,tag=ritual_marker,distance=..5,limit=1,sort=nearest] at @s unless entity @e[tag=active_ritual] run function hexahedron:machines/shrine_ritual`)
})

BlockEvents.rightClicked('kubejs:soul_cube', event => {

	if (event.item.id == 'malum:processed_soulstone') {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function hexahedron:machines/shrine_soul`)
		event.item.count--
		}
})

BlockEvents.rightClicked('untagged_mobs:skybox_missing', event => {

	if (event.item.id == 'kubejs:alpha_particles') {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function hexahedron:machines/missing_generation`)
		event.item.count--
		}
})

BlockEvents.rightClicked('incision:molar_carrion', event => {

	if (event.item.id == 'neapolitan:chocolate_cake') {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function hexahedron:machines/mouth_punch`)
		event.item.count--
	}
})

BlockEvents.rightClicked('kubejs:eye_breaker', event => {

		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function hexahedron:machines/eye_breaker`)

})

BlockEvents.leftClicked('untagged_mobs:nothing', event => {

		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run fill ~ ~ ~ ~ ~ ~ air destroy`)

})

BlockEvents.leftClicked('malum:stripped_soulwood_log', event => {

		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run setblock ~ ~ ~ malum:revealed_soulwood_log`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:block.honey_block.break master @a ~ ~ ~ 1 0`)

})

BlockEvents.rightClicked('malum:stripped_soulwood_log', event => {
	if (event.item.hasTag('c:axes')) {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run setblock ~ ~ ~ malum:revealed_soulwood_log`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:block.honey_block.break master @a ~ ~ ~ 1 0`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound malum:soulwood_break master @a ~ ~ ~ 1 1`)

	}
})