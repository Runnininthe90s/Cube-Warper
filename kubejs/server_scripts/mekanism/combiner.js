ServerEvents.recipes(event => {

	event.recipes.mekanism.combining('kubejs:vector_operator_blaze', 
		'kubejs:vector_operator_empty',
		'clanginghowl:blaze_fuel'
	)

	event.recipes.mekanism.combining('kubejs:alpha_particles', 
		'regions_unexplored:alpha_rose', 
		'regions_unexplored:alpha_dandelion'
	)

	event.remove({output: 'clanginghowl:energy_fiber'})
	event.recipes.mekanism.combining('clanginghowl:energy_fiber', 
		'kubejs:bottled_lightning',
		'16x clanginghowl:extraterrestrial_energy_crystal'
	)

	event.recipes.mekanism.combining('malum:astral_weave', 
		'botania:manaweave_cloth',
		'ae2:sky_dust'
	)

})