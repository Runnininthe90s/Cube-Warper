ServerEvents.recipes(event => {

	let arc_furnace = (output, amount, input, additives, slag, time, power) => {

        additives = additives || []

		event.custom({"type":"immersiveengineering:arc_furnace",
			"additives":additives,
			"energy":power,
			"input":{"item":input},
			"results":[{"base_ingredient":{"item":output},"count":amount}],
			"slag":{"item":slag},
			"time":time
		})
	}

	arc_furnace("caverns_and_chasms:necromium_nugget", 2,
		"caverns_and_chasms:necromium_sword",
		[],
		"thermal:slag",
		400,
		300000
	)

	arc_furnace("caverns_and_chasms:necromium_nugget", 5,
		"caverns_and_chasms:necromium_helmet",
		[],
		"thermal:slag",
		400,
		300000
	)

	arc_furnace("caverns_and_chasms:necromium_nugget", 8,
		"caverns_and_chasms:necromium_chestplate",
		[],
		"thermal:slag",
		400,
		300000
	)

	arc_furnace("caverns_and_chasms:necromium_nugget", 7,
		"caverns_and_chasms:necromium_leggings",
		[],
		"thermal:slag",
		400,
		300000
	)

	arc_furnace("caverns_and_chasms:necromium_nugget", 4,
		"caverns_and_chasms:necromium_boots",
		[],
		"thermal:slag",
		400,
		300000
	)

})