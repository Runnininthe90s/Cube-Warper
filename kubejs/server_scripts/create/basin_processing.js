ServerEvents.recipes(event => {

	let basin_processing = (Input1, Input2, Output, Amount) => {
		event.custom({
  			"type": "createdieselgenerators:basin_fermenting",
  			"ingredients": [
  			  {
  			    "item": Input1
  			  },
   			  {
  			    "item": Input2
  			  },
  			],
  			"heatRequirement": "heated",
  			"processingTime": 200,
  			"results": [
  			  {
  			    "fluid": Output,
  			    "amount": Amount
  			  }
  			]
		})
	}
	
	basin_processing(
		"minecraft:iron_ingot",
		"infernalexp:glowcoke",
		"tconstruct:molten_steel",
		90
	)

	basin_processing(
		"minecraft:iron_ingot",
		"immersiveengineering:coal_coke",
		"tconstruct:molten_steel",
		90
	)

})