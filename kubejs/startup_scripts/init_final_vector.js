StartupEvents.registry('block', event => {

let final_operator = (step) => {
	event.create(`vector_operator_step${step}`)
		.displayName(`§8§lBroken Vector Operator`)
		.fullBlock(false)
		.material("lantern")
		.soundType("lantern")
		.lightLevel(1.0)
		.box(2, 0, 2, 14, 14, 14)
		.renderType('translucent')
		.waterlogged()
		.hardness(0.0)
		.model('kubejs:block/vector_operator_infinite_empty')
	}

	final_operator(2)
	final_operator(3)
	final_operator(4)
	final_operator(5)
	final_operator(6)
	final_operator(7)
	final_operator(8)
	final_operator(9)
	final_operator(10)
	final_operator(11)
	final_operator(12)

})