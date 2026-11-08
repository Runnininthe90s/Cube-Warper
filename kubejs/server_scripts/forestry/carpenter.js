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
  			  "id": output
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

const SOLDERING_OUTPUTS = {
	'immersiveengineering:component_electronic': true,
	'immersiveengineering:component_electronic_adv': true,
	'kubejs:vector_operator_lightning': true,
	'kubejs:peeking_circuit': true,
	'kubejs:seeking_circuit': true
}

function cleanPatternEntry(entry) {
	if (!entry || !entry.contains('id') || !entry.contains('tag')) return false
	if (!SOLDERING_OUTPUTS[entry.getString('id')]) return false
	let tag = entry.getCompound('tag')
	if (!tag || !tag.contains('T')) return false
	tag.remove('T')
	if (tag.isEmpty()) {
		entry.remove('tag')
	}
	return true
}

PlayerEvents.tick(event => {
	if (event.player.age % 20 !== 0) return
	let inv = event.player.inventory
	let changed = false
	for (let i = 0; i < inv.slots; i++) {
		let stack = inv.getStackInSlot(i)
		if (stack.empty || !stack.nbt) continue
		if (SOLDERING_OUTPUTS[stack.id] && stack.nbt.contains('T')) {
			stack.nbt.remove('T')
			if (stack.nbt.isEmpty()) {
				stack.nbt = null
			}
			changed = true
		} else if (stack.id === 'ae2:processing_pattern' || stack.id === 'ae2:crafting_pattern') {
			if (stack.nbt.contains('in')) {
				let inList = stack.nbt.getList('in', 10)
				for (let j = 0; j < inList.size(); j++) {
					if (cleanPatternEntry(inList.getCompound(j))) changed = true
				}
			}
			if (stack.nbt.contains('out')) {
				if (stack.id === 'ae2:processing_pattern') {
					let outList = stack.nbt.getList('out', 10)
					for (let j = 0; j < outList.size(); j++) {
						if (cleanPatternEntry(outList.getCompound(j))) changed = true
					}
				} else {
					if (cleanPatternEntry(stack.nbt.getCompound('out'))) changed = true
				}
			}
		}
	}
	if (changed) {
		inv.setChanged()
		event.player.sendInventoryUpdate()
	}
})