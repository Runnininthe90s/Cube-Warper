ServerEvents.recipes(event => {

	//event.remove({id: 'malum:spirit_crucible/glowstone_dust'})
	event.remove({id: 'malum:spirit_crucible/gunpowder'})
	event.remove({id: 'malum:spirit_crucible/redstone'})

	let spirit_crucible = (Catalyst, Output, Spirits) => {
		event.recipes.thermal.pulverizer([Output], Catalyst)
		event.recipes.farmersdelight.cutting(
    	    Catalyst,
    	    '#forge:tools/pickaxes',
    	    [
				Output
    	    ],
    	    'malum:cthonic_gold_break'
		)
	}

	spirit_crucible(
		'botania:rune_water', 
		'32x malum:aqueous_spirit', 
		'aqueous'
	)

	spirit_crucible(
		'botania:rune_earth', 
		'32x malum:earthen_spirit', 
		'earthen'
	)

	spirit_crucible(
		'botania:rune_fire', 
		'32x malum:infernal_spirit', 
		'infernal'
	)

	spirit_crucible(
		'botania:rune_air', 
		'32x malum:aerial_spirit', 
		'aerial'
	)

	spirit_crucible(
		'botania:rune_mana', 
		'32x malum:arcane_spirit', 
		'arcane'
	)

	spirit_crucible(
		'botania:rune_pride', 
		'32x malum:wicked_spirit', 
		'wicked'
	)

	spirit_crucible(
		'botania:rune_envy', 
		'32x malum:eldritch_spirit', 
		'eldritch'
	)

	spirit_crucible(
		'botania:rune_lust', 
		'32x malum:sacred_spirit', 
		'sacred'
	)

})