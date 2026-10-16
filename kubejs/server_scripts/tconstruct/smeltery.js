ServerEvents.recipes(event => {

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

	create(
		"tconstruct:seared_bricks",
		"minecraft:copper_block",
		"tconstruct:smeltery_controller"
	)

	create(
		"tconstruct:seared_bricks",
		"create:fluid_tank",
		"tconstruct:seared_fuel_tank"
	)

	create(
		"tconstruct:seared_bricks",
		"create:fluid_pipe",
		"tconstruct:seared_drain"
	)

})