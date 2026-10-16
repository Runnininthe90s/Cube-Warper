LootJS.modifiers((event) => {

    event.removeGlobalModifier("@enderio");
    event.removeGlobalModifier("@forestry");
    event.removeGlobalModifier("@caverns_and_chasms");
    event.removeGlobalModifier("@tconstruct");

    event.addLootTableModifier("minecraft:chests/buried_treasure")
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [10, 12],
            [Item.of("thermal:gold_coin").withChance(50)],
        );

    event.addLootTableModifier("minecraft:chests/shipwreck_treasure")
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [10, 12],
            [Item.of("thermal:gold_coin").withChance(50)],
        );

    event.addLootTableModifier("minecraft:chests/shipwreck_supply")
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [10, 12],
            [Item.of("thermal:gold_coin").withChance(50)],
        );

    event.addLootTableModifier("minecraft:chests/shipwreck_map")
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [10, 12],
            [Item.of("thermal:gold_coin").withChance(50)],
        );

});