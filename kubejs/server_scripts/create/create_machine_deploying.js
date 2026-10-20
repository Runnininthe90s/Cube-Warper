// priority: 0

ServerEvents.recipes(event => {

	event.replaceInput({mod: 'create'}, 'minecraft:dried_kelp', 'thermal:cured_rubber')

	event.remove({output: 'create:andesite_casing'})
	event.custom({"type": "create:item_application",
		"ingredients":[
			{"tag": "minecraft:planks"},
			{"item": "create:andesite_alloy"}],
		"results": [
			{"item": "create:andesite_casing"}]
	})

	event.remove({output: 'create:copper_casing'})
	event.custom({"type": "create:item_application",
		"ingredients":[
			{"tag": "minecraft:planks"},
			{"item": "minecraft:copper_ingot"}],
		"results": [
			{"item": "create:copper_casing"}]
	})

let create = (block, item, result) => {
	event.remove({output: result})
	event.custom({"type": "create:item_application",
		"ingredients":[
			{"item": block},
			{"item": item}],
		"results": [
			{"item": result}]
	})
}

//Misc
	create("kubejs:half_frame_bottom",		"kubejs:half_frame_top",			"thermal:machine_frame")
	create("create:fluid_pipe",				"thermal:gold_plate",				"create:smart_fluid_pipe")
	create("create:andesite_casing",		"create:brass_ingot",				"create:brass_casing")
	create("create:chute", 					"thermal:gold_plate", 				"create:smart_chute")
	create("minecraft:barrel", 				"thermal:iron_plate", 				"create:item_vault")
	create("supplementaries:cage", 			"kubejs:shiny_ingot", 				"create:empty_blaze_burner")
	create("immersiveengineering:blastbrick","immersiveengineering:plate_steel","immersiveengineering:blastbrick_reinforced")

//Andesite Casings
	create("create:andesite_casing","minecraft:compass","create:speedometer")
	event.shapeless('create:speedometer', ['create:stressometer'])

	create("create:andesite_casing","minecraft:sticky_piston","create:sticky_mechanical_piston")
	event.shapeless('create:sticky_mechanical_piston', ['create:mechanical_piston', '#forge:slimeballs'])

	create("create:andesite_casing", 		"thermal:saw_blade",				"create:mechanical_saw")
	create("create:andesite_casing", 		"create:chute",						"create:portable_storage_interface")
	create("create:andesite_casing", 		"create:propeller",					"create:encased_fan")
	create("create:andesite_casing", 		"create:whisk",						"create:mechanical_mixer")
	create("create:andesite_casing", 		"create:andesite_alloy_block",		"create:mechanical_press")
	create("create:andesite_casing", 		"thermal:drill_head",				"create:mechanical_drill")
	create("create:andesite_casing", 		"minecraft:chain",					"create:encased_chain_drive")
	create("create:andesite_casing", 		"create:brass_hand",				"create:deployer")
	create("create:andesite_casing", 		"create:crushing_wheel",			"create:mechanical_roller")
	create("create:andesite_casing", 		"farmersdelight:rope",				"create:rope_pulley")
	create("create:andesite_casing", 		"minecraft:piston",					"create:mechanical_piston")
	create("create:andesite_casing", 		"minecraft:cobblestone_slab",		"create:depot")
	create("create:andesite_casing", 		"create:cogwheel",					"create:millstone")
	create("create:andesite_casing", 		"minecraft:stone_button", 			"create:contraption_controls")
	create("create:andesite_casing", 		"create:cardboard_block", 			"create:packager")
	create("create:andesite_casing", 		"create:turntable", 				"create:mechanical_bearing")
	//create("create:andesite_casing", 		"create:shaft", 					"createaddition:rolling_mill")
	create("create:andesite_casing", 		"create:item_vault", 				"create:package_frogport")

//Copper Casing
	create("create:copper_casing",			"minecraft:copper_ingot", 			"create:fluid_tank")
	create("create:copper_casing",			"thermal:cured_rubber", 			"create:spout")
	create("create:copper_casing",			"create:chute", 					"create:portable_fluid_interface")
	create("create:copper_casing",			"thermal:cured_rubber_block", 		"create:hose_pulley")
	create("create:copper_casing",			"minecraft:iron_bars", 				"create:item_drain")
	//create("create:copper_casing",			"create:sand_paper", 				"create_enchantment_industry:disenchanter")
	create("create:copper_casing",			"caverns_and_chasms:copper_grate", 	"thermal:device_water_gen")

//Brass Casing
	//create("create:brass_casing", 		"create:chute", 					"createaddition:portable_energy_interface")
	create("create:brass_casing", 			"minecraft:observer", 				"create:content_observer")
	create("create:brass_casing", 			"create:electron_tube", 			"create:mechanical_crafter")
	create("create:brass_casing", 			"create:gearshift", 				"create:sequenced_gearshift")
	create("create:brass_casing", 			"create:precision_mechanism", 		"create:rotation_speed_controller")
	create("create:brass_casing", 			"create:brass_hand", 				"create:mechanical_arm")
	create("create:brass_casing", 			"create:belt_connector", 			"create:elevator_pulley")
	create("create:brass_casing", 			"minecraft:lever", 					"create:stockpile_switch")
	create("create:brass_casing", 			"create:mechanical_bearing", 		"create:clockwork_bearing")

//Railway Casing
	create("create:railway_casing", 		"minecraft:observer", 				"create:track_observer")
	create("create:railway_casing", 		"create:electron_tube", 			"create:track_signal")
	create("create:railway_casing", 		"minecraft:compass", 				"create:track_station")
	create("create:railway_casing", 		"create:contraption_controls", 		"create:controls")

//Machine Frame
	create("thermal:machine_frame", 		"minecraft:furnace", 				"thermal:machine_furnace")
	create("thermal:machine_frame", 		"ae2:crystal_resonance_generator", 	"thermal:machine_crystallizer")
	create("thermal:machine_frame", 		"thermal:drill_head", 				"thermal:machine_pulverizer")
	create("thermal:machine_frame", 		"minecraft:iron_block", 			"thermal:machine_press")
	create("thermal:machine_frame", 		"immersiveengineering:coil_mv", 	"thermal:machine_smelter")
	create("thermal:machine_frame", 		"minecraft:crafting_table", 		"thermal:machine_crafter")
	create("thermal:machine_frame", 		"minecraft:brewing_stand", 			"thermal:machine_brewer")
	create("thermal:machine_frame", 		"immersiveengineering:turntable", 	"thermal:machine_centrifuge")
	create("thermal:machine_frame", 		"minecraft:hopper", 				"thermal:device_collector")
	create("thermal:machine_frame", 		"minecraft:lava_bucket", 			"thermal:device_nullifier")

//Engineering Frame
	create("kubejs:engineering_light_empty", 	"thermal:rf_coil", 									"immersiveengineering:rs_engineering")
	create("kubejs:engineering_light_empty", 	"immersiveengineering:component_electronic", 		"immersiveengineering:light_engineering")
	create("kubejs:engineering_heavy_empty", 	"immersiveengineering:component_electronic_adv", 	"immersiveengineering:heavy_engineering")

})