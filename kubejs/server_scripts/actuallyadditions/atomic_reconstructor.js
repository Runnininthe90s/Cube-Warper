ServerEvents.recipes(event => {

	let atomic_reconstructor = (Input, Output, Energy) => {
		event.custom({
			"type": "actuallyadditions:laser",
			"energy": Energy,
			"ingredient": {
			  "item": Input
			},
			"result": {
			  "item": Output
			}
		})
	}
	
	atomic_reconstructor(
		"kubejs:bottled_lightning",
		"caverns_and_chasms:turquoise",
		2000
	)

	atomic_reconstructor(
		"supplementaries:lumisene_bottle",
		"caverns_and_chasms:zirconia",
		2000
	)

	atomic_reconstructor(
		"minecraft:quartz",
		"actuallyadditions:black_quartz",
		2000
	)

	atomic_reconstructor(
		"ae2:flawed_budding_quartz",
		"ae2:flawless_budding_quartz",
		2000
	)

})