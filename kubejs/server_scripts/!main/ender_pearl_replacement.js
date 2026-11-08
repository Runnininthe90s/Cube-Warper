
ServerEvents.recipes(event => {
// Ender Pearl / Eye of Ender Replacement
	const keeppearl = [
		'minecraft:ender_eye',
		'actuallyadditions:ender_casing',
		'actuallyadditions:teleport_staff',
		'thermal:enderium_dust_2'
	]

	event.replaceInput(
		{
			input: 'minecraft:ender_pearl',
    		or: [{type: 'minecraft:crafting_shaped'}, {type: 'minecraft:crafting_shapeless'}],
			not: {or: keeppearl.map(id => ({id:id}))}
		},
		'minecraft:ender_pearl',
		'ae2:fluix_pearl'
	)

	event.replaceInput(
		{
			input: 'minecraft:ender_eye',
			not: {or: keeppearl.map(id => ({id:id}))}
		},
		'minecraft:ender_eye',
		'ae2:fluix_pearl'
	)

// Missed Recipes
	event.remove({id: 'exposure:broken_interplanar_projector_fixing'})
	event.shapeless('exposure:interplanar_projector', ['exposure:broken_interplanar_projector', 'ae2:fluix_pearl'])

	event.remove({id: 'sophisticatedbackpacks:magnet_upgrade'})
	event.shaped('sophisticatedbackpacks:magnet_upgrade', [
		'PIP',
	  	'IUI',
	  	'R B'  
	  	],{
	  	I: 'minecraft:iron_ingot',
	  	P: 'ae2:fluix_pearl',
		U: 'sophisticatedbackpacks:pickup_upgrade',
		R: 'minecraft:redstone',
		B: 'minecraft:lapis_lazuli'
  	})

	event.remove({id: 'sophisticatedbackpacks:advanced_magnet_upgrade'})
	event.shaped('sophisticatedbackpacks:advanced_magnet_upgrade', [
		'PIP',
	  	'IUI',
	  	'R B'  
	  	],{
	  	I: 'minecraft:iron_ingot',
	  	P: 'ae2:fluix_pearl',
		U: 'sophisticatedbackpacks:magnet_upgrade',
		R: 'minecraft:redstone',
		B: 'minecraft:lapis_lazuli'
  	})

})