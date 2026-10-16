ServerEvents.recipes(event => {

	event.remove({output: 'immersiveengineering:dust_uranium'})
	event.remove({output: 'mekanism:yellow_cake_uranium'})
	event.recipes.mekanism.enriching('mekanism:yellow_cake_uranium', 
		'8x alexscaves:uranium'
	)

})