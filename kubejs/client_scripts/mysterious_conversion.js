// Script by @aceplante recipe entries by me
const $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')

ClientEvents.highPriorityAssets(e => {
    const $MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')

// Gronglet
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('malum:runic_sapball', 'minecraft:gunpowder'))
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('malum:cursed_sapball', 'kubejs:grains_of_infinity'))

// Redstone Shrine
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('minecraft:redstone', 'kubejs:energized_redstone'))
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('kubejs:vector_operator_infinite_empty', 'kubejs:vector_operator_step2'))

// Time Shrine
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('minecraft:emerald_block', 'tiab:time_in_a_bottle'))
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('kubejs:vector_operator_empty', 'kubejs:vector_operator_basic'))
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('minecraft:iron_block', 'kubejs:block_shiny_ingot'))
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('kubejs:vector_operator_step2', 'kubejs:vector_operator_step3'))

// Lightning Shrine
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('minecraft:glass_bottle', 'kubejs:bottled_lightning'))
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('thermal:copper_dust', 'thermal:lightning_charge'))
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('kubejs:vector_operator_step6', 'kubejs:vector_operator_step7'))

// Extraterrestrial Shrine
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('caverns_and_chasms:large_arrow', 'clanginghowl:extraterrestrial_energy_crystal'))

// Ritual Shrine
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('kubejs:crimson_eye', 'alexscaves:pure_darkness'))
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('kubejs:recaptured_consciousness_empty', 'kubejs:recaptured_consciousness'))
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('enderio:ensouled_chassis', 'untagged_mobs:skybox_missing'))
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('kubejs:vector_operator_empty', 'kubejs:vector_operator_eye'))
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('kubejs:vector_operator_step9', 'kubejs:vector_operator_step10'))
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('kubejs:vector_operator_step10', 'kubejs:vector_operator_step11'))
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('kubejs:vector_operator_step11', 'kubejs:vector_operator_step12'))

// Final Vector
    $MysteriousItemConversionCategory.RECIPES.add(new $ConversionRecipe.create('kubejs:vector_operator_step12', 'kubejs:vector_operator_infinite'))
})