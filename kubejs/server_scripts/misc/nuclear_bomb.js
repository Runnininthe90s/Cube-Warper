BlockEvents.rightClicked('alexscaves:nuclear_bomb', event => {
	if (event.item.id == 'kubejs:crowbar') {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run setblock ~ ~ ~ kubejs:nuke_open`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.zombie.attack_iron_door master @a ~ ~ ~ 0.2 0`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run title @a[distance=..10] actionbar ["",{"text":"Right-click with wirecutters to cut the ","color":"white"},{"text":"Red ","bold":true,"color":"red"},{"text":"wire, Left-click to cut the "},{"text":"Green ","bold":true,"color":"green"},{"text":"wire","color":"white"}]`)}
})

BlockEvents.rightClicked('kubejs:nuke_open', event => {
	if (event.item.id == 'immersiveengineering:wirecutter') {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function hexahedron:rng/nuclear_defusal`)
	}
})

BlockEvents.leftClicked('kubejs:nuke_open', event => {
	if (event.item.id == 'immersiveengineering:wirecutter') {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function hexahedron:rng/nuclear_defusal`)
	}
})

ItemEvents.entityInteracted('item.entity_interact', event => {
  	if (event.target.type != "alexscaves:nuclear_bomb" || event.item.id != "minecraft:shears") return
		event.cancel()
})