ServerEvents.recipes(event => {

	event.recipes.mekanism.injecting('kubejs:modular_reactor', 
		'kubejs:modular_reactor_empty', 
		{gas:'mekanism:fissile_fuel',amount:25}
	)

})