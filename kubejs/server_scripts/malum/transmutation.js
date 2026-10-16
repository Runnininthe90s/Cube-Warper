
let transmutation = (input, output) => {
    BlockEvents.rightClicked(input, event => {
	    if (event.item.id != 'malum:warp_flux') return

        event.server.runCommandSilent(
            `execute in ${event.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function hexahedron:effects/transmutation`
        )

        event.server.scheduleInTicks(1, () => {
            event.block.set(output)
        })

        event.item.count--
        event.cancel()
    })
}
	
// Metal Transmutation
	transmutation(		"thermal:lead_block",				"thermal:tin_block"				)
	transmutation(		"thermal:tin_block",				"minecraft:iron_block"			)
	transmutation(		"minecraft:iron_block",				"minecraft:copper_block"		)
	transmutation(		"minecraft:copper_block",			"thermal:silver_block"			)
	transmutation(		"thermal:silver_block",				"minecraft:gold_block"			)


// Others
	transmutation(		"botania:mana_diamond_block",		"botania:dragonstone_block"		)


