ServerEvents.recipes(event => {

    event.remove({output: 'ae2:charger'})
	event.shaped('ae2:charger', [
		'CCC', 
	  	'C  ',
	  	'CCC'  
	  	],{
	  	C: 'minecraft:copper_ingot'
  	})

    event.remove({output: 'ae2:crystal_resonance_generator'})
	event.shaped('ae2:crystal_resonance_generator', [
		'   ', 
	  	'ICI',
	  	'IQI'  
	  	],{
	  	I: 'thermal:iron_plate',
	  	C: 'immersiveengineering:coil_lv',
	  	Q: 'ae2:calculation_processor'

  	})

	event.shaped('forestry:peat', [
		'PPP', 
	  	'PPP',
	  	'PPP'  
	  	],{
	  	P: '#hexahedron:peat_block'
  	})

    event.remove({output: 'create:piston_extension_pole'})
	event.shaped('8x create:piston_extension_pole', [
		' W ', 
	  	' S ',
	  	' W '  
	  	],{
	  	W: '#minecraft:planks',
	  	S: 'minecraft:cobblestone'
  	})

    event.remove({output: 'forestry:engine_peat'})
	event.shaped('forestry:engine_peat', [
		'WWW', 
	  	' P ',
	  	'CFC'  
	  	],{
	  	W: '#minecraft:planks',
	  	P: 'create:piston_extension_pole',
	  	C: 'minecraft:copper_ingot',
	  	F: 'minecraft:furnace'
  	})

    event.remove({output: 'miners_delight:copper_pot'})
	event.shaped('miners_delight:copper_pot', [
		' S ', 
	  	'C C',
	  	'CCC'  
	  	],{
	  	C: 'minecraft:copper_ingot',
	  	S: 'minecraft:wooden_shovel'
  	})

	event.shaped('kubejs:half_frame_bottom', [
		'   ', 
	  	'L L',
	  	'LLL'  
	  	],{
	  	L: 'thermal:lead_ingot'
  	})

	event.shaped('kubejs:half_frame_top', [
		'III', 
	  	'I I',
	  	'   '  
	  	],{
	  	I: 'minecraft:iron_ingot'
  	})

    event.remove({output: 'alexscaves:nuclear_furnace_component'})
	event.shaped('4x alexscaves:nuclear_furnace_component', [
		'LPL', 
	  	'PFP',
	  	'LPL'  
	  	],{
	  	L: 'thermal:lead_plate',
	  	P: 'alexscaves:polymer_plate',
	  	F: 'alexscaves:fissile_core'
  	})

    event.remove({output: 'clanginghowl:crystal_former'})
	event.shaped('clanginghowl:crystal_former', [
		' G ', 
	  	' B ',
	  	' F '  
	  	],{
	  	G: 'clanginghowl:extraterrestrial_steel_grate',
	  	B: 'minecraft:blue_ice',
	  	F: 'create:fluid_tank'
  	})

    event.remove({output: 'forestry:fabricator'})
	event.shaped('forestry:fabricator', [
		'ICI', 
	  	'BFB',
	  	'IEI'  
	  	],{
	  	I: 'create:zinc_ingot',
	  	F: 'thermal:machine_crafter',
	  	C: 'thermal:rf_coil',
	  	E: 'immersiveengineering:furnace_heater',
		B: 'clanginghowl:energy_battery'
  	})

    event.remove({output: 'botania:apothecary_mossy'})
    event.remove({output: 'botania:apothecary_deepslate'})
    event.remove({output: 'botania:apothecary_default'})
    event.remove({output: 'botania:apothecary_livingrock'})
	event.shaped('botania:apothecary_livingrock', [
		'L L', 
	  	' L ',
	  	'LLL'  
	  	],{
	  	L: 'botania:livingrock'
  	})

    event.remove({output: 'mekanism:steel_casing'})
	event.shaped('mekanism:steel_casing', [
		'OCO', 
	  	'SMS',
	  	'OSO'  
	  	],{
	  	C: 'kubejs:cooling_unit',
	  	O: 'mekanism:ingot_osmium',
	  	S: 'immersiveengineering:plate_steel',
	  	M: 'kubejs:chocolate_chip'
  	})

	event.shaped('kubejs:cooling_unit', [
		' P ', 
	  	'SCS',
	  	' S '  
	  	],{
	  	P: 'create:propeller',
	  	C: 'clanginghowl:cryogenic_fuel',
	  	S: 'immersiveengineering:plate_steel'
  	})

    event.remove({output: 'ae2:controller'})
	event.shaped('ae2:controller', [
		'LLL', 
	  	'EFE',
	  	'CCC'  
	  	],{
	  	L: 'ae2:logic_processor',
	  	E: 'forestry:electron_tube_emerald',
	  	F: 'alexscaves:fissile_core',
	  	C: 'ae2:calculation_processor'
  	})

    event.remove({output: 'thermal:dynamo_magmatic'})
	event.shaped('thermal:dynamo_magmatic', [
		' R ', 
	  	'IEI',
	  	'LFL'  
	  	],{
	  	R: 'thermal:rf_coil',
	  	I: 'minecraft:iron_ingot',
	  	T: 'toughasnails:thermometer',
	  	L: 'thermal:lead_ingot',
	  	F: 'create:fluid_tank',
		E: 'kubejs:energized_redstone'
  	})

    event.remove({output: 'mekanism:basic_universal_cable'})
	event.shaped('8x mekanism:basic_universal_cable', [
		' C ', 
	  	'RER',
	  	' C '  
	  	],{
	  	R: 'minecraft:redstone',
	  	E: 'kubejs:energized_redstone',
	  	C: 'immersiveengineering:wirecoil_copper'
  	})

    event.remove({output: 'clanginghowl:redstone_wire'})
	event.shaped('clanginghowl:redstone_wire', [
		'   ', 
	  	'CRC',
	  	'   '  
	  	],{
	  	R: 'kubejs:energized_redstone',
	  	C: 'immersiveengineering:wire_copper'
  	})

    event.remove({output: 'immersiveengineering:wirecoil_redstone'})
	event.shaped('4x immersiveengineering:wirecoil_redstone', [
		' W ', 
	  	'WSW',
	  	' W '  
	  	],{
	  	S: '#forge:rods/wooden',
	  	W: 'clanginghowl:redstone_wire'
  	})

    event.remove({output: 'thermal:rf_coil'})
	event.shaped('thermal:rf_coil', [
		'WWW', 
	  	'WGW',
	  	'WWW'  
	  	],{
	  	G: 'minecraft:gold_ingot',
	  	W: 'immersiveengineering:wirecoil_redstone'
  	})

    event.remove({output: 'createdieselgenerators:wire_cutters'})
	event.shaped('createdieselgenerators:wire_cutters', [
		' I ', 
	  	'SII',
	  	' S '  
	  	],{
	  	S: 'minecraft:stick',
	  	I: 'thermal:iron_plate'
  	})

    event.remove({output: 'ae2:terminal'})
	event.shaped('ae2:terminal', [
		' RG', 
	  	'ICG',
	  	' RG'  
	  	],{
	  	G: '#forge:glass',
	  	R: 'clanginghowl:redstone_wire',
	  	C: 'ae2:calculation_processor',
	  	I: 'thermal:iron_plate'
  	})

    event.remove({output: 'ae2:drive'})
	event.shaped('ae2:drive', [
		'ICI', 
	  	'F F',
	  	'ICI'  
	  	],{
	  	F: 'ae2:fluix_smart_cable',
	  	C: 'ae2:calculation_processor',
	  	I: 'minecraft:iron_ingot'
  	})

    event.remove({output: 'ae2:inscriber'})
	event.shaped('ae2:inscriber', [
		'IQI', 
	  	'RC ',
	  	'IQI'  
	  	],{
	  	Q: 'ae2:certus_quartz_crystal',
	  	R: 'clanginghowl:redstone_wire',
	  	C: 'ae2:charger',
	  	I: 'minecraft:iron_ingot'
  	})

    event.remove({output: 'clanginghowl:energy_battery'})
	event.shaped(Item.of('clanginghowl:energy_battery', '{Energy:0,"Max Energy":0}'), [
		' SC', 
	  	'SRS',
	  	'ZS '  
	  	],{
	  	S: 'ae2:silicon',
	  	R: 'clanginghowl:redstone_wire',
	  	C: 'minecraft:copper_ingot',
	  	Z: 'create:zinc_ingot'
  	})

    event.remove({output: 'clanginghowl:energy_intensive_battery'})
	event.shaped(Item.of('clanginghowl:energy_intensive_battery', '{Energy:0,"Max Energy":0}'), [
		' BE', 
	  	'BCB',
	  	'EB '  
	  	],{
	  	B: 'clanginghowl:energy_battery',
	  	E: 'thermal:electrum_ingot',
	  	C: 'clanginghowl:extraterrestrial_energy_crystal'
  	})

    event.remove({output: 'clanginghowl:advanced_energy_battery'})
	event.shaped(Item.of('clanginghowl:advanced_energy_battery', '{Energy:0,"Max Energy":0}'), [
		'PBF', 
	  	'BCB',
	  	'FBP'  
	  	],{
	  	B: 'clanginghowl:energy_intensive_battery',
	  	F: 'clanginghowl:energy_fiber',
	  	C: 'kubejs:circuitboard',
	  	P: 'kubejs:plastic'
  	})

    event.remove({output: 'minecraft:lightning_rod'})
	event.shaped('minecraft:lightning_rod', [
		' C ', 
	  	' C ',
	  	' C '  
	  	],{
		C: 'minecraft:copper_ingot'
  	})

    event.remove({output: 'clanginghowl:stationary_charging_station'})
	event.shaped('clanginghowl:stationary_charging_station', [
		'L L', 
	  	'BCB',
	  	'EEE'  
	  	],{
	  	E: 'immersiveengineering:plate_steel',
	  	B: 'clanginghowl:energy_battery',
	  	L: 'minecraft:lightning_rod',
		C: 'clanginghowl:extraterrestrial_energy_crystal'
  	})

    event.remove({output: 'clanginghowl:advanced_hand_drill'})
	event.shaped('clanginghowl:advanced_hand_drill', [
		'DC ', 
	  	'REC',
	  	' BW'  
	  	],{
	  	E: 'immersiveengineering:ingot_steel',
		D: 'thermal:drill_head',
		C: 'minecraft:copper_ingot',
	  	B: 'clanginghowl:energy_intensive_battery',
	  	R: 'immersiveengineering:stick_steel',
		W: 'clanginghowl:redstone_wire'
  	})

    event.remove({output: 'clanginghowl:advanced_chainsword'})
	event.shaped('clanginghowl:advanced_chainsword', [
		'CEW', 
	  	'CEB',
	  	' RI'  
	  	],{
	  	C: 'clanginghowl:chainsaw_teeth',
	  	E: 'immersiveengineering:ingot_steel',
		I: 'minecraft:copper_ingot',
	  	B: 'clanginghowl:energy_intensive_battery',
	  	R: 'immersiveengineering:stick_steel',
		W: 'clanginghowl:redstone_wire'
  	})

    event.remove({output: 'clanginghowl:advanced_chainsaw'})
	event.shaped('clanginghowl:advanced_chainsaw', [
		' IB', 
	  	'CEW',
	  	'CC '  
	  	],{
	  	C: 'clanginghowl:chainsaw_teeth',
	  	E: 'immersiveengineering:ingot_steel',
		I: 'minecraft:copper_ingot',
	  	B: 'clanginghowl:energy_intensive_battery',
		W: 'clanginghowl:redstone_wire'
  	})

    event.remove({output: 'thermal:machine_chiller'})
	event.shaped('thermal:machine_chiller', [
		'ISI', 
	  	'GFG',
	  	'ICI'  
	  	],{
	  	I: 'minecraft:iron_ingot',
	  	S: 'alexscaves:large_peppermint',
		G: 'immersiveengineering:insulating_glass',
	  	F: 'thermal:machine_frame',
		C: 'brewinandchewin:ice_crate'
  	})

    event.remove({output: 'thermal:machine_crucible'})
	event.shaped('thermal:machine_crucible', [
		'ICI', 
	  	'HFH',
	  	'IRI'  
	  	],{
	  	I: 'minecraft:iron_ingot',
	  	C: 'kubejs:chocolate_chip',
		H: 'immersiveengineering:furnace_heater',
	  	F: 'thermal:machine_frame',
		R: 'botania:rune_fire'
  	})

    event.remove({output: 'thermal:machine_insolator'})
	event.shaped('thermal:machine_insolator', [
		'IGI', 
	  	'DFD',
	  	'IEI'  
	  	],{
	  	I: 'minecraft:iron_ingot',
	  	G: 'ae2:growth_accelerator',
		D: 'minecraft:dirt',
	  	F: 'thermal:machine_frame',
		E: 'botania:rune_earth'
  	})

    event.remove({output: 'immersiveengineering:cokebrick'})
	event.shaped('3x immersiveengineering:cokebrick', [
		'LBL',
	  	'BFB',
	  	'LBL'  
	  	],{
	  	L: 'alexscaves:limestone',
	  	B: 'supplementaries:ash_brick',
	  	F: 'create:cinder_flour'
  	})

    event.remove({output: 'supplementaries:altimeter'})

	event.replaceInput({input: 'ae2:quartz_glass' }, 
		'ae2:quartz_glass', 
		'#forge:glass'       
	)

    event.remove({output: 'actuallyadditions:lava_factory_casing'})
	event.shaped('actuallyadditions:lava_factory_casing', [
		'IPI',
	  	'PEP',
	  	'IPI'  
	  	],{
	  	I: 'immersiveengineering:ingot_steel',
	  	P: 'immersiveengineering:plate_steel',
	  	E: 'clanginghowl:energy_fiber'
  	})

    event.remove({output: 'actuallyadditions:atomic_reconstructor'})
	event.shaped('actuallyadditions:atomic_reconstructor', [
		' L ',
	  	'BCB',
	  	' E '  
	  	],{
	  	B: 'clanginghowl:energy_intensive_battery',
	  	E: 'immersiveengineering:component_electronic',
	  	C: 'actuallyadditions:lava_factory_casing',
	  	L: 'botania:lens_influence'
  	})

    event.remove({output: 'actuallyadditions:display_stand'})
	event.shaped('2x actuallyadditions:display_stand', [
		' E ',
	  	'DBD',
	  	'QCQ'  
	  	],{
	  	B: 'clanginghowl:energy_intensive_battery',
	  	E: 'ae2:charger',
	  	C: 'actuallyadditions:lava_factory_casing',
		D: 'forestry:electron_tube_diamond',
		Q: 'immersiveengineering:component_electronic'
  	})

    event.remove({output: 'actuallyadditions:empowerer'})
	event.shaped('actuallyadditions:empowerer', [
		' T ',
	  	'LBL',
	  	'QCQ'  
	  	],{
	  	B: 'clanginghowl:energy_intensive_battery',
	  	T: 'caverns_and_chasms:turquoise',
	  	C: 'actuallyadditions:lava_factory_casing',
		L: 'kubejs:bottled_lightning',
		Q: 'immersiveengineering:component_electronic_adv'
  	})

    event.remove({output: 'enderio:ensouled_chassis'})
	event.shaped('enderio:ensouled_chassis', [
		'IPI',
	  	'PVP',
	  	'ICI'
	  	],{
	  	P: 'kubejs:peeking_circuit',
	  	I: 'enderio:soularium_ingot',
	  	C: 'kubejs:computer',
	  	V: 'enderio:void_chassis'
		
  	})

	event.remove({output: 'enderio:void_chassis'})
	event.shaped('enderio:void_chassis', [
		'IRI',
	  	'RSR',
	  	'IRI'
	  	],{
	  	R: 'enderio:infinity_rod',
	  	I: 'caverns_and_chasms:necromium_ingot',
	  	S: 'immersiveengineering:steel_scaffolding_standard',
		
  	})
	
    event.remove({output: 'enderio:empty_soul_vial'})
	event.shaped('enderio:empty_soul_vial', [
		' O ',
	  	'S S',
	  	' S '  
	  	],{
	  	O: 'minecraft:obsidian',
	  	S: 'tconstruct:soul_glass'
  	})

    event.remove({output: 'enderio:sag_mill'})
	event.shaped('enderio:sag_mill', [
		'CBD',
	  	'WVW',
	  	'EPE'  
	  	],{
	  	V: 'enderio:void_chassis',
	  	W: 'create:crushing_wheel',
	  	P: 'thermal:machine_pulverizer',
	  	D: 'thermal:drill_head',
	  	C: 'clanginghowl:chainsaw_teeth',
	  	B: 'forestry:electron_tube_blaze',
	  	E: 'immersiveengineering:heavy_engineering'
  	})

    event.remove({output: 'alexscaves:desolate_dagger'})
	event.shaped('alexscaves:desolate_dagger', [
		'  F',
	  	'DE ',
	  	'BD '  
	  	],{
	  	D: 'enderio:dark_steel_ingot',
	  	E: 'kubejs:crimson_eye',
	  	B: 'alexscaves:thornwood_branch',
	  	F: 'incision:vile_fang'
  	})

    event.remove({output: 'untagged_mobs:item_missing'})
	event.remove({output: 'untagged_mobs:skybox_missing'})

	event.shaped('untagged_mobs:nullpoint_tiles', [
		'NNN',
	  	'NNN',
	  	'NNN'  
	  	],{
	  	N: 'untagged_mobs:null_item'
  	})

	event.shaped('kubejs:computer', [
		'SFS',
	  	'PMP',
	  	'SCS'  
	  	],{
	  	S: 'clanginghowl:fireproof_steel_coating',
	  	C: 'kubejs:circuitboard',
	  	M: 'mekanism:steel_casing',
	  	P: 'kubejs:plastic',
	  	F: 'kubejs:cooling_unit'
  	})

	event.remove({output: 'enderio:primitive_alloy_smelter'})	
	event.remove({output: 'enderio:alloy_smelter'})
	event.shaped('enderio:alloy_smelter', [
		'123',
	  	'PVP',
	  	'NCN'  
	  	],{
	  	N: 'caverns_and_chasms:necromium_ingot',
	  	V: 'enderio:void_chassis',
	  	P: 'kubejs:peeking_circuit',
		C: 'kubejs:computer',
	  	1: 'minecraft:furnace',
	  	2: 'alexscaves:nuclear_furnace_component',
	  	3: 'thermal:machine_smelter'
  	})

	event.remove({output: 'enderio:basic_capacitor'})	
	event.shaped('enderio:basic_capacitor', [
		' B ',
	  	'SFS',
	  	'E E'  
	  	],{
	  	E: 'thermal:electrum_ingot',
	  	F: 'clanginghowl:energy_fiber',
	  	S: 'immersiveengineering:plate_steel',
	  	B: 'forestry:electron_tube_blaze',
	  	F: 'clanginghowl:energy_fiber'
  	})

	event.remove({output: 'malum:spirit_altar'})
	event.shaped('malum:spirit_altar', [
		' R ',
	  	'GFG',
	  	'WCW'  
	  	],{
	  	W: 'malum:runewood_planks',
	  	G: 'minecraft:gold_ingot',
	  	F: 'forestry:electron_tube_gold',
	  	R: 'botania:rune_mana',
		C: 'malum:block_of_alchemical_calx'
  	})

	event.remove({output: 'createdieselgenerators:bulk_fermenter'})
	event.shaped('createdieselgenerators:bulk_fermenter', [
		' S ',
	  	'SBS',
	  	' S '  
	  	],{
	  	B: 'alexscaves:metal_barrel',
	  	S: 'immersiveengineering:plate_steel'
  	})

	event.remove({output: 'mekanism:metallurgic_infuser'})
	event.shaped('mekanism:metallurgic_infuser', [
		'SIS',
	  	'EME',
	  	'SHS'  
	  	],{
	  	M: 'mekanism:steel_casing',
	  	S: 'immersiveengineering:plate_steel',
	  	E: 'forestry:electron_tube_gold',
	  	I: 'ae2:inscriber',
	  	H: 'immersiveengineering:furnace_heater',
  	})

	event.remove({output: 'mekanism:combiner'})
	event.shaped('mekanism:combiner', [
		'SPS',
	  	'BMB',
	  	'SCS'  
	  	],{
	  	M: 'mekanism:steel_casing',
	  	S: 'immersiveengineering:plate_steel',
	  	B: 'mekanism:basic_control_circuit',
	  	C: 'thermal:machine_crafter',
	  	P: 'thermal:machine_press'
  	})

	event.remove({output: 'mekanism:enrichment_chamber'})
	event.shaped('mekanism:enrichment_chamber', [
		'SRS',
	  	'LOL',
	  	'SBS'  
	  	],{
	  	S: 'enderio:pulsating_alloy_ingot',
		O: 'thermal:machine_frame',
		L: 'forestry:electron_tube_lapis',
		R: 'clanginghowl:redstone_wire',
		B: 'clanginghowl:energy_battery'
  	})

	event.remove({output: 'mekanism:osmium_compressor'})
	event.shaped('mekanism:osmium_compressor', [
		'SRS',
	  	'IOI',
	  	'SBS'  
	  	],{
	  	S: 'kubejs:shiny_ingot',
		O: 'thermal:machine_frame',
		I: 'forestry:electron_tube_iron',
		R: 'clanginghowl:redstone_wire',
		B: 'clanginghowl:energy_battery'
  	})

	event.remove({output: 'alexscaves:metal_barrel'})
	event.shaped('alexscaves:metal_barrel', [
		'SSS',
	  	'S S',
	  	'SSS'  
	  	],{
	  	S: 'immersiveengineering:sheetmetal_iron'
  	})

	event.shaped('kubejs:empty_shell', [
		'   ',
	  	'S S',
	  	'SSS'  
	  	],{
	  	S: 'thermal:silver_ingot'
  	})

	event.remove({output: 'caverns_and_chasms:copper_grate'})
	event.shaped('caverns_and_chasms:copper_grate', [
		' C ',
	  	'C C',
	  	' C '  
	  	],{
	  	C: 'minecraft:copper_ingot'
  	})

	event.remove({output: 'create:hand_crank'})
	event.shaped('create:hand_crank', [
		'  L',
	  	'WWW',
	  	' A '  
	  	],{
	  	L: 'thermal:lead_ingot',
	  	W: '#minecraft:planks',
	  	A: 'create:andesite_alloy'
  	})

	event.remove({output: 'thermal:servo_attachment'})
	event.shaped('thermal:servo_attachment', [
		' C ',
	  	' S ',
	  	'   '  
	  	],{
	  	C: 'minecraft:copper_ingot',
	  	S: 'thermal:redstone_servo'
  	})

	event.remove({output: 'thermal:turbo_servo_attachment'})
	event.shaped('thermal:turbo_servo_attachment', [
		' P ',
	  	' S ',
	  	'   '  
	  	],{
	  	P: 'immersiveengineering:fluid_pump',
	  	S: 'thermal:redstone_servo'
  	})

	event.remove({output: 'thermal:filter_attachment'})
	event.shaped('thermal:filter_attachment', [
		' F ',
	  	' S ',
	  	'   '  
	  	],{
	  	F: 'create:filter',
	  	S: 'thermal:servo_attachment'
  	})

	event.remove({output: 'thermal:energy_limiter_attachment'})
	event.shaped('thermal:energy_limiter_attachment', [
		' E ',
	  	' R ',
	  	'   '  
	  	],{
	  	E: 'thermal:electrum_ingot',
	  	R: 'minecraft:redstone'
  	})

	event.remove({output: 'create:steam_engine'})
	event.shaped('create:steam_engine', [
		' G ',
	  	' A ',
	  	' C '  
	  	],{
	  	C: 'minecraft:copper_block',
	  	A: 'create:andesite_alloy',
	  	G: 'minecraft:gold_ingot'
  	})

	event.remove({output: 'create:steam_engine'})
	event.shaped('create:steam_engine', [
		' G ',
	  	' A ',
	  	' C '  
	  	],{
	  	C: 'minecraft:copper_block',
	  	A: 'create:andesite_alloy',
	  	G: 'minecraft:gold_ingot'
  	})

	event.remove({output: 'thermal:fluid_duct'})
	event.shaped('6x thermal:fluid_duct', [
		'CCC',
	  	'   ',
	  	'CCC'  
	  	],{
	  	C: 'minecraft:copper_ingot'
  	})

	event.shaped('kubejs:block_shiny_ingot', [
		'SSS',
	  	'SSS',
	  	'SSS'  
	  	],{
	  	S: 'kubejs:shiny_ingot'
  	})

	event.remove({output: 'forestry:carpenter'})
	event.shaped('forestry:carpenter', [
		'ABA',
	  	'AEA',
	  	'ACA'  
	  	],{
	  	A: 'thermal:tin_ingot',
		C: 'kubejs:chocolate_chip',
		E: 'clanginghowl:extraterrestrial_energy_crystal',
		B: 'forestry:electron_tube_blaze'
  	})

	event.shaped('kubejs:engineering_light_empty', [
		'A A',
	  	'   ',
	  	'A A'  
	  	],{
	  	A: 'immersiveengineering:ingot_aluminum'
  	})

	event.shaped('kubejs:engineering_heavy_empty', [
		'S S',
	  	'   ',
	  	'S S'  
	  	],{
	  	S: 'immersiveengineering:ingot_steel'
  	})

	event.remove({output: 'forestry:worktable'})
	event.shaped('forestry:worktable', [
		' I ',
	  	'ICI',
	  	' I '  
	  	],{
	  	C: 'minecraft:crafting_table',
	  	I: 'minecraft:copper_ingot',
  	})

	event.remove({output: 'botania:runic_altar'})
	event.shaped('botania:runic_altar', [
		'   ',
	  	'LML',
	  	'LBL'  
	  	],{
	  	L: 'botania:livingrock',
	  	B: 'supplementaries:lumisene_bottle',
	  	M: 'botania:manasteel_ingot',
  	})

	event.remove({output: 'mekanism:rotary_condensentrator'})
	event.shaped('mekanism:rotary_condensentrator', [
		'OCO',
	  	'CME',
	  	'OBO'  
	  	],{
	  	O: 'mekanism:ingot_osmium',
	  	M: 'mekanism:steel_casing',
	  	E: 'immersiveengineering:component_electronic',
		C: 'mekanism:basic_control_circuit',
		B: 'clanginghowl:energy_battery',
		C: 'thermal:machine_centrifuge'
  	})

	event.remove({output: 'mekanism:chemical_oxidizer'})
	event.shaped('mekanism:chemical_oxidizer', [
		'OPO',
	  	'CME',
	  	'OBO'  
	  	],{
	  	O: 'mekanism:ingot_osmium',
	  	M: 'mekanism:steel_casing',
	  	E: 'immersiveengineering:component_electronic_adv',
		C: 'mekanism:advanced_control_circuit',
		B: 'clanginghowl:energy_intensive_battery',
		P: 'mekanism:pressure_disperser'
  	})

	event.remove({output: 'mekanism:chemical_infuser'})
	event.shaped('mekanism:chemical_infuser', [
		'OAO',
	  	'CME',
	  	'OBO'  
	  	],{
	  	O: 'mekanism:ingot_osmium',
	  	M: 'mekanism:steel_casing',
	  	E: 'immersiveengineering:component_electronic_adv',
		C: 'mekanism:advanced_control_circuit',
		B: 'clanginghowl:energy_intensive_battery',
		A: 'thermal:machine_brewer'
  	})

	event.remove({output: 'clanginghowl:chainsaw_teeth'})
	event.shaped('clanginghowl:chainsaw_teeth', [
		' SS',
	  	'S S',
	  	'SS '  
	  	],{
	  	S: 'immersiveengineering:nugget_steel'
  	})

	event.remove({output: 'clanginghowl:blaze_fuel_cylinder'})
	event.shaped('clanginghowl:blaze_fuel_cylinder', [
		' C ',
	  	'SBS',
	  	' S '  
	  	],{
	  	S: 'immersiveengineering:nugget_steel',
		B: 'clanginghowl:blaze_fuel',
		C: 'minecraft:copper_ingot'
  	})

	event.remove({output: 'enderio:cake_base'})
	event.shaped('enderio:cake_base', [
		'   ',
	  	'   ',
	  	'CCC'  
	  	],{
	  	C: 'alexscaves:cake_layer'
  	})

	event.remove({output: 'create:blaze_cake_base'})
	event.shaped('create:blaze_cake_base', [
		'   ',
	  	'   ',
	  	'CFC'  
	  	],{
	  	C: 'alexscaves:cake_layer',
	  	F: 'create:cinder_flour'
  	})

	event.shaped('kubejs:eye_breaker', [
		'FFF',
	  	'NVN',
	  	'NPN'  
	  	],{
	  	F: 'incision:vile_fang',
	  	V: 'enderio:void_chassis',
	  	N: 'minecraft:netherite_ingot',
	  	P: 'kubejs:peeking_circuit'
  	})

	event.shaped('untagged_mobs:nothing', [
		'EEE',
	  	'EVE',
	  	'EEE'  
	  	],{
	  	E: 'botania:ender_air_bottle',
	  	V: 'enderio:void_chassis'
  	})

	event.remove({output: 'untagged_mobs:default_cube'})
	event.shaped('untagged_mobs:default_cube', [
		'AA ',
	  	'AA ',
	  	'   '  
	  	],{
	  	A: 'untagged_mobs:alpha_clay_ball'
  	})

	event.remove({output: 'untagged_mobs:default_sphere'})
	event.shaped('untagged_mobs:default_sphere', [
		' A ',
	  	'A A',
	  	' A '  
	  	],{
	  	A: 'untagged_mobs:alpha_clay_ball'
  	})

	event.remove({output: 'mekanism:pressurized_reaction_chamber'})
	event.shaped('mekanism:pressurized_reaction_chamber', [
		'PCP',
	  	'BSB',
	  	'EDE'  
	  	],{
	  	B: 'clanginghowl:advanced_energy_battery',
	  	E: 'mekanism:elite_control_circuit',
	  	D: 'mekanism:pressure_disperser',
	  	S: 'mekanism:steel_casing',
	  	C: 'kubejs:computer',
	  	P: 'kubejs:peeking_circuit'
  	})

	event.remove({output: 'mekanism:chemical_crystallizer'})
	event.shaped('mekanism:chemical_crystallizer', [
		'PCP',
	  	'BSB',
	  	'EME'  
	  	],{
	  	B: 'clanginghowl:advanced_energy_battery',
	  	E: 'mekanism:elite_control_circuit',
	  	M: 'thermal:machine_crystallizer',
	  	S: 'mekanism:steel_casing',
	  	C: 'kubejs:computer',
	  	P: 'kubejs:peeking_circuit'
  	})

	event.remove({output: 'untagged_mobs:censored_for_viewer_discretion'})
	event.shaped('untagged_mobs:censored_for_viewer_discretion', [
		'R  ',
	  	'R  ',
	  	'B  '  
	  	],{
	  	B: 'untagged_mobs:bugging_stick',
	  	R: 'untagged_mobs:executable_redactor'
  	})

	event.remove({output: 'mekanism:chemical_dissolution_chamber'})
	event.shaped('mekanism:chemical_dissolution_chamber', [
		'SUS',
	  	'CMC',
	  	'AEA'  
	  	],{
	  	A: 'mekanism:alloy_atomic',
	  	E: 'mekanism:enrichment_chamber',
	  	M: 'mekanism:steel_casing',
	  	C: 'kubejs:computer',
		U: 'mekanism:ultimate_control_circuit',
		S: 'kubejs:seeking_circuit'
  	})

	event.remove({output: 'mekanism:isotopic_centrifuge'})
	event.shaped('mekanism:isotopic_centrifuge', [
		'SUS',
	  	'CMC',
	  	'AEA'  
	  	],{
	  	A: 'mekanism:alloy_atomic',
	  	E: 'thermal:machine_centrifuge',
	  	M: 'mekanism:steel_casing',
	  	C: 'kubejs:computer',
		U: 'mekanism:ultimate_control_circuit',
		S: 'kubejs:seeking_circuit'
  	})

	event.remove({output: 'mekanism:chemical_injection_chamber'})
	event.shaped('mekanism:chemical_injection_chamber', [
		'SUS',
	  	'CMC',
	  	'AEA'  
	  	],{
	  	A: 'mekanism:alloy_atomic',
	  	E: 'forestry:electron_tube_ender',
	  	M: 'mekanism:steel_casing',
	  	C: 'kubejs:computer',
		U: 'mekanism:ultimate_control_circuit',
		S: 'kubejs:seeking_circuit'
  	})

	event.shaped('kubejs:recaptured_consciousness_empty', [
		'NON',
	  	'SES',
	  	'NCN'  
	  	],{
	  	N: 'enderio:dark_steel_ingot',
	  	E: 'enderio:ensouled_chassis',
	  	C: 'mekanism:ultimate_control_circuit',
		S: 'kubejs:seeking_circuit',
		O: 'forestry:electron_tube_obsidian'
  	})

	//event.shaped('kubejs:supercomputer', [
	//	'OUO',
	//  'SRS',
	//  'ACA'  
	//  ],{
	//  U: 'mekanism:ultimate_control_circuit',
	//  R: 'kubejs:recaptured_consciousness',
	//  C: 'kubejs:computer',
	//	S: 'kubejs:seeking_circuit',
	//	O: 'forestry:electron_tube_obsidian',
	//	A: 'mekanism:alloy_atomic'
  	//})

	event.remove({output: 'clanginghowl:flamethrower'})
	event.shaped('clanginghowl:flamethrower', [
		'P  ',
	  	'BPS',
	  	' CS'  
	  	],{
	  	P: 'create:fluid_pipe',
	  	B: 'clanginghowl:blaze_burner',
	  	C: 'clanginghowl:blaze_fuel_cylinder',
		S: 'immersiveengineering:ingot_steel'
  	})

	event.shaped(Item.of('kubejs:adilette', '{AttributeModifiers:[{Amount:5,AttributeName:"generic.attack_damage",Name:"generic.attack_damage",Operation:0,Slot:"mainhand",UUID:[I;-1921186012,-1080931508,-1909593174,-120252776]}]}').enchant('minecraft:bane_of_arthropods', 6).enchant('minecraft:knockback', 2), [
		'   ',
	  	' R ',
	  	'RRR'  
	  	],{
	  	R: 'thermal:cured_rubber'
  	})

	event.remove({output: 'create:brass_hand'})
	event.shaped('create:brass_hand', [
		' G ',
	  	'GGG',
	  	' A '  
	  	],{
	  	A: 'create:andesite_alloy',
	  	G: 'thermal:gold_plate'
  	})

	event.remove({output: 'alexscaves:frostmint'})
	event.shaped('alexscaves:frostmint', [
		'PPP',
	  	'PSP',
	  	'PPP'  
	  	],{
	  	P: 'alexscaves:peppermint_powder',
	  	S: 'minecraft:snow_block'
  	})

	event.remove({output: 'exposure:camera_stand'})
	event.shaped('exposure:camera_stand', [
		' S ',
	  	'S S',
	  	'S S'  
	  	],{
	  	S: 'minecraft:stick'
  	})

	event.remove({output: 'exposure_polaroid:instant_camera'})
	event.shaped('exposure_polaroid:instant_camera', [
		' P ',
	  	'IGI',
	  	'III'  
	  	],{
	  	I: 'minecraft:iron_ingot',
	  	P: 'thermal:iron_plate',
	  	G: '#forge:glass'			
  	})

	event.remove({output: 'mekanism:nutritional_liquifier'})
	event.shaped('mekanism:nutritional_liquifier', [
		'IGI',
	  	'FMF',
	  	'IUI'  
	  	],{
	  	I: 'minecraft:iron_ingot',
	  	G: 'botania:gourmaryllis',
	  	M: 'thermal:machine_frame',
	  	U: 'alexscaves:uranium_rod',
		F: 'create:fluid_tank'
  	})

	event.remove({output: 'mekanism:canteen'})
	event.shaped('mekanism:canteen', [
		' I ',
	  	'I I',
	  	'III'  
	  	],{
	  	I: 'thermal:iron_plate'
  	})

	event.remove({output: 'untagged_mobs:wire'})
	event.remove({id: 'create:crafting/appliances/chain_from_zinc'})
	event.shaped('minecraft:chain', [
		' N ',
	  	' N ',
	  	' N '  
	  	],{
	  	N: 'create:zinc_nugget'
  	})

	event.remove({output: 'thermal:device_rock_gen'})
	event.shaped('thermal:device_rock_gen', [
		'LEL',
	  	'FMF',
	  	'IDI'  
	  	],{
	  	I: 'minecraft:iron_ingot',
	  	E: 'forestry:electron_tube_iron',
	  	F: 'create:fluid_tank',
	  	M: 'thermal:machine_frame',
	  	D: 'thermal:drill_head',
		L: 'thermal:lead_ingot'
  	})

	event.shaped(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:ritual_circle"}'), [
		' E ',
	  	' B ',
	  	'   '  
	  	],{
	  	B: 'minecraft:book',
	  	E: 'kubejs:crimson_eye'
  	})

	event.remove({output: 'thermal:dynamo_lapidary'})
	event.shaped('thermal:dynamo_lapidary', [
		' C ',
	  	'PBP',
	  	'PFP'  
	  	],{
	  	P: 'alexscaves:polymer_plate',
	  	F: 'alexscaves:fissile_core',
	  	B: 'alexscaves:metal_barrel',
	  	C: 'thermal:rf_coil'
  	})

	event.remove({output: 'appflux:flux_accessor'})
	event.shaped('appflux:flux_accessor', [
		'IGI',
	  	'GRG',
	  	'IGI'  
	  	],{
	  	I: 'minecraft:iron_ingot',
	  	G: '#forge:glass',
	  	R: 'appflux:charged_redstone'
  	})

	event.remove({output: 'create:water_wheel'})
	event.shaped('create:water_wheel', [
		' W ',
	  	'WSW',
	  	' W '  
	  	],{
	  	W: 'immersiveengineering:waterwheel_segment',
	  	S: 'create:shaft'
  	})

	event.remove({output: 'create:large_water_wheel'})
	event.shaped('create:large_water_wheel', [
		'WWW',
	  	'WSW',
	  	'WWW'  
	  	],{
	  	W: 'immersiveengineering:waterwheel_segment',
	  	S: 'create:shaft'
  	})

	event.remove({output: 'minecraft:netherite_upgrade_smithing_template'})
	event.shaped('minecraft:netherite_upgrade_smithing_template', [
		'NNN',
	  	'NFN',
	  	'NNN'  
	  	],{
	  	N: 'clanginghowl:netherrack_shavings',
	  	F: 'clanginghowl:fireproof_steel_coating'
  	})

	event.remove({output: 'ae2:blank_pattern'})
	event.shaped('ae2:blank_pattern', [
		'GRG',
	  	'RCR',
	  	'III'  
	  	],{
	  	G: '#forge:glass',
	  	R: 'minecraft:redstone',
	  	C: '#ae2:all_certus_quartz',
	  	I: 'minecraft:iron_ingot'
  	})

	event.remove({id: 'create_alexscaves_compat:splashing/guano_block'})
	event.shaped('alexscaves:thornwood_branch', [
		' T ',
	  	'T  ',
	  	'   '  
	  	],{
	  	T: 'alexscaves:thornwood_log'
  	})

	event.remove({output: 'mekanism:configurator'})
	event.shaped('mekanism:configurator', [
		'  I',
	  	' B ',
	  	'R  '  
	  	],{
	  	I: 'immersiveengineering:stick_iron',
	  	B: 'clanginghowl:energy_battery',
	  	R: 'thermal:cured_rubber'
  	})

	event.remove({output: 'tconstruct:foundry_controller'})
	event.shaped('tconstruct:foundry_controller', [
		'SSS',
	  	'SLS',
	  	'SSS'  
	  	],{
	  	S: 'tconstruct:scorched_bricks',
	  	L: 'immersiveengineering:light_engineering'
  	})

	event.remove({id: 'minecraft:soul_campfire'})
	event.shaped('minecraft:soul_campfire', [
		' T ',
	  	'TST',
	  	'LLL'  
	  	],{
	  	S: 'minecraft:soul_sand',
	  	L: '#minecraft:logs_that_burn',
	  	T: '#forge:rods/wooden'
  	})

	event.remove({id: 'akashictome:tome'})
	event.shaped(Item.of('akashictome:tome', '{"akashictome:data":{actuallyadditions:{Count:1b,id:"actuallyadditions:booklet"},ae2:{Count:1b,id:"ae2:guide"},botania:{Count:1b,id:"botania:lexicon"},forestry:{Count:1b,id:"forestry:foresters_manual",tag:{"akashictome:displayName":{text:\'{"translate":"item.forestry.foresters_manual"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.forestry.foresters_manual"}]}\'}}},ftbquests:{Count:1b,id:"ftbquests:book"},immersiveengineering:{Count:1b,id:"immersiveengineering:manual"},malum:{Count:1b,id:"malum:encyclopedia_arcana"},patchouli:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"patchouli:ritual_circle"}},tconstruct:{Count:1b,id:"tconstruct:puny_smelting"},tconstruct_0:{Count:1b,id:"tconstruct:mighty_smelting",tag:{"akashictome:definedMod":"tconstruct_0"}},tconstruct_1:{Count:1b,id:"tconstruct:tinkers_gadgetry",tag:{"akashictome:definedMod":"tconstruct_1"}},tconstruct_2:{Count:1b,id:"tconstruct:materials_and_you",tag:{"akashictome:definedMod":"tconstruct_2"}},tconstruct_3:{Count:1b,id:"tconstruct:fantastic_foundry",tag:{"akashictome:definedMod":"tconstruct_3"}},tconstruct_4:{Count:1b,id:"tconstruct:encyclopedia",tag:{"akashictome:definedMod":"tconstruct_4"}}},"akashictome:is_morphing":1b}'), [
		' P ',
	  	' P ',
	  	' P '  
	  	],{
	  	P: 'minecraft:paper'
  	})

	event.shaped('3x enderio:dense_me_conduit', [
		'BBB',
	  	'CCC',
	  	'BBB'  
	  	],{
	  	B: 'enderio:conduit_binder',
	  	C: 'ae2:fluix_smart_dense_cable'
  	})

	event.remove({id: 'alexscaves:nuclear_bomb'})
	event.shaped('alexscaves:nuclear_bomb', [
		'SPS',
	  	'SFS',
	  	'SPS'  
	  	],{
	  	F: 'alexscaves:fissile_core',
	  	S: 'immersiveengineering:ingot_steel',
	  	P: 'alexscaves:polymer_plate'
  	})

	event.replaceInput({output:'immersiveengineering:railgun'}, 'immersiveengineering:ingot_steel', 'clanginghowl:fireproof_steel_coating')
	event.replaceInput({output:'immersiveengineering:railgun'}, 'immersiveengineering:component_electronic_adv', 'kubejs:circuitboard')

	event.replaceInput({output:'immersiveengineering:capacitor_hv'}, 'immersiveengineering:ingot_hop_graphite', 'immersiveengineering:plate_aluminum')

	event.replaceInput({output:'immersiveengineering:capacitor_mv'}, 'thermal:iron_plate', 'thermal:electrum_plate')
	event.replaceInput({output:'immersiveengineering:capacitor_mv'}, 'thermal:nickel_plate', 'thermal:electrum_plate')

	event.replaceInput({output:'minecraft:observer'}, 'minecraft:quartz', '#ae2:all_quartz')
	event.replaceInput({output:'minecraft:comparator'}, 'minecraft:quartz', '#ae2:all_quartz')

	event.replaceInput({input:'ae2:quartz_vibrant_glass'}, 'ae2:quartz_vibrant_glass', '#forge:glass')

	event.replaceInput({output:'botania:natura_pylon'}, 'minecraft:ender_eye', 'botania:rune_greed')
})