ServerEvents.recipes(event => {

	event.remove({output: 'neapolitan:chocolate_cake'})
	event.recipes.createFilling('neapolitan:chocolate_cake', [
	  'enderio:cake_base',
	  Fluid.of('create:chocolate', 250)
	])

	event.recipes.createFilling('supplementaries:lumisene_bottle', [
	  'minecraft:glass_bottle',
	  Fluid.of('supplementaries:lumisene', 250)
	])
	
})