ServerEvents.recipes(event => {

	let overwrite_plate = (metal) => {
		event.remove({id: `tconstruct:smeltery/casting/metal/${metal}/plate_gold_cast`})
		event.remove({id: `tconstruct:smeltery/casting/metal/${metal}/plate_sand_cast`})
		event.custom({
			"type": "tconstruct:casting_table",
			"cast": {
			  "tag": "tconstruct:casts/multi_use/plate"
			},
			"cooling_time": 50,
			"fluid": {
			  "amount": 90,
			  "tag": `forge:molten_${metal}`
			},
			"result": {
			  "item": `thermal:${metal}_plate`
			}
		})

		event.custom({
			"type": "tconstruct:casting_table",
			"cast": {
			  "tag": "tconstruct:casts/single_use/plate"
			},
			"cast_consumed": true,
			"cooling_time": 50,
			"fluid": {
			  "amount": 90,
			  "tag": `forge:molten_${metal}`
			},
			"result": {
			  "item": `thermal:${metal}_plate`
			}
		})
	}

	overwrite_plate("iron")
	overwrite_plate("copper")
	overwrite_plate("lead")
	overwrite_plate("nickel")
	overwrite_plate("tin")
	overwrite_plate("silver")
	overwrite_plate("gold")
	overwrite_plate("netherite")
	overwrite_plate("enderium")
	overwrite_plate("electrum")
	overwrite_plate("invar")
	overwrite_plate("constatan")
	overwrite_plate("bronze")
	overwrite_plate("signalum")
	overwrite_plate("lumium")

	
	let block_casting = (Input, Amount, Output, Cooling) => {
		event.custom({
		  "type": "tconstruct:casting_basin",
		  "cooling_time": Cooling,
		  "fluid": {
		    "amount": Amount,
		    "tag": Input
		  },
		  "result": Output
		})
	}
	
	block_casting(
		"tconstruct:seared_stone", 1000,
		"tconstruct:seared_cobble", 10
	)

	event.custom({
		"type": "tconstruct:casting_table",
		"cast": {
		  "tag": "tconstruct:casts/multi_use/ingot"
		},
		"cooling_time": 50,
		"fluid": {
		  "amount": 90,
		  "tag": "forge:molten_steel"
		},
		"result": {
		  "item": "immersiveengineering:ingot_steel"
		}
	})

	event.custom({
		"type": "tconstruct:casting_table",
		"cast": {
		  "tag": "tconstruct:casts/single_use/ingot"
		},
		"cast_consumed": true,
		"cooling_time": 50,
		"fluid": {
		  "amount": 90,
		  "tag": "forge:molten_steel"
		},
		"result": {
		  "item": "immersiveengineering:ingot_steel"
		}
	})

})