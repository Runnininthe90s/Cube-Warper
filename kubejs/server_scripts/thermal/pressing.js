ServerEvents.recipes(event => {


	let press = (die, input, output) => {
        event.recipes.thermal.press(output, [
            input, 
            die
        ])
    }

    event.remove({id: 'malum:spirit_infusion/alchemical_impetus'})
    event.remove({output: 'malum:alchemical_impetus'})
    event.recipes.thermal.press('malum:alchemical_impetus', [
        'malum:block_of_alchemical_calx'
    ])

	event.remove({output: 'enderio:infinity_rod'})
    event.recipes.thermal.press('enderio:infinity_rod', [
        '8x kubejs:grains_of_infinity',
        'immersiveengineering:mold_rod'
    ])

	event.remove({output: 'untagged_mobs:bugging_stick'})
    event.recipes.thermal.press('untagged_mobs:bugging_stick', [
        '8x untagged_mobs:executable_redactor',
        'immersiveengineering:mold_rod'
    ])

    event.recipes.thermal.press('4x thermal:rubber', [
        '#minecraft:logs'
    ])

	event.remove({output: 'ae2:fluix_pearl'})
    event.recipes.thermal.press('ae2:fluix_pearl', [
        'ae2:fluix_dust',
        'thermal:chiller_ball_cast'
    ])

	event.remove({output: 'immersiveengineering:graphite_electrode'})
    event.recipes.thermal.press('immersiveengineering:graphite_electrode', [
        '4x mekanism:enriched_carbon',
        'immersiveengineering:mold_rod'
    ])

	event.remove({output: 'caverns_and_chasms:diamond_lamp'})
    event.recipes.thermal.pulverizer(['minecraft:diamond'], [
        'caverns_and_chasms:diamond_lamp'
    ])

})