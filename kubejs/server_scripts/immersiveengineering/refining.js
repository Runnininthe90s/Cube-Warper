ServerEvents.recipes(event => {

		event.remove({id: 'mekanism:gas_conversion/sulfur_to_sulfuric_acid'})
		event.custom({"type":"immersiveengineering:refinery",
			"energy":80,
			"input0":{
				"amount":8,
				"tag":"forge:sulfur_trioxide"
			},
			"input1":{
				"amount":8,
				"tag":"minecraft:water"
			},
			"result":{
				"amount":16,
				"fluid":"mekanism:sulfuric_acid"
			}
		})

})