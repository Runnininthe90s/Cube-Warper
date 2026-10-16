ServerEvents.recipes(event => {

	event.remove({id: 'mekanism:oxidizing/sulfur_dioxide'})
	event.custom({"type":"mekanism:oxidizing",
		"input":{
			"ingredient":{
				"item":"alexscaves:sulfur_dust"
			}
		},
		"output":{
			"amount":100,
			"gas":"mekanism:sulfur_trioxide"
		}
	})

})