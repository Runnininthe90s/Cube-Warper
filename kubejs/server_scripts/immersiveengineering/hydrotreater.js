ServerEvents.recipes(event => {

	event.remove({id: 'immersivepetroleum:hydrotreater/naphtha_cracking'})

	event.custom({
		"type": "immersivepetroleum:hydrotreater",
		"energy": 50000,
		"input": {
		  "amount": 1000,
		  "tag": "kubejs:light_oil"
		},
		"result": {
		  "amount": 500,
		  "fluid": "minecraft:water"
		},
		"secondary_input": {
		  "amount": 1000,
		  "tag": "minecraft:water"
		},
		"secondary_result": {
		  "chance": "1.0",
		  "count": 1,
		  "item": "kubejs:plastic"
		},
		"time": 600
	})

	event.custom({
		"type": "immersivepetroleum:hydrotreater",
		"energy": 50000,
		"input": {
		  "amount": 1000,
		  "tag": "kubejs:heavy_oil"
		},
		"result": {
		  "amount": 500,
		  "fluid": "minecraft:water"
		},
		"secondary_input": {
		  "amount": 1000,
		  "tag": "minecraft:water"
		},
		"secondary_result": {
		  "chance": "1.0",
		  "count": 1,
		  "item": "kubejs:circuitboard_empty"
		},
		"time": 600
	})

})