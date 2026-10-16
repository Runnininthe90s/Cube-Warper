ServerEvents.recipes(event => {

	event.recipes.create.emptying(
	    [Fluid.of('untagged_mobs:fluid_blood', 1000), 'minecraft:bucket'],
	    'untagged_mobs:fluid_blood_bucket'
	)

})