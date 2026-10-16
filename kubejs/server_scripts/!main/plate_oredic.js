ServerEvents.recipes(event => {

	event.replaceInput({input: 'create:iron_sheet'}, 'create:iron_sheet', 'thermal:iron_plate')
	event.replaceInput({input: 'create:copper_sheet'}, 'create:copper_sheet', 'thermal:copper_plate')
	event.replaceInput({input: 'create:golden_sheet'}, 'create:golden_sheet', 'thermal:gold_plate')
	
})