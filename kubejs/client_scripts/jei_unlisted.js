let jei_remove = (Item) => {

    JEIEvents.hideItems(event => {
      event.hide(Item)
    })

}

jei_remove('ae2:facade')

jei_remove('botania:endoflame')
jei_remove('botania:floating_endoflame')
jei_remove('#forestry:bees')
jei_remove('#forestry:combs')
jei_remove('malum:crude_scythe')
jei_remove('malum:soul_stained_steel_scythe')
jei_remove('untagged_mobs:television')
jei_remove('alexscaves:depth_charge')
jei_remove('alexscaves:gummy_ring_pink')

jei_remove('malum:nickel_impetus')
jei_remove('malum:zinc_impetus')
jei_remove('malum:tin_impetus')
jei_remove('malum:iron_impetus')
jei_remove('malum:gold_impetus')
jei_remove('malum:aluminum_impetus')
jei_remove('malum:osmium_impetus')
jei_remove('malum:uranium_impetus')
jei_remove('enderio:grains_of_infinity')
jei_remove('untagged_mobs:alpha_core')
jei_remove('untagged_mobs:camera')
jei_remove('miners_delight:copper_cup')


let jei_show = (Item) => {
    JEIEvents.addItems(event => {
      event.add(Item)
    })
}

jei_show('thermal:iron_plate')
jei_show('thermal:copper_plate')
jei_show('thermal:gold_plate')

jei_remove('malum:block_of_void_salts')
jei_show('malum:block_of_void_salts')