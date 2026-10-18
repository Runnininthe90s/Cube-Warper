ServerEvents.recipes(event => {

	let chiller = (Input1, Cast, Output, Amount) => {
		event.custom({
	  		"type": "thermal:chiller",
	  		"ingredients": [
	  		  {
	  		    "fluid": Input1,
	  		    "amount": Amount
	  		  },
	  		  {
	  		    "item": Cast
	  		  }
	  		],
	  		"result": [
	  		  {
	  		    "item": Output,
	  		    "count": 1
	  		  }
	  		],
	  		"energy": 5000
		})
	}
	
	chiller(
		"create:chocolate",
		"ae2:engineering_processor_press",
		"kubejs:chocolate_chip",
		1000
	)

	event.remove({output: 'clanginghowl:cryogenic_fuel'})
	chiller(
		"minecraft:water",
		"alexscaves:frostmint",
		"clanginghowl:cryogenic_fuel",
		1000
	)

	event.remove({output: 'immersiveengineering:plate_duroplast'})
	chiller(
		"immersiveengineering:phenolic_resin",
		"immersiveengineering:mold_plate",
		"immersiveengineering:plate_duroplast",
		90
	)

})