ServerEvents.recipes(event => {

//      ### To the recipes that end up here, in peace may you rest ###

    //Removed
        //event.remove({type: 'botania:elven_trade'})
        //event.remove({type: 'minecraft:crafting_shaped', input:'minecraft:fire_charge', output:'#forge:ingots'})
        event.remove({type: 'tconstruct:alloy'})
        event.remove({type: 'botania:elven_trade', output:'botania:dragonstone'})
        event.remove({type: 'botania:elven_trade', output:'botania:dragonstone_block'})
        event.remove({ type: 'immersiveengineering:blast_furnace' })

        event.remove({id: 'thermal:fire_charge/constantan_ingot_2'})
        event.remove({id: 'thermal:fire_charge/electrum_ingot_2'})
        event.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
        event.remove({id: 'thermal:fire_charge/invar_ingot_3'})
        event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
        event.remove({id: 'thermal:fire_charge/signalum_ingot_4'})
        event.remove({id: 'thermal:fire_charge/lumium_ingot_4'})

        event.remove({id: 'thermal:fire_charge/obsidian_glass_2'})
        event.remove({id: 'thermal:fire_charge/lumium_glass_2'})
        event.remove({id: 'thermal:fire_charge/signalum_glass_2'})
        event.remove({id: 'thermal:fire_charge/enderium_glass_2'})

        //event.remove({output: 'forestry:bee_combs'})
        //event.remove({input: /^forestry:.*bee.*/})
        //event.remove({output: /^forestry:.*comb.*/})

        event.remove({output: 'appflux:energy_processor_press'})
        event.remove({id: 'thermal:lightning_charge'})
        event.remove({id: 'caverns_and_chasms:necromium_ingot'})
        event.remove({id: 'create_alexcaves_compat:splashing/guano_block'})
        event.remove({id: 'create_alexcaves_compat:sequenced_assembly/occult_gem'})
        event.remove({id: 'botania:petal_apothecary/jaded_amaranthus'})
        event.remove({output: 'tconstruct:seared_melter'})
        event.remove({input: 'immersiveengineering:wirecutter'})
        event.remove({input: 'immersiveengineering:hammer'})
        event.remove({id: 'mechanism:sawing/torch'})
        event.remove({id: 'tconstruct:smeltery/melting/metal/molten_debris/ore'})
        event.remove({id: 'tconstruct:smeltery/melting/metal/netherite/lodestone'})
        event.remove({output: 'ae2:crank'})
        event.remove({output: 'thermal:lightning_charge'})
        event.remove({output: 'botania:fertilizer'})
        event.remove({output: 'botania:orechid'})
        event.remove({output: 'botania:orechid_ignem'})
        event.remove({output: 'immersiveengineering:blastbrick_reinforced'})

        event.remove({id: 'ae2:crank'})
        event.remove({id: 'supplementaries:crank'})
        event.remove({id: 'immersiveengineering:alloybrick'})
        event.remove({id: 'tiab:time_in_a_bottle'})

        event.remove({id: 'create_alexscaves_compat:splashing/metal_swarf'})
        event.remove({id: 'actuallyadditions:laser/soul_sand'})
        event.remove({id: 'malum:spirit_crucible/quartz'})
        event.remove({id: 'create:crushing/diorite'})
        event.remove({id: 'create_alexscaves_compat:crushing/radrock_recycling'})
        event.remove({id: 'create:haunting/soul_sand'})
        event.remove({id: 'create_alexscaves_compat:crushing/galena_recycling'})
        event.remove({id: 'create_alexscaves_compat:crushing/packed_galena'})
        event.remove({id: 'thermal:machines/smelter/smelter_raw_iron'})
        event.remove({id: 'create:splashing/gravel'})
        event.remove({id: 'create:crushing/tuff'})
        event.remove({id: 'create:splashing/crushed_raw_iron'})
        event.remove({id: 'alexscaves:uranium_from_shard'})
        event.remove({id: 'immersiveengineering:crafting/nugget_uranium_to_ingot_uranium'})
        event.remove({id: 'ae2:network/cables/dense_smart_fluix'})
	    event.remove({id: 'create_alexscaves_compat:crushing/scrap_metal_recycling' })
	    event.remove({id: 'actuallyadditions:lens_of_the_miner' })
        event.remove({id: 'alexscaves:hot_chocolate_bottle'})
        event.remove({id: 'tconstruct:smeltery/melting/metal/iron/chain'})

	    event.remove({id: 'thermal:machines/pulverizer/pulverizer_andesite' })
	    event.remove({id: 'thermal:machines/pulverizer/pulverizer_granite' })
	    event.remove({id: 'thermal:machines/pulverizer/pulverizer_diorite' })

        event.remove({id: /^ae2:network\/cables\/glass_/ })

        event.remove({id: 'immersiveposts:has_gold_rod'})
        event.remove({id: 'immersiveposts:has_iron_rod'})
        event.remove({id: 'immersiveposts:has_copper_rod'})
        event.remove({id: 'immersiveposts:has_aluminum_rod'})
        event.remove({id: 'immersiveposts:has_lead_rod'})
        event.remove({id: 'immersiveposts:has_silver_rod'})
        event.remove({id: 'immersiveposts:has_electrum_rod'})
        event.remove({id: 'immersiveposts:has_nickel_rod'})
        event.remove({id: 'immersiveposts:has_constantan_rod'})
        event.remove({id: 'immersiveposts:has_uranium_rod'})

        event.remove({id: `mekanism:infusion_conversion/carbon/from_coal`})
        event.remove({id: `mekanism:infusion_conversion/carbon/from_charcoal`})
        event.remove({id: `mekanism:infusion_conversion/carbon/from_coal_block`})
        event.remove({id: `mekanism:infusion_conversion/carbon/from_charcoal_block`})
        let chemical_nuke = (chemical) => {
        	event.remove({id: `mekanism:infusion_conversion/${chemical}/from_dust`})
        }

        chemical_nuke("redstone")
        chemical_nuke("tin")
        chemical_nuke("iron")
        chemical_nuke("gold")
        chemical_nuke("diamond")
        chemical_nuke("refined_obsidian")


    //Removed and unlisted items
        event.remove({output: 'untagged_mobs:alpha_core'})
        event.remove({output: 'alexscaves:depth_charge'})
        event.remove({output: 'malum:crude_scythe'})
        event.remove({output: 'malum:soul_stained_steel_scythe'})
        event.remove({output: 'botania:endoflame'})
        event.remove({output: 'botania:floating_endoflame'})
        event.remove({input: '#forestry:bees'})
        event.remove({output: '#forestry:bees'})
        event.remove({input: '#forestry:combs'})
        event.remove({output: '#forestry:combs'})
        event.remove({output: 'untagged_mobs:television'})
        //event.remove({output: 'botania:alfheim_portal'})
        event.remove({output: 'untagged_mobs:camera'})
        event.remove({output: 'miners_delight:copper_cup'})

        let impetus_nuke = (material) => {
            event.remove({id: `malum:node_focusing${material}`})
            event.remove({id: `malum:spirit_infusion/${material}_impetus`})
        }

        impetus_nuke('nickel')
        impetus_nuke('zinc')
        impetus_nuke('tin')
        impetus_nuke('iron')
        impetus_nuke('gold')
        impetus_nuke('aluminum')
        impetus_nuke('osmium')
        impetus_nuke('uranium')

    //Changed
        event.replaceInput({input:'clanginghowl:extraterrestrial_steel_plate'}, 'clanginghowl:extraterrestrial_steel_plate', 'immersiveengineering:plate_steel'

)


})