ServerEvents.recipes(event => {

	let dimensional_mining = (Input, Output, Chance) => {
    	event.remove({output: Input})
		event.recipes.thermal.pulverizer([
			Item.of(Output).withChance(Chance)
		], 
			Input
		)

	    event.recipes.createCrushing([
			Item.of(Output).withChance(Chance)], 
			[Input]
		)
	}

	let dimensional_mining_wheels_only = (Input, Output, Chance) => {
    	event.remove({output: Input})
	    event.recipes.createCrushing([
			Item.of(Output).withChance(Chance)], 
			[Input]
		)
	}

	dimensional_mining("create:asurine", 
		"create:raw_zinc", 1.0
	)
	
	dimensional_mining("regions_unexplored:chalk", 
		"immersiveengineering:raw_aluminum", 0.2
	)

	dimensional_mining("undergarden:depthrock", 
		"minecraft:diamond", 0.011
	)

	event.remove({id: 'thermal:machines/pulverizer/pulverizer_red_sandstone'})
	dimensional_mining("minecraft:red_sandstone", 
		"thermal:copper_dust", 0.1
	)

	event.remove({output: 'ae2:silicon'})
	dimensional_mining("alexscaves:galena", 
		"ae2:silicon", 0.2
	)

	dimensional_mining("clanginghowl:extraterrestrial_stone", 
		"thermal:raw_tin", 0.1
	)

	dimensional_mining("alexscaves:radrock", 
		"4x alexscaves:uranium_shard", 1.0
	)

	event.shaped('alexscaves:uranium', [
		'UUU',
	  	'UUU',
	  	'UUU'  
	  	],{
	  	U: 'alexscaves:uranium_shard'
  	})

	dimensional_mining("undergarden:shiverstone", 
		"mekanism:nugget_osmium", 0.1
	)

    event.recipes.createCrushing(['minecraft:netherrack', Item.of('alexscaves:sulfur_dust').withChance(0.1), Item.of('tconstruct:cobalt_nugget').withChance(0.01)], ['biomesoplenty:brimstone'])

	dimensional_mining("alexscaves:limestone", 
		"minecraft:bone_meal", 0.1
	)

	dimensional_mining("darkerdepths:duskrock", 
		"minecraft:netherite_scrap", 0.01
	)

	dimensional_mining("minecraft:end_stone", 
		"ae2:ender_dust", 0.1
	)

 	event.recipes.create.splashing(Item.of('untagged_mobs:alpha_clay_ball').withChance(0.25), 'untagged_mobs:alpha_sand')
	dimensional_mining("untagged_mobs:alpha_cobblestone", 
		"untagged_mobs:alpha_sand", 1.0
	)

	event.remove({output: 'regions_unexplored:raw_redstone_block'})


    event.remove({output: "darkerdepths:darkslate"})
	event.recipes.thermal.pulverizer([
		Item.of("thermal:raw_nickel").withChance(0.1),
		Item.of("malum:raw_soulstone").withChance(0.01)
	], 
		"darkerdepths:darkslate"
	)

	event.recipes.createCrushing([
		Item.of("thermal:raw_nickel").withChance(0.1),
		Item.of("malum:raw_soulstone").withChance(0.011)
	], 
		["darkerdepths:darkslate"]
	)

	dimensional_mining("create:scoria", 
		"minecraft:soul_sand", 1.0
	)

})