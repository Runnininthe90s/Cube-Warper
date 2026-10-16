// Step 1
BlockEvents.rightClicked('kubejs:ancient_core', event => {

	if (event.item.id == 'kubejs:vector_operator_infinite_empty') {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} unless score @e[distance=..2,tag=ancient_redstone,limit=1,sort=nearest] redstone_cooldown matches 1.. run function hexahedron:machines/ancient_redstone`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} unless score @e[distance=..2,tag=ancient_redstone,limit=1,sort=nearest] redstone_cooldown matches ..0 run execute as @e[type=marker,tag=ancient_redstone] run title @a actionbar [
  {"text":"This Ancient Redstone is recharging, wait ","bold":true,"color":"red"},
  {"score":{"name":"@s","objective":"redstone_cooldown"},"bold":true,"color":"red"},
  {"text":" more seconds...","bold":true,"color":"red"}
]`)
		event.item.count--
		event.player.giveInHand('kubejs:vector_operator_step2')	
	}
})


// Step 2
// machines/shrine_time


// Step 3
ServerEvents.recipes(event => {
	
	event.recipes.createSequencedAssembly([
		'kubejs:vector_operator_step4'
	],  'kubejs:vector_operator_step3', [
	event.recipes.createFilling('kubejs:vector_operator_step3', ['kubejs:vector_operator_step3', Fluid.of('supplementaries:lumisene', 1000)])
	]).transitionalItem('kubejs:vector_operator_step3').loops(10)

})


// Step 4
//malum/spirit_altar


// Step 5
ServerEvents.recipes(event => {
	event.recipes.mekanism.combining('kubejs:vector_operator_step6', 
		'kubejs:vector_operator_step5',
		'32x clanginghowl:blaze_fuel'
	)
})


// Step 6
// machines/shrine_lightning


// Step 7
// immersive_engineering/arc_furnace


// Step 8
// malum/weeping_well


// Step 9
// machines/shrine_ritual


// Step 10
// machines/shrine_ritual


// Step 11
// machines/shrine_ritual


// Step 12
BlockEvents.placed('kubejs:vector_operator_step12', event => {
	event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~-1 ~ kubejs:vector_tuner if score countdown_min countdown_min matches ..9 run function hexahedron:effects/final_vector_complete`)
})

// Reset
BlockEvents.placed('#kubejs:final_vector', event => {
	event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~-1 ~ kubejs:vector_tuner if block ~ ~ ~ #kubejs:final_vector run function hexahedron:effects/final_vector_reset`)
})

BlockEvents.placed('kubejs:vector_operator_step12', event => {
	event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~-1 ~ kubejs:vector_tuner if score countdown_min countdown_min matches 10.. run function hexahedron:effects/final_vector_reset`)
})
