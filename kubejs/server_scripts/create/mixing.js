ServerEvents.recipes(event => {

	event.remove({output: 'create:andesite_alloy'})
	event.remove({id: 'create:mixing/andesite_alloy'})
	event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
	event.recipes.createMixing('8x create:andesite_alloy', [
	  	'2x #tconstruct:seared_blocks',
	  	'2x minecraft:iron_ingot'
	])//.superheated()

	event.remove({id: 'malum:spirit_infusion/alchemical_calx'})
	event.recipes.createMixing('malum:alchemical_calx', [
	  	'malum:runic_sapball',
		'thermal:silver_dust'
	])//.superheated()


  	event.recipes.create.emptying(
  	  [Fluid.of('untagged_mobs:fluid_blood', 1000), 'minecraft:bucket'],
  	  'untagged_mobs:fluid_blood_bucket'
  	)
	event.recipes.createMixing(['thermal:iron_dust', Item.of('thermal:iron_dust').withChance(0.5)], [
		Fluid.of('untagged_mobs:fluid_blood', 1000)
	]).heated()

	event.recipes.createMixing([Fluid.of('kubejs:solder_fluid', 300)], [
		Fluid.of('tconstruct:molten_tin', 200),
		Fluid.of('tconstruct:molten_lead', 100)
	]).heated()

	event.remove({output: 'create:brass_ingot'})
	event.recipes.createMixing('2x create:brass_ingot', [
		'minecraft:copper_ingot',
		'create:zinc_ingot'
	]).heated()

	event.remove({id: 'forestry:still/ethanol'})
	event.remove({id: 'createdieselgenerators:bulk_fermenting/fermentable'})
	event.remove({id: 'createdieselgenerators:basin_fermenting/fermentable'})
	event.remove({id: 'createdieselgenerators:basin_fermenting/fermented_spider_eye'})
	event.remove({id: 'immersiveengineering:refinery/resin'})
	event.recipes.createMixing([Fluid.of('immersiveengineering:phenolic_resin', 270)], [
		Fluid.of('immersiveengineering:creosote', 120),
		Fluid.of('immersiveengineering:ethanol', 80)
	]).superheated()

})