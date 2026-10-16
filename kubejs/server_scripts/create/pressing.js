ServerEvents.recipes(event => {

	event.remove({id: 'thermal:rubber_from_vine'})
	event.remove({id: 'thermal:rubber_from_dandelion'})
  	event.recipes.create.pressing('4x thermal:rubber', '#minecraft:logs')

})