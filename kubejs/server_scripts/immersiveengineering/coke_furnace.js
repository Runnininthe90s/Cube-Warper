ServerEvents.recipes(event => {


		event.custom({"type":"immersiveengineering:coke_oven",
			"creosote":500,
			"input":{"item":"minecraft:charcoal"},
			"result":{"tag":"forge:coal_coke"},
			"time":180
		})

		event.remove({id: 'thermal:storage/coal_coke_from_block'})
		event.custom({"type":"immersiveengineering:coke_oven",
			"creosote":4500,
			"input":{"item":"thermal:charcoal_block"},
			"result":{"item":"thermal:coal_coke_block"},
			"time":1620
		})

		event.remove({id: 'immersiveengineering:coke_oven/coke'})
		event.custom({"type":"immersiveengineering:coke_oven",
			"creosote":500,
			"input":{"item":"minecraft:coal"},
			"result":{"tag":"forge:coal_coke"},
			"time":180
		})

		event.custom({"type":"immersiveengineering:coke_oven",
			"creosote":500,
			"input":{"item":"malum:arcane_charcoal"},
			"result":{"tag":"forge:coal_coke"},
			"time":180
		})

		event.custom({"type":"immersiveengineering:coke_oven",
			"creosote":4500,
			"input":{"item":"malum:block_of_arcane_charcoal"},
			"result":{"item":"thermal:coal_coke_block"},
			"time":1620
		})

})