ServerEvents.recipes(event => {

	let tinkers_alloying = (Output, Input1, Input2) => {
		event.recipes.thermal.smelter(
			Output, 
			[
				Input2, 
				Input1
			]
		)

		event.custom({"type":"immersiveengineering:arc_furnace",
			"additives": [{"item":Input2}],
			"energy": 51200,
			"input":{"item":Input1,},
			"results":[{"item":Output}],
			"slag":{"item":"thermal:slag"},
			"time": 100
		})
	}

	let tinkers_alloying_arc = (Output, Input1, Input2) => {

		event.custom({"type":"immersiveengineering:arc_furnace",
			"additives": [{"item":Input2}],
			"energy": 51200,
			"input":{"item":Input1,},
			"results":[{"item":Output}],
			"slag":{"item":"thermal:slag"},
			"time": 100
		})
	}
// Pewter
	event.recipes.thermal.smelter(
		Item.of('tconstruct:fake_ingot', '{Material:"tconstruct:pewter"}'), 
		[
			"minecraft:iron_ingot", 
			"thermal:lead_ingot"
		]
	)
	//tinkers_alloying(Item.of("tconstruct:fake_ingot", "{Material:"tconstruct:pewter"}"),
	//	"minecraft:iron_ingot",
	//	"thermal:lead_ingot"
	//)

// Slimes
	tinkers_alloying("tconstruct:sky_slime_ball",
		"malum:runic_sapball",
		"neapolitan:ice_cubes"
	)

	tinkers_alloying("tconstruct:ichor_slime_ball",
		"malum:cursed_sapball",
		"clanginghowl:blaze_fuel"
	)

	tinkers_alloying("tconstruct:ender_slime_ball",
		"malum:cursed_sapball",
		"ae2:ender_dust"
	)

// Alloys
	tinkers_alloying("tconstruct:knightmetal_ingot",
		"kubejs:shiny_ingot",
		"enderio:pulsating_alloy_ingot"
	)

	tinkers_alloying("tconstruct:knightslime_ingot",
		"tconstruct:knightmetal_ingot",
		"tconstruct:ender_slime_ball"
	)

	tinkers_alloying("tconstruct:slimesteel_ingot",
		"immersiveengineering:ingot_steel",
		"tconstruct:sky_slime_ball"
	)

	tinkers_alloying("tconstruct:amethyst_bronze_ingot",
		"minecraft:copper_ingot",
		"minecraft:amethyst_shard"
	)

	tinkers_alloying("tconstruct:cinderslime_ingot",
		"minecraft:gold_ingot",
		"tconstruct:ichor_slime_ball"
	)

// Arc Only
	tinkers_alloying_arc("tconstruct:queens_slime_ingot",
		"tconstruct:cobalt_ingot",
		"minecraft:magma_cream"
	)

	tinkers_alloying_arc("tconstruct:hepatizon_ingot",
		"tconstruct:cobalt_ingot",
		"minecraft:copper_ingot"
	)

})




// Pewter : 1 seared ingot and 1 lead in a smeltery of induction smelter
// Knightmetal : 1 tin, 1 nickel in the induction smelter (I think it"s not obtainable in base tinker but the ingot is here so heh.)
// Slimesteel : 1 steel, 1 blue slimeball and 1 seared stone in the induction smelter
// Amethyst bronze : 1 charged certus and 1 copper in the smeltery or the induction furnace (amethyst being an endgame item while amethyst is a pretty low tier material, I recommend using certus as an alternative)
// Pig iron : 1 iron, 1 hot chocolate bottle and 1 blood slimeball in an induction smelter
// Cinderslime :  1 gold, 1 ichor ball and 1 seared stone in an arc furnace
// Queenslime : 1 cobalt, 1 gold and 1 magma cream in the arc furnace
// Hepatizon : 2 copper*, 1 cobalt and 1 quartz in the arc furnace
// *If arc furnace recipe do not accept 2 copper ingot per craft, replace with either a single ingot or a whole block
// 
// ...That"s it for the alloys, but there are several other critical items to the mod missing : 
// 
// Skyslime ball : 1 slimeball and 1 icicle in a mixer
// Ichor ball : 1 slimeball and 1 cursed sapball in a heated mixer
// Enderslime ball : 1 slimeball and 1 ender dust in a superheated mixer
// Blood nylium : Pouring 1000mb of blood on a grass block in a casting basin (or use a mixing recipe if it"s easier to implement)
// 
// Rabbit"s foot : needed for the higher levels of the "lucky" upgrade : not having fully finished the pack yet, I do not believe the is way to obtain this, nor can I come up with an immediate alternative to it.