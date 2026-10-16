ServerEvents.recipes(event => {

	let chemical_crystallizer = (Input, Amount, Output) => {
        event.custom({"type":"mekanism:crystallizing",
            "chemicalType":"gas",
            "input":{
                "amount":Amount,
                "gas":Input
            },
            "output":{
                "item":Output
            }
        })
    }

	event.remove({output: 'mekanism:alloy_atomic'})
	event.remove({output: 'mekanism:pellet_antimatter'})
    chemical_crystallizer(
        "mekanism:antimatter", 500, 
        "mekanism:alloy_atomic"
    )
	
})