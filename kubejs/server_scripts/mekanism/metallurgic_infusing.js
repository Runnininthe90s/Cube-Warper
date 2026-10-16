ServerEvents.recipes(event => {
	
	let infusing = (output, input, chemical, amount) => {
    	event.remove({output: output})	
		event.custom({"type":"mekanism:metallurgic_infusing",
			"chemicalInput":{
				"amount":amount,"tag":chemical},
				"itemInput":{"ingredient":{"item":input}},
				"output":{"item":output}}
		)
	}

	infusing("mekanism:basic_control_circuit", 
		"enderio:pulsating_alloy_ingot", 
		"mekanism:gold", 80
	)

	infusing("mekanism:advanced_control_circuit", 
		"mekanism:alloy_infused", 
		"mekanism:gold", 80
	)

	infusing("mekanism:elite_control_circuit", 
		"mekanism:alloy_reinforced", 
		"mekanism:gold", 80
	)

	infusing("mekanism:ultimate_control_circuit", 
		"mekanism:alloy_atomic", 
		"mekanism:gold", 80
	)

})