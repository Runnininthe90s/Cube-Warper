ServerEvents.recipes(event => {

	let molding = (Fluid, Amount, Mold, Output, Count) => {
			event.custom({
				"type": "createdieselgenerators:casting",
				"ingredients": [
					{
					  "fluid": Fluid,
					  "amount": Amount
					}
				],
				"mold": Mold,
				"results": [
					{
					  "item": Output,
					  "count": Count
					}
				]
			})
	}

	event.remove({output: 'immersiveengineering:ingot_steel'})
	event.shapeless('9x immersiveengineering:ingot_steel', ['immersiveengineering:storage_steel'])
	event.shapeless('immersiveengineering:ingot_steel', ['9x immersiveengineering:nugget_steel'])
	molding(
		"tconstruct:molten_steel", 90,
		"createdieselgenerators:bar",
		"immersiveengineering:ingot_steel", 1
	)

})