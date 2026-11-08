ServerEvents.recipes(event => {

    function nuclearFurnace(output, input, id) {
        event.custom({
            type: 'alexscaves:nuclear_furnace',
            ingredient: { item: input },
            result: output,
            cookingtime: 1500
        }).id(id)
    }

    nuclearFurnace('kubejs:vector_operator_nuclear', 'kubejs:vector_operator_empty', 'kubejs:kjs/vector_operator_nuclear')
    nuclearFurnace('alexscaves:fissile_core', 'kubejs:empty_shell', 'kubejs:kjs/alexscaves_fissile_core')

    event.remove({output: 'create_alex_power:soul_goop'})
    event.remove({output: 'alexscaves:toxic_paste'})
    nuclearFurnace('alexscaves:toxic_paste', 'create_alex_power:soul_goop', 'kubejs:kjs/alexscaves_toxic_paste')
    nuclearFurnace('create_alex_power:soul_goop', 'alexscaves:toxic_paste', 'kubejs:kjs/create_alex_power_soul_goop')
	
})