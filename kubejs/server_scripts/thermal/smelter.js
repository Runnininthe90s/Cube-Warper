ServerEvents.recipes(event => {

	event.custom({
		type: 'thermal:furnace',
		ingredient: { item: 'malum:lead_node' },
		result: [{ item: 'thermal:lead_nugget', count: 6 }],
		experience: 0.7,
		energy: 2000
	})

	event.custom({
		type: 'thermal:furnace',
		ingredient: { item: 'malum:cobalt_node' },
		result: [{ item: 'tconstruct:cobalt_nugget', count: 6 }],
		experience: 0.7,
		energy: 2000
	})

})