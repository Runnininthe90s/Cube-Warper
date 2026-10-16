ServerEvents.recipes(event => {

    event.remove({output: 'miners_delight:weird_caviar'})
	event.recipes.farmersdelight.cooking(
	    [
			"undergarden:droopvine_item",
			"undergarden:droopvine_item"
		],
	    "miners_delight:weird_caviar",
	    1,
	    200,
	    "minecraft:bowl",
	);

	event.recipes.create.emptying([Fluid.of('supplementaries:lumisene', 1000),
		'minecraft:bucket'], 
		'supplementaries:lumisene_bucket'
	)

	event.recipes.create.emptying([Fluid.of('supplementaries:lumisene', 250),
		'minecraft:glass_bottle'], 
		'supplementaries:lumisene_bottle'
	)

    event.remove({id: 'supplementaries:lumisene_bottle'})
    event.remove({id: 'supplementaries:lumisene_bucket'})
    event.remove({id: 'alexscaves:gummy_ring_red'})
    event.remove({id: 'alexscaves:gummy_ring_pink'})
    event.remove({id: 'alexscaves:gummy_ring_yellow'})
    event.remove({id: 'alexscaves:gummy_ring_green'})
    event.remove({id: 'alexscaves:gummy_ring_blue'})
	event.recipes.farmersdelight.cooking(
	    [
			"alexscaves:gummy_ring_red",
			"alexscaves:gummy_ring_yellow",
			"alexscaves:gummy_ring_green",
			"alexscaves:gummy_ring_blue"
		],
	    "supplementaries:lumisene_bottle",
	    1,
	    200,
	    "minecraft:glass_bottle",
	);

})