ServerEvents.recipes(event => {

	event.custom({"type":"mekanism:reaction",
		"duration":100,
		"fluidInput":{"amount":500,"fluid":"minecraft:water"},
		"gasInput":{"amount":100,"gas":"mekanism:oxygen"},
		"gasOutput":{"amount":100,"gas":"mekanism:antimatter"},
		"itemInput":{"ingredient":[{"item":"kubejs:error_cube"}]},
		"itemOutput":{"item":"untagged_mobs:executable_redactor"}
	})

	event.custom({"type":"mekanism:reaction",
		"duration":100,
		"fluidInput":{"amount":500,"fluid":"minecraft:water"},
		"gasInput":{"amount":1000,"gas":"mekanism:antimatter"},
		//"gasOutput":{"amount":500,"gas":"mekanism:antimatter"},
		"itemInput":{"ingredient":[{"item":"clanginghowl:extraterrestrial_energy_crystal"}]},
		"itemOutput":{"item":"mekanism:pellet_antimatter"}
	})

})