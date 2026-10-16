ServerEvents.recipes(event => {

	event.replaceInput({input: '#ae2:illuminated_panel' }, 
		'#ae2:illuminated_panel', 
		'ae2:terminal'       
	)

	event.replaceInput({input: 'ae2:quartz_fiber' }, 
		'ae2:quartz_fiber', 
		'ae2:fluix_smart_cable'       
	)

	event.replaceInput({input: 'ae2:fluix_glass_cable' }, 
		'ae2:fluix_glass_cable', 
		'ae2:fluix_smart_cable'       
	)

	event.remove({output: 'ae2:fluix_glass_cable'})
	event.remove({output: 'ae2:fluix_smart_cable'})
	event.shaped('16x ae2:fluix_smart_cable', [
		'RRR',
	  	'FFF',
	  	'RRR'  
	  	],{
	  	F: 'ae2:fluix_crystal',
	  	R: 'thermal:cured_rubber'
  	})

	event.shapeless('ae2:fluix_glass_cable', ['ae2:fluix_smart_cable'])
	event.shapeless('ae2:fluix_smart_cable', ['ae2:fluix_glass_cable'])

	event.remove({output: 'ae2:formation_core'})
	event.shaped('ae2:formation_core', [
		'   ',
	  	' D ',
	  	' S '  
	  	],{
	  	D: 'ae2:certus_quartz_dust',
	  	S: 'thermal:iron_plate'
  	})

	event.remove({output: 'ae2:annihilation_core'})
	event.shaped('ae2:annihilation_core', [
		'   ',
	  	' D ',
	  	' S '  
	  	],{
	  	D: 'ae2:fluix_dust',
	  	S: 'thermal:iron_plate'
  	})

	event.remove({output: 'aewireless:wireless_transceiver'})
	event.shaped('2x aewireless:wireless_transceiver', [
		'IWI',
	  	'LML',
	  	'IFI'  
	  	],{
	  	I: 'minecraft:iron_ingot',
	  	W: 'ae2:wireless_receiver',
	  	M: 'ae2:interface',
	  	L: 'ae2:logic_processor',
	  	F: 'alexscaves:fissile_core'
  	})

	event.remove({output: 'aeinfinitybooster:dimension_card'})
	event.shaped('aeinfinitybooster:dimension_card', [
		'EC ',
	  	'EQ ',
	  	'EF '  
	  	],{
	  	Q: 'ae2wtlib:quantum_bridge_card',
	  	C: 'kubejs:chocolate_chip',
		E: 'create:electron_tube',
		F: 'alexscaves:fissile_core'
  	})

	event.remove({output: 'ae2:wireless_access_point'})
	event.shaped('ae2:wireless_access_point', [
		' R ',
	  	'IWI',
	  	'ICI'  
	  	],{
	  	R: 'ae2:wireless_receiver',
	  	W: 'aewireless:wireless_transceiver',
	  	C: 'kubejs:chocolate_chip',
		I: 'minecraft:iron_ingot'
  	})

	event.remove({output: 'ae2:import_bus'})
	event.shaped('ae2:import_bus', [
		' C ',
	  	' F ',
	  	'   '  
	  	],{
	  	C: 'ae2:annihilation_core',
	  	F: 'ae2:fluix_smart_cable'
  	})

	event.remove({output: 'ae2:export_bus'})
	event.shaped('ae2:export_bus', [
		' C ',
	  	' F ',
	  	'   '  
	  	],{
	  	C: 'ae2:formation_core',
	  	F: 'ae2:fluix_smart_cable'
  	})

	event.remove({output: 'ae2:storage_bus'})
	event.shaped('ae2:storage_bus', [
		' C ',
	  	' I ',
	  	' E '  
	  	],{
	  	C: 'kubejs:chocolate_chip',
	  	I: 'ae2:interface',
	  	E: 'ae2:engineering_processor'
  	})

	event.replaceInput({output: 'ae2:wireless_terminal' }, 							'ae2:dense_energy_cell', 'kubejs:chocolate_chip')
	event.replaceInput({output: 'ae2:wireless_crafting_terminal' }, 				'ae2:dense_energy_cell', 'kubejs:chocolate_chip')
	event.replaceInput({output: 'ae2wtlib:wireless_pattern_encoding_terminal' }, 	'ae2:dense_energy_cell', 'kubejs:chocolate_chip')
	event.replaceInput({output: 'ae2wtlib:wireless_pattern_access_terminal' }, 		'ae2:dense_energy_cell', 'kubejs:chocolate_chip')

})