ServerEvents.recipes(event => {

	let melting = (Input, Output, Amount) => {
		event.custom({"type": "tconstruct:melting",

			"ingredient": {
			"item": Input
			},
			"result": {
			"amount": Amount,
			"tag": Output
			},
			"temperature": 800,
			"time": 100
		})
	}

	melting(
		'supplementaries:cannonball', 
		'tconstruct:molten_lead', 
		180
	)

	melting(
		'minecraft:cobblestone', 
		'tconstruct:seared_stone', 
		1000
	)

})