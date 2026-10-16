ServerEvents.recipes(event => {

	let arc_furnace = (output, input, additives, slag, time, power) => {

        additives = additives || []

		event.custom({"type":"immersiveengineering:arc_furnace",
			"additives":additives,
			"energy":power,
			"input":{"item":input},
			"results":[{"item":output}],
			"slag":{"item":slag},
			"time":time
		})
	}


	arc_furnace("immersiveengineering:ingot_steel",
		"minecraft:iron_ingot",
		[
			{"item":"immersiveengineering:coal_coke"}
		],
		"thermal:slag",
		40,
		30000
	)

	event.remove({output: 'clanginghowl:fireproof_steel_coating'})
	arc_furnace("clanginghowl:fireproof_steel_coating",
		"immersiveengineering:plate_steel",
		[
			{"item":"clanginghowl:netherrack_shavings"}
		],
		"thermal:slag",
		400,
		300000
	)

	event.remove({output: 'enderio:end_steel_ingot'})
	arc_furnace("enderio:end_steel_ingot",
		"minecraft:end_stone",
		[
			{"item":"mekanism:dust_refined_obsidian"},
			{"item":"ae2:ender_dust"}
		],
		"create:powdered_obsidian",
		400,
		300000
	)

	event.remove({output: 'thermal:netherite_dust'})
	event.remove({output: 'minecraft:netherite_ingot'})
	arc_furnace("minecraft:netherite_ingot",
		"minecraft:gold_ingot",
		[
			{"item":"enderio:soularium_ingot"},
			{"item":"minecraft:netherite_scrap"}
		],
		"thermal:rich_slag",
		400,
		300000
	)
	event.shapeless('9x minecraft:netherite_ingot', ['minecraft:netherite_block'])
	event.shaped('minecraft:netherite_ingot', [
		'NNN',
	  	'NNN',
	  	'NNN'  
	  	],{
	  	N: 'thermal:netherite_nugget',
  	})

	event.remove({id: 'darkerdepths:forsaken_bronze_ingot_from_scrap'})
	arc_furnace("darkerdepths:forsaken_bronze_ingot",
		"kubejs:shiny_ingot",
		[
			{"item":"darkerdepths:forsaken_bronze_scrap"},
			{"item":"clanginghowl:netherrack_shavings"}
		],
		"thermal:rich_slag",
		400,
		300000
	)

    arc_furnace(
        "kubejs:vector_operator_step8",
        "kubejs:vector_operator_step7",
        [
            {
                base_ingredient: {
                    item: "enderio:pulsating_alloy_ingot"
                },
                count: 16
            },
            {
                base_ingredient: {
                    item: "mekanism:alloy_infused"
                },
                count: 16
            },
            {
                base_ingredient: {
                    item: "mekanism:alloy_reinforced"
                },
                count: 16
            },
            {
                base_ingredient: {
                    item: "mekanism:alloy_atomic"
                },
                count: 16
            }
        ],
        "thermal:rich_slag",
        400,
        300000
    )

})