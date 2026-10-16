ServerEvents.recipes(event => {

    event.remove({type: 'forestry:carpenter'})

	let carpenter = (input1, input2, input3, input4, Fluid, pattern, output) => {
		event.custom({
  			"type": "forestry:carpenter",
  			"box": [],
  			"liquid": {
  			  "Amount": 500,
  			  "FluidName": Fluid
  			},
  			"recipe": {
  			  "type": "minecraft:crafting_shaped",
  			  "category": "misc",
  			  "key": {
  			    "1": {
  			      "item": input1
  			    },
  			    "2": {
  			      "item": input2
  			    },
  			    "3": {
  			      "item": input3
  			    },
  			    "4": {
  			      "item": input4
  			    }
  			  },
  			  "pattern": pattern,
  			  "result": {
  			    "item": output
  			  },
  			  "show_notification": true
  			},
  			"result": {
  			  "Count": 1,
  			  "id": output,
  			  "tag": {
  			    "T": 0
  			  }
  			},
  			"time": 20
		})
	}

    event.remove({id: 'immersiveengineering:blueprint/component_electronic'})
	carpenter(
		"immersiveengineering:slab_treated_wood_horizontal",
		"kubejs:chocolate_chip",
		"minecraft:quartz",
		"clanginghowl:redstone_wire",
		"kubejs:solder_fluid",
			[
  				" 3 ",
  				"424",
  				" 1 "
  			],
		"immersiveengineering:component_electronic"
	)

    event.remove({id: 'immersiveengineering:blueprint/component_electronic_adv'})
	carpenter(
		"immersiveengineering:plate_duroplast",
		"ae2:logic_processor",
		"immersiveengineering:electron_tube",
		"immersiveengineering:wirecoil_electrum",
		"kubejs:solder_fluid",
			[
  				"3 3",
  				"424",
  				" 1 "
  			],
		"immersiveengineering:component_electronic_adv"
	)

	carpenter(
		"kubejs:vector_operator_empty",
		"clanginghowl:fireproof_steel_coating",
		"kubejs:circuitboard",
		"kubejs:bottled_lightning",
		"kubejs:solder_fluid",
			[
  				" 4 ",
  				"212",
  				"232"
  			],
		"kubejs:vector_operator_lightning"
	)

	carpenter(
		"kubejs:circuitboard",
		"kubejs:circuitboard_empty",
		"incision:congealed_acid",
		"enderio:basic_capacitor",
		"kubejs:solder_fluid",
			[
  				"   ",
  				"434",
  				"121"
  			],
		"kubejs:peeking_circuit"
	)

	carpenter(
		"enderio:double_layer_capacitor",
		"kubejs:circuitboard_empty",
		"kubejs:peeking_circuit",
		"clanginghowl:techno_optics",
		"kubejs:solder_fluid",
			[
  				"   ",
  				"141",
  				"323"
  			],
		"kubejs:seeking_circuit"
	)

})