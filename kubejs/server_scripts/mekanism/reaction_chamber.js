ServerEvents.recipes(event => {

	event.custom({"type":"mekanism:reaction",
		"duration":100,
		"fluidInput":{"amount":500,"fluid":"minecraft:water"},
		"gasInput":{"amount":100,"gas":"mekanism:oxygen"},
		"gasOutput":{"amount":100,"gas":"mekanism:antimatter"},
		"itemInput":{"ingredient":[{"item":"kubejs:error_cube"}]},
		"itemOutput":{"item":"untagged_mobs:executable_redactor"}
	})

})