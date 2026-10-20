ServerEvents.recipes(event => {

	event.shapeless('4x kubejs:vector_operator_basic', ['kubejs:emergency_fuses'])
	event.shapeless('4x tconstruct:seared_brick', ['tconstruct:seared_bricks'])
	event.shapeless('9x thermal:gold_coin', ['kubejs:coin_bag_gold'])
	event.shapeless('kubejs:coin_bag_gold', ['9x thermal:gold_coin'])

	event.remove({input: 'windswept:snowdrop'})
	event.shapeless('2x botania:white_petal', ['windswept:snowdrop'])

	event.shapeless('kubejs:crowbar', ['immersiveengineering:stick_iron'])

	//event.remove({output: 'immersiveengineering:blastbrick'})
	//event.shapeless('immersiveengineering:blastbrick', ['4x kubejs:guano_blast_brick'])

	event.shapeless('kubejs:block_shiny_ingot', ['9x kubejs:shiny_ingot'])
	event.shapeless('9x kubejs:shiny_ingot', ['kubejs:block_shiny_ingot'])

	event.remove({output: 'tconstruct:crafting_station'})
	event.shapeless('minecraft:crafting_table', ['tconstruct:crafting_station'])
	event.shapeless('tconstruct:crafting_station', ['minecraft:crafting_table'])

	event.remove({output: 'exposure_polaroid:instant_color_slide'})
	event.shapeless('exposure_polaroid:instant_color_slide', ['minecraft:paper'])

	event.shapeless('3x environmental:cattail_fluff', ['environmental:cattail'])

	event.remove({output: 'appflux:insulating_resin'})
	event.shapeless('appflux:insulating_resin', ['thermal:rubber', 'alexscaves:sulfur_dust', 'ae2:silicon'])

	event.shapeless('appflux:flux_accessor', ['appflux:part_flux_accessor'])

	event.shapeless('malum:block_of_living_flesh', ['9x malum:living_flesh'])
	event.shapeless('9x malum:living_flesh', ['malum:block_of_living_flesh'])

	event.shapeless('immersiveengineering:gunpart_barrel', ['immersiveengineering:stick_steel'])

	event.remove({id: 'untagged_mobs:alpha_clay_recipe'})
	event.shapeless('untagged_mobs:alpha_clay', ['9x untagged_mobs:alpha_clay_ball'])

	event.remove({id: 'alexscaves:uranium_from_block'})
	event.remove({id: 'immersiveengineering:crafting/storage_uranium_to_ingot_uranium'})
	event.remove({id: 'immersiveengineering:crafting/raw_uranium_to_raw_block_uranium'})
	event.remove({id: 'tconstruct:smeltery/melting/metal/uranium/nugget'})
	event.remove({id: 'tconstruct:smeltery/melting/metal/uranium/raw'})
	event.remove({id: 'tconstruct:smeltery/melting/metal/uranium/block'})
	event.shapeless('9x alexscaves:uranium', ['immersiveengineering:storage_uranium'])
	event.remove({id: 'alexscaves:uranium_shard_from_uranium'})
	event.shapeless('9x alexscaves:uranium_shard', ['alexscaves:uranium'])
	event.remove({id: 'alexscaves:furnace/uranium_from_radrock_ore_smelting'})
	event.remove({id: 'alexscaves:furnace/uranium_from_radrock_ore_blasting'})
	event.remove({id: 'enderio:smelting/alexscaves/furnace/uranium_from_radrock_ore_smelting'})

})