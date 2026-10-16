ServerEvents.recipes(event => {

    event.remove({output: 'alexscaves:polymer_plate'})
	event.recipes.thermal.smelter('alexscaves:polymer_plate', ['thermal:iron_plate', 'alexscaves:radon_bottle', 'alexscaves:sulfur_dust'])

    event.remove({output: 'alexscaves:uranium_rod'})
	event.recipes.thermal.smelter('alexscaves:uranium_rod', ['alexscaves:polymer_plate', 'mekanism:yellow_cake_uranium', 'minecraft:glass'])

    event.remove({output: 'enderio:pulsating_alloy_ingot'})

	event.recipes.thermal.smelter('immersiveengineering:insulating_glass', ['thermal:iron_dust', '2x minecraft:glass'])
	
})