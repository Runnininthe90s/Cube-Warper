ServerEvents.recipes(event => {

	let machine_insolator = (Input, Output) => {
        event.custom({
            "type": "thermal:insolator",
            "ingredient": {
                "item": Input
            },
            "result": [
                {
                    "item": Output,
                    "count": 2
                }
            ],
            "energy": 5000
        })
    }

    Ingredient.of("#minecraft:flowers").itemIds.forEach(flower => {
        machine_insolator(flower, flower)
    })
	
})

BlockEvents.placed(event => {
    if (event.block.item.id && Item.of(event.block.item.id).hasTag('botania:petals')) {
        event.cancel()
    }
})