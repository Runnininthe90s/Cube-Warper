ServerEvents.recipes(event => {

	let charger = (Input, Output) => {
		event.custom({
			"type": "ae2:charger",
			"ingredient": {
			  "item": Input
			},
			"result": {
			  "item": Output
			}
		})
	}
	
	charger(
		"kubejs:vector_operator_empty",
		"kubejs:vector_operator_charged"
	)

})