ServerEvents.recipes(event => {

	event.remove({type: 'thermal:press', output: '#forge:plates'})
    event.remove({type: 'createdieselgenerators:hammering'})
	event.remove({type: 'tconstruct:smeltery', output: 'create:golden_sheet'})

    //event.remove({type: 'createdieselgenerators:wire_cutting'})

    event.remove({id: 'create:pressing/iron_ingot'})
    event.remove({id: 'create:pressing/gold_ingot'})
    event.remove({id: 'create:pressing/copper_ingot'})

    event.remove({id: 'immersiveengineering:metalpress/plate_iron'})
    event.remove({id: 'immersiveengineering:metalpress/plate_gold'})
    event.remove({id: 'immersiveengineering:metalpress/plate_copper'})

    event.recipes.create.pressing('immersiveengineering:plate_steel', 'immersiveengineering:ingot_steel')
    event.recipes.create.pressing('immersiveengineering:plate_aluminum', 'immersiveengineering:ingot_aluminum')

	let press = (die, input, output) => {
        event.recipes.thermal.press(output, [
            input, 
            die
        ])
    }

        let universal_press = (material, input) => {
            let output_wire = `immersiveengineering:wire_${material}`
            if (Item.exists(output_wire)) {
                press(  'immersiveengineering:mold_wire',          
                         input,                  
                        `2x immersiveengineering:wire_${material}`
                )
            }

            let output_plate = `thermal:${material}_plate`
            if (Item.exists(output_plate)) {
                event.recipes.create.pressing(`thermal:${material}_plate`, input)
                press(  'immersiveengineering:mold_plate',          
                         input,                  
                        `thermal:${material}_plate`
                )
            }

            let output_stick = `immersiveengineering:stick_${material}`
            if (Item.exists(output_stick)) {
                event.remove({type: 'minecraft:crafting_shaped', output: output_stick})
                press(  'immersiveengineering:mold_rod',          
                         input,                  
                        `4x immersiveengineering:stick_${material}`
                )
            }

            let output_rod = `immersiveposts:stick_${material}`
            if (Item.exists(output_rod)) {
                event.remove({type: 'minecraft:crafting_shaped', output: output_rod})
                press(  'immersiveengineering:mold_rod',          
                         input,                  
                        `4x immersiveposts:stick_${material}`
                )
            }

            let output_gear = `thermal:${material}_gear`
            if (Item.exists(output_gear)) {
                event.remove({type: 'minecraft:crafting_shaped', output: output_gear})
                press(  'immersiveengineering:mold_gear',          
                        `4x ${input}`,                  
                        `thermal:${material}_gear`
                )
            }
        }

    Ingredient.of('#forge:ingots').itemIds.forEach(id => {
        let material = id.split(':')[1].replace('ingot_', '').replace('_ingot','')
        universal_press(material, id)
    })

    press('immersiveengineering:mold_plate', 'immersiveengineering:ingot_steel', 'immersiveengineering:plate_steel')
    press('immersiveengineering:mold_plate', 'immersiveengineering:ingot_uranium', 'immersiveengineering:plate_uranium')
    press('immersiveengineering:mold_plate', 'immersiveengineering:ingot_aluminum', 'immersiveengineering:plate_aluminum')

})