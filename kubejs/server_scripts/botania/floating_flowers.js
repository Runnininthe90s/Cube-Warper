ServerEvents.recipes(event => {

	event.remove({ output: '#botania:floating_flowers' })

	const APPLIED_ITEM = 'botania:grass_seeds'

	let floating_flowers = (block, item, result) => {
		event.custom({
			type: 'create:item_application',
			ingredients: [{ item: block }, { item: item }],
			results: [{ item: result }]
		}).id(`kubejs:floating/${result.split(':')[1]}`)
	}

	Ingredient.of('#botania:floating_flowers').itemIds.forEach(floating => {
		let path = floating.split(':')[1]
		let base = null

		if (path.startsWith('floating_')) {
		  	base = 'botania:' + path.replace('floating_', '')
		} else if (path.endsWith('_floating_flower')) {
		  	base = 'botania:' + path.replace('_floating_flower', '_mystical_flower')
		}

		if (base && Item.exists(base)) {
		  	floating_flowers(base, APPLIED_ITEM, floating)
		}
	})
})