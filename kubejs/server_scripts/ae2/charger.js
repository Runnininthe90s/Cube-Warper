ServerEvents.recipes(event => {

	let block_casting = (Input, Amount, Output, Cooling) => {
		event.custom({
		  "type": "tconstruct:casting_basin",
		  "cooling_time": Cooling,
		  "fluid": {
		    "amount": Amount,
		    "tag": Input
		  },
		  "result": Output
		})
	}
	
	block_casting(
		"tconstruct:seared_stone", 1000,
		"tconstruct:seared_cobble", 10
	)

})