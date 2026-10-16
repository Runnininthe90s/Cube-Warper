ServerEvents.recipes(event => {

    let sag_mill = (Input, Result, Count, Chance) => {
      	event.remove({output: Result})
    	event.custom({
			"type": "enderio:sag_milling",
			"energy": 2400,
			"input": {
			  "item": Input
			},
			"outputs": [
				{
					"chance": Chance,
					"item": {
				    	"count": Count,
				    	"item": Result
				  	},
				  	"optional": false
				}
			]
		})
    }

    sag_mill(
    	"minecraft:netherrack",
    	"clanginghowl:netherrack_shavings",
    	1,
    	1.0
    )

    event.remove({id: "malum:spirit_infusion/living_flesh"})
    sag_mill(
    	"kubejs:crimson_eye",
    	"malum:living_flesh",
    	2,
    	1.0
    )

})