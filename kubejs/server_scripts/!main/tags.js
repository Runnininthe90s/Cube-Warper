ServerEvents.tags('block', event => {
  event.add('minecraft:dirt', 'minecraft:snow_block')
  event.add('minecraft:nylium', 'biomesoplenty:flesh')
  event.add('endergetic:poise_plantable', 'biomesoplenty:black_sand')
  event.add('minecraft:dirt', 'endergetic:eumus_poismoss')
  event.add('minecraft:nylium', 'biomeswevegone:purple_sand')
  event.add('minecraft:nylium', 'minecraft:soul_soil')
  event.add('minecraft:nylium', 'create:scoria')
  event.add('minecraft:nylium', 'undergarden:deepturf_block')
  event.add('regions_unexplored:stone_plant_can_survive_on', 'regions_unexplored:prismaglass')
  event.add('minecraft:base_stone_overworld', 'regions_unexplored:prismaglass')
  event.add('minecraft:nylium', 'regions_unexplored:glistering_wart')

  event.add('hexahedron_frame', 'kubejs:warping_frame')
  event.add('hexahedron_frame', 'kubejs:warping_frame_rusted_half')
  event.add('hexahedron_frame', 'kubejs:warping_frame_rusted')
  event.add('hexahedron_frame', 'kubejs:warping_vent')
  event.add('hexahedron_frame', 'kubejs:warping_vent_rusted_half')
  event.add('hexahedron_frame', 'kubejs:warping_vent_rusted')
  event.add('hexahedron_frame', 'kubejs:stacked_warping_frame_slab')
  event.add('hexahedron_frame', 'kubejs:warping_interface')
  event.add('hexahedron_frame', 'kubejs:warping_controls')
  event.add('hexahedron_frame', 'kubejs:warping_disc_drive')

  event.add('minecraft:invalid_spawn_inside', 'kubejs:hexahedron_filling')

  event.add('kubejs:crimson_eye', 'kubejs:eye_closed')
  event.add('kubejs:crimson_eye', 'kubejs:eye_stage_1')
  event.add('kubejs:crimson_eye', 'kubejs:eye_stage_2')
  event.add('kubejs:crimson_eye', 'kubejs:eye_stage_3')
  event.add('kubejs:crimson_eye', 'kubejs:eye_stage_4')
  event.add('kubejs:crimson_eye', 'kubejs:eye_open')

  event.add('ftbultimine:excluded_blocks', 'clanginghowl:extraterrestrial_energy_crystal_block')
  event.add('ftbultimine:excluded_blocks', 'clanginghowl:extraterrestrial_energy_cluster')
  event.add('ftbultimine:excluded_blocks', 'clanginghowl:huge_extraterrestrial_energy_cluster')

  event.add('biomesoplenty:flesh_decoration_placeable', 'clanginghowl:technoflesh_block')
  event.add('biomesoplenty:flesh_decoration_placeable', 'dustrial_decor:padded_block')
  event.add('biomesoplenty:flesh_decoration_placeable', 'dustrial_decor:mini_padded_block')

  event.add('minecraft:dirt', 'alexscaves:block_of_frosting')
  event.add('minecraft:dirt', 'darkerdepths:darkslate')
  event.add('minecraft:dirt', 'darkerdepths:grimestone')

  event.add('minecraft:sand', 'infernalexp:shimmer_sand')
  event.add('minecraft:dirt', 'infernalexp:shimmer_sand')

  event.add('biomesoplenty:flesh', 'incision:carrion')
  event.add('biomesoplenty:flesh', 'incision:goreshed')

  event.add('kubejs:vector', 'kubejs:vector_operator_basic')
  event.add('kubejs:vector', 'kubejs:vector_operator_charged')
  event.add('kubejs:vector', 'kubejs:vector_operator_fluix')
  event.add('kubejs:vector', 'kubejs:vector_operator_nuclear')
  event.add('kubejs:vector', 'kubejs:vector_operator_blaze')
  event.add('kubejs:vector', 'kubejs:vector_operator_lightning')
  event.add('kubejs:vector', 'kubejs:vector_operator_crimson')
  event.add('kubejs:vector', 'kubejs:vector_operator_eye')

  event.remove('minecraft:soul_fire_base_blocks', 'tconstruct:soul_glass')
  event.remove('minecraft:soul_fire_base_blocks', 'tconstruct:seared_soul_glass')
  event.remove('minecraft:soul_fire_base_blocks', 'tconstruct:scorched_soul_glass')

  event.add('kubejs:final_vector', 'kubejs:vector_operator_infinite_empty')
  event.add('kubejs:final_vector', 'kubejs:vector_operator_step1')
  event.add('kubejs:final_vector', 'kubejs:vector_operator_step2')
  event.add('kubejs:final_vector', 'kubejs:vector_operator_step3')
  event.add('kubejs:final_vector', 'kubejs:vector_operator_step4')
  event.add('kubejs:final_vector', 'kubejs:vector_operator_step5')
  event.add('kubejs:final_vector', 'kubejs:vector_operator_step6')
  event.add('kubejs:final_vector', 'kubejs:vector_operator_step7')
  event.add('kubejs:final_vector', 'kubejs:vector_operator_step8')
  event.add('kubejs:final_vector', 'kubejs:vector_operator_step9')
  event.add('kubejs:final_vector', 'kubejs:vector_operator_step10')
  event.add('kubejs:final_vector', 'kubejs:vector_operator_step11')

  event.add('minecraft:wither_immune', '#minecraft:hexahedron_frame')
  event.add('minecraft:wither_immune', '#kubejs:crimson_eye')
  event.add('minecraft:wither_immune', 'kubejs:eye_pillar')
  event.add('minecraft:wither_immune', 'kubejs:ancient_runes')
  event.add('minecraft:wither_immune', 'kubejs:chiseled_ancient_bricks')
  event.add('minecraft:wither_immune', 'kubejs:ancient_bricks')
  event.add('minecraft:wither_immune', 'kubejs:ancient_bricks_stairs')

})

ServerEvents.tags('item', event => {

  event.remove('minecraft:stone_crafting_materials', 'minecraft:blackstone')
  event.remove('minecraft:stone_tool_materials', 'minecraft:blackstone')

	event.add('hexahedron:peat_block', 'biomeswevegone:peat')
	event.add('hexahedron:peat_block', 'regions_unexplored:peat_dirt')
	event.add('hexahedron:peat_block', 'regions_unexplored:peat_mud')

  event.remove('minecraft:soul_fire_base_blocks', 'tconstruct:soul_glass')
  event.remove('minecraft:soul_fire_base_blocks', 'tconstruct:seared_soul_glass')
  event.remove('minecraft:soul_fire_base_blocks', 'tconstruct:scorched_soul_glass')

	event.add('thermal:crafting/dies', 'immersiveengineering:mold_plate')
	event.add('thermal:crafting/dies', 'immersiveengineering:mold_wire')
	event.add('thermal:crafting/dies', 'immersiveengineering:mold_rod')
	event.add('thermal:crafting/dies', 'immersiveengineering:mold_gear')
	event.add('thermal:crafting/dies', 'thermal:chiller_rod_cast')
	event.add('thermal:crafting/dies', 'thermal:chiller_ingot_cast')
	event.add('thermal:crafting/dies', 'thermal:chiller_ball_cast')
	event.add('thermal:crafting/dies', 'ae2:silicon_press')
	event.add('thermal:crafting/dies', 'ae2:calculation_processor_press')
	event.add('thermal:crafting/dies', 'ae2:logic_processor_press')
	event.add('thermal:crafting/dies', 'ae2:engineering_processor_press')
	event.add('thermal:crafting/dies', 'appflux:energy_processor_press')

	event.add('thermal:crafting/casts', 'immersiveengineering:mold_plate')
	event.add('thermal:crafting/casts', 'immersiveengineering:mold_wire')
	event.add('thermal:crafting/casts', 'immersiveengineering:mold_rod')
	event.add('thermal:crafting/casts', 'immersiveengineering:mold_gear')
	event.add('thermal:crafting/casts', 'thermal:chiller_rod_cast')
	event.add('thermal:crafting/casts', 'thermal:chiller_ingot_cast')
	event.add('thermal:crafting/casts', 'thermal:chiller_ball_cast')
	event.add('thermal:crafting/casts', 'ae2:silicon_press')
	event.add('thermal:crafting/casts', 'ae2:calculation_processor_press')
	event.add('thermal:crafting/casts', 'ae2:logic_processor_press')
	event.add('thermal:crafting/casts', 'ae2:engineering_processor_press')
	event.add('thermal:crafting/casts', 'appflux:energy_processor_press')
	event.add('thermal:crafting/casts', 'alexscaves:frostmint')

  event.add('create:upright_on_belt', 'biomesoplenty:small_rose_quartz_bud')
  event.add('create:upright_on_belt', 'biomesoplenty:medium_rose_quartz_bud')
  event.add('create:upright_on_belt', 'biomesoplenty:large_rose_quartz_bud')
  event.add('create:upright_on_belt', 'biomesoplenty:rose_quartz_cluster')
  event.add('create:upright_on_belt', 'create:rose_quartz')

  event.remove('forge:slimeballs', 'malum:cursed_sapball')
  event.remove('forge:slimeballs', 'malum:runic_sapball')

  event.removeAll('forge:cobblestone')
  event.add('forge:cobblestone', 'minecraft:cobblestone')

})

ServerEvents.tags('fluid', event => {
  //WATER = WATER
    event.removeAll('minecraft:water')
    event.removeAll('c:water')
    event.add('minecraft:water', 'minecraft:water')
    event.add('c:water', 'minecraft:water')

    event.add('kubejs:light_oil', 'thermal:light_oil')
    event.add('kubejs:heavy_oil', 'thermal:heavy_oil')

    event.add('create:bottomless/allow', 'untagged_mobs:fluid_blood')
    event.add('create:bottomless/allow', 'tconstruct:molten_silver')
    event.add('create:bottomless/allow', 'createdieselgenerators:crude_oil')

})

ServerEvents.tags("worldgen/biome", (event) => {

  event.add('c:is_wet', 'hexahedron:storm_islands')

})

// Tag order
ServerEvents.tags('item', event => {
  event.remove('forge:dusts/sulfur', 'thermal:sulfur_dust')
  //event.add('forge:dusts/sulfur', 'thermal:sulfur_dust')
})