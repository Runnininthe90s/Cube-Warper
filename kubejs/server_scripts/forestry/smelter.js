ServerEvents.recipes(event => {

	event.remove({type: "forestry:smelter"})
    let smelter = (output, amount3, input1, amount1, input2, amount2) => {
		event.custom({
			"type": "forestry:smelter",
			"inputs": [
			  {
			    "count": amount1,
			    "ingredient": {
			      "item": input1
			    }
			  },
			  {
			    "count": amount2,
			    "ingredient": {
			      "item": input2
			    }
			  }
			],
			"output": {
			  "count": amount3,
			  "ingredient": {
			    "item": output
			  }
			},
			"processingTime": 40,
			"temperature": 0
		})
	}

	event.custom({
		"type": "forestry:smelter",
		"inputs": [
		  {
		    "count": 1,
		    "ingredient": {
		      "tag": "tconstruct:seared_blocks"
		    }
		  },
		  {
		    "count": 1,
		    "ingredient": {
		      "item": "minecraft:iron_ingot"
		    }
		  }
		],
		"output": {
		  "count": 4,
		  "ingredient": {
		    "item": "create:andesite_alloy"
		  }
		},
		"processingTime": 40,
		"temperature": 0
	})

	smelter("thermal:electrum_ingot", 2, 
		"minecraft:gold_ingot", 1, 
		"thermal:silver_ingot", 1
	)

})