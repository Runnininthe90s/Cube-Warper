ServerEvents.recipes(event => {
	event.replaceInput({input: '#forge:dusts/grains_of_infinity'}, '#forge:dusts/grains_of_infinity', 'kubejs:grains_of_infinity')
})

BlockEvents.rightClicked('undergarden:gronglet', event => {

	let gronglet = (input, output) => {
		if (event.item.id == input) {
			event.item.count--
			event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound undergarden:block.gronglet.ambient master @a ~ ~ ~ 1 2`)
			event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.player.burp master @a ~ ~ ~ 0.3 1`)
			event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:entity.generic.eat master @a ~ ~ ~ 0.3 0.7`)
			event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run particle minecraft:sneeze ~ ~ ~ 0.3 0.3 0.3 0 5 force`)
			event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon item ~ ~ ~ {Motion:[0.0,0.3,0.0],Item:{id:"${output}",Count:1b}}`)
			event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run particle minecraft:item ${input} ~ ~0.3 ~ 0 0 0 0.05 10 force`)
		}
	}

	gronglet(
		"malum:cursed_sapball",
		"kubejs:grains_of_infinity"
	)

	gronglet(
		"malum:runic_sapball",
		"minecraft:gunpowder"
	)

})