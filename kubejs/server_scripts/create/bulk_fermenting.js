ServerEvents.recipes(event => {

	let bulk_fermenting = (Item1, Fluid1, Amount1, Fluid2, Amount2, Output) => {
		event.custom({
		  "type": "createdieselgenerators:bulk_fermenting",
		  "ingredients": [
		    {
		      "fluid": Fluid1,
		      "amount": Amount1
		    },
		    {
		      "fluid": Fluid2,
		      "amount": Amount2
		    },
		    {
		      "item": Item1
		    }
		  ],
		  "heatRequirement": "heated",
		  "processingTime": 300,
		  "results": [
		    {
		      "item": Output
		    }
		  ]
		})
	}

    event.remove({output: 'clanginghowl:blaze_fuel'})
	bulk_fermenting(
		"minecraft:blaze_powder",
		"supplementaries:lumisene", 250,
		"thermal:glowstone", 500,
		"clanginghowl:blaze_fuel"
	)

})