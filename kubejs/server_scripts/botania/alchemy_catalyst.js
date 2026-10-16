ServerEvents.recipes(event => {
  event.custom({
		type: 'botania:mana_infusion',
		input: { item: 'minecraft:string' },
		output: { item: 'minecraft:feather' },
		mana: 500,
		catalyst: {
			type: 'block',
			block: 'botania:alchemy_catalyst'
		}
	})

  event.custom({
		type: 'botania:mana_infusion',
		input: { item: 'ae2:fluix_pearl' },
		output: { item: 'botania:mana_pearl' },
		mana: 6000
	})

})