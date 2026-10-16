ServerEvents.recipes(event => {

	event.recipes.thermal.pulverizer(['ae2:sky_stone_block', 'ae2:sky_dust'], 'ae2:sky_stone_block')
	event.recipes.thermal.pulverizer('ae2:fluix_dust', 'ae2:fluix_crystal')

	event.recipes.thermal.pulverizer(['ae2:certus_quartz_dust'], 'ae2:certus_quartz_crystal')

	event.remove({output: 'ae2:silicon'})
	event.recipes.thermal.pulverizer([
		Item.of('minecraft:gravel').withChance(0.5),
		Item.of('alexscaves:metal_swarf').withChance(0.5),
		Item.of('ae2:silicon').withChance(0.5),

	], 'alexscaves:galena')

})