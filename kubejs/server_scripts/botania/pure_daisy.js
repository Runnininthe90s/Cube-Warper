ServerEvents.recipes(event => {

	let daisy = (Input, Output) => {
		event.custom({
  			"type": "botania:pure_daisy",
  			"input": {
  			  "type": "block",
  			  "block": Input
  			},
  			"output": {
  			  "name": Output,
  			}
		})
	}
	
    event.remove({id: 'botania:pure_daisy/livingwood'})
	daisy(
		"malum:runewood_log",
		"botania:livingwood_log"
	)

    event.remove({id: 'botania:pure_daisy/livingrock'})
	daisy(
		"alexscaves:limestone",
		"botania:livingrock"
	)

    event.remove({id: 'botania:pure_daisy/livingrock'})
	daisy(
		"minecraft:deepslate",
		"malum:brilliant_deepslate"
	)

})