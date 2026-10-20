ServerEvents.recipes(event => {

	let basic_runes = (rune, petal1, petal2, mana) => {

		event.remove({output: rune})

		event.recipes.botania.runic_altar(
		{
			item:rune,
			count:2
		},
			[
				petal1, 
				petal2
			],
			mana
		)
	}

	let advanced_runes = (rune, petal1, petal2, rune1, rune2,mana) => {

		event.remove({output: rune})

		event.recipes.botania.runic_altar(
		{
			item:rune,
			count:2
		},
			[
				petal1, 
				petal2,
				rune1,
				rune2
			],
			mana
		)
	}

	basic_runes("botania:rune_water",
		"botania:blue_petal",
		"botania:cyan_petal",
		10000
	)

	basic_runes("botania:rune_earth",
		"botania:green_petal",
		"botania:lime_petal",
		10000
	)

	basic_runes("botania:rune_fire",
		"botania:red_petal",
		"botania:orange_petal",
		10000
	)

	basic_runes("botania:rune_air",
		"botania:white_petal",
		"botania:light_blue_petal",
		10000
	)

	basic_runes("botania:rune_mana",
		"botania:purple_petal",
		"botania:magenta_petal",
		10000
	)

	advanced_runes("botania:rune_spring",
		"botania:magenta_petal",
		"botania:pink_petal",
		"botania:rune_water",
		"botania:rune_fire",
		20000
	)

	advanced_runes("botania:rune_summer",
		"botania:orange_petal",
		"botania:yellow_petal",
		"botania:rune_fire",
		"botania:rune_air",
		20000
	)

	advanced_runes("botania:rune_autumn",
		"botania:brown_petal",
		"botania:yellow_petal",
		"botania:rune_earth",
		"botania:rune_air",
		20000
	)

	advanced_runes("botania:rune_winter",
		"botania:light_gray_petal",
		"botania:white_petal",
		"botania:rune_water",
		"botania:rune_earth",
		20000
	)

})