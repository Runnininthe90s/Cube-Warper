ServerEvents.recipes(event => {

	event.recipes.thermal.centrifuge([Item.of('mekanism:dust_fluorite').withChance(0.05)], 'untagged_mobs:inverse_sand')

	event.remove({ id: 'alexscaves:metal_swarf' })
	event.recipes.thermal.centrifuge([Item.of('thermal:lead_dust').withChance(0.5)], 'alexscaves:metal_swarf')
})