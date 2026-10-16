ServerEvents.recipes(event => {

	let fabricator = (input1, input2, output) => {
		event.remove({output: output})
		event.custom({
  			"type": "forestry:fabricator",
  			"molten": {
  			  "Amount": 500,
  			  "FluidName": "forestry:glass"
  			},
  			"plan": [],
  			"recipe": {
  			  "type": "minecraft:crafting_shaped",
  			  "category": "misc",
  			  "key": {
  			    "R": {
  			      "item": "alexscaves:radon_bottle"
  			    },
  			    "1": {
  			      "item": input1
  			    },
  			    "2": {
  			      "item": input2
  			    }
  			  },
  			  "pattern": [
  			    "   ",
  			    " 2 ",
  			    "1R1"
  			  ],
  			  "result": {
  			    "count": 1,
  			    "item": output
  			  },
  			  "show_notification": true
  			}
		})
	}

	fabricator(
		"minecraft:iron_ingot",
		"mekanism:ingot_refined_glowstone",
		"immersiveengineering:electron_tube"
	)

	event.custom({
		"type": "forestry:fabricator",
		"molten": {
		  "Amount": 500,
		  "FluidName": "forestry:glass"
		},
		"plan": [],
		"recipe": {
		  "type": "minecraft:crafting_shaped",
		  "category": "misc",
		  "key": {
		    "#": {
		      "item": "kubejs:energized_redstone"
		    },
		    "X": {
		      "item": "thermal:silver_ingot"
		    }
		  },
		  "pattern": [
		    "   ",
		    " # ",
		    "XXX"
		  ],
		  "result": {
		    "count": 2,
		    "item": "kubejs:vector_operator_empty"
		  },
		  "show_notification": true
		}
	})

})