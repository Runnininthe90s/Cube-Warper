ServerEvents.recipes(event => {

	event.remove({id: 'mekanism:chemical_infusing/sulfur_trioxide'})
	event.remove({id: 'mekanism:chemical_infusing/sulfuric_acid'})

	//event.custom({"type":"mekanism:chemical_infusing",
	//	"leftInput":{
	//		"amount":1,
	//		"gas":"mekanism:water_vapor"
	//	},
	//	"output":{
	//		"amount":2,
	//		"gas":"mekanism:sulfuric_acid"
	//	},
	//	"rightInput":{
	//		"amount":2,
	//		"gas":"mekanism:sulfur_trioxide"
	//	}
	//})

})