ServerEvents.recipes(event => {

	event.remove({id: 'malum:spirit_infusion/copper_impetus'})
	event.remove({id: 'malum:impetus_creation_lead'})
	event.remove({id: 'malum:impetus_creation_cobalt'})

	let impetus = (Output, Material) => {
		event.custom({
			"type": "malum:spirit_infusion",
			"extra_items": [
				{
				  "count": 3,
				  "item": Material
				}
			],
			"input": {
			  "count": 1,
			  "item": "malum:alchemical_impetus"
			},
			"output": {
			  "item": Output
			},
			"spirits": [
				{
				  "type": "earthen",
				  "count": 8
				},
				{
				  "type": "infernal",
				  "count": 8
				}
			]
		})
	}

	impetus(
		"malum:copper_impetus", 
		"minecraft:copper_ingot"
	)

	impetus(
		"malum:lead_impetus", 
		"thermal:lead_ingot"
	)

	impetus(
		"malum:cobalt_impetus", 
		"tconstruct:cobalt_ingot"
	)


	event.custom({
		"type": "malum:spirit_infusion",
		"extra_items": [
			{
			  "count": 3,
			  "item": "minecraft:glowstone_dust"
			}
		],
		"input": {
		  "count": 1,
		  "item": "minecraft:glowstone_dust"
		},
		"output": {
		  "item": "malum:blazing_quartz"
		},
		"spirits": [
			{
			  "type": "earthen",
			  "count": 8
			},
			{
			  "type": "infernal",
			  "count": 8
			}
		]
	})

})