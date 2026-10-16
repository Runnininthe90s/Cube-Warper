ServerEvents.recipes(event => {

	let chiller = (Input1, Cast, Output) => {
		event.custom({
	  		"type": "thermal:chiller",
	  		"ingredients": [
	  		  {
	  		    "fluid": Input1,
	  		    "amount": 1000
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
	)

	event.remove({output: 'clanginghowl:cryogenic_fuel'})
	chiller(
		"minecraft:water",
		"alexscaves:frostmint",
		"clanginghowl:cryogenic_fuel",
	)

	event.remove({output: 'immersiveengineering:plate_duroplast'})
	chiller(
		"immersiveengineering:phenolic_resin",
		"immersiveengineering:mold_plate",
		"immersiveengineering:plate_duroplast",
	)

})