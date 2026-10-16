LootJS.modifiers((event) => {


    event.addBlockLootModifier("minecraft:grass")
      .removeLoot(ItemFilter.custom(stack =>
        stack.hasTag('forge:seeds') && stack.id !== 'minecraft:wheat_seeds'
    ))

    event.addBlockLootModifier("minecraft:tall_grass")
        .removeLoot(Ingredient.all)

    event.addBlockLootModifier("minecraft:coal_ore")
        .removeLoot(Ingredient.all)
		.addLoot("minecraft:gravel");

    event.addBlockLootModifier("regions_unexplored:peat_grass_block")
        .removeLoot(Ingredient.all)
		.addLoot("forestry:peat");

    event.addBlockLootModifier("regions_unexplored:peat_dirt")
        .removeLoot(Ingredient.all)
		.addLoot("forestry:peat");

    event.addBlockLootModifier("regions_unexplored:peat_mud")
        .removeLoot(Ingredient.all)
		.addLoot("forestry:peat");

    event.addBlockLootModifier("regions_unexplored:peat_dirt_path")
        .removeLoot(Ingredient.all)
		.addLoot("forestry:peat");

    event.addBlockLootModifier("untagged_mobs:missing_block")
        .removeLoot(Ingredient.all)
		.addLoot("untagged_mobs:item_missing");

    event.addBlockLootModifier("tconstruct:seared_stone")
        .removeLoot(Ingredient.all)
		.addLoot("tconstruct:seared_cobble");

    event.addBlockLootModifier("incision:carrion_eye")
        .removeLoot(Ingredient.all)
		.addLoot("incision:congealed_acid");

    event.addBlockLootModifier("undergarden:shiverstone_froststeel_ore")
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [3, 10],
            ["mekanism:nugget_osmium"]
        )
        .dropExperience(3);

    event.addBlockLootModifier("minecraft:gilded_blackstone")
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [9, 12],
            ["minecraft:gold_nugget"]
        )
        .dropExperience(3);

    event.addBlockLootModifier("kubejs:coin_pile_gold")
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [3, 10],
            ["thermal:gold_coin"]
        )

    event.addBlockLootModifier("malum:exposed_runewood_log")
        .removeLoot(Ingredient.all)
		.addLoot("malum:runewood_log");

    event.addBlockLootModifier("malum:revealed_runewood_log")
        .removeLoot(Ingredient.all)
		.addLoot("malum:stripped_runewood_log");

    event.addBlockLootModifier("malum:exposed_soulwood_log")
        .removeLoot(Ingredient.all)
		.addLoot("malum:soulwood_log");

    event.addBlockLootModifier("malum:revealed_soulwood_log")
        .removeLoot(Ingredient.all)
		.addLoot("malum:stripped_soulwood_log");

    event.addBlockLootModifier("ae2:mysterious_cube")
		.addLoot("appflux:energy_processor_press");

    event.addBlockLootModifier("alexscaves:small_peppermint")
        .removeLoot(Ingredient.all)
		.addLoot("alexscaves:small_peppermint");

    event.addBlockLootModifier("alexscaves:large_peppermint")
        .removeLoot(Ingredient.all)
		.addLoot("alexscaves:large_peppermint");

});
