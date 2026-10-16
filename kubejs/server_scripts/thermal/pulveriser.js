ServerEvents.recipes(event => {

	event.recipes.thermal.pulverizer(['ae2:sky_stone_block', 'ae2:sky_dust'], 'ae2:sky_stone_block')
	event.recipes.thermal.pulverizer('ae2:fluix_dust', 'ae2:fluix_crystal')

	event.recipes.thermal.pulverizer(['ae2:certus_quartz_dust'], 'ae2:certus_quartz_crystal')

	event.recipes.thermal.pulverizer(['minecraft:redstone'], 'regions_unexplored:pointed_redstone')

	event.recipes.thermal.pulverizer(['minecraft:blaze_powder'], 'minecraft:blaze_rod')
    event.recipes.createCrushing(['minecraft:blaze_powder'], 'minecraft:blaze_rod')


})