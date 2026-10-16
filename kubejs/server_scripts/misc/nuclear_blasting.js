ServerEvents.recipes(event => {

    event.recipes.kubejs.nuclear_furnace('kubejs:vector_operator_nuclear', 'kubejs:vector_operator_empty')
    event.recipes.kubejs.nuclear_furnace('alexscaves:fissile_core', 'kubejs:empty_shell')

    event.remove({output: 'create_alex_power:soul_goop'})
    event.remove({output: 'alexscaves:toxic_paste'})
    event.recipes.kubejs.nuclear_furnace('alexscaves:toxic_paste', 'create_alex_power:soul_goop')
    event.recipes.kubejs.nuclear_furnace('create_alex_power:soul_goop', 'alexscaves:toxic_paste')
	
})