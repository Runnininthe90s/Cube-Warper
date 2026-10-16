ServerEvents.recipes(event => {

    let electron_tubes = (output, type) => {

        event.remove({output: output})
        event.custom({
            "type": "forestry:fabricator",
            "molten": {
              "Amount": 500,
              "FluidName": "forestry:glass"
            },
            "plan": [],
            "recipe": {
              "type": "minecraft:crafting_shaped",
              "category": "misc",
              "key": {
                "E": {"item": "thermal:electrum_ingot"},
                "R": {"item": "alexscaves:radon_bottle"},
                "X": {"item": type}
              },
              "pattern": [
                " X ",
                "XXX",
                "ERE"
              ],
              "result": {
                "count": 1,
                "item": output
              },
              "show_notification": true
        }
    })
}

    electron_tubes('forestry:electron_tube_blaze',         'clanginghowl:blaze_fuel')
    electron_tubes('forestry:electron_tube_gold',          'minecraft:gold_ingot')
    electron_tubes('forestry:electron_tube_diamond',       'actuallyadditions:diamatine_crystal')
    electron_tubes('forestry:electron_tube_tin',           'thermal:tin_ingot')
    electron_tubes('forestry:electron_tube_bronze',        'thermal:bronze_ingot')
    electron_tubes('forestry:electron_tube_copper',        'minecraft:copper_ingot')
    electron_tubes('forestry:electron_tube_iron',          'minecraft:iron_ingot')
    electron_tubes('forestry:electron_tube_obsidian',      'mekanism:ingot_refined_obsidian')
    electron_tubes('forestry:electron_tube_emerald',       'minecraft:emerald')
    electron_tubes('forestry:electron_tube_apatite',       'thermal:apatite')
    electron_tubes('forestry:electron_tube_lapis',         'minecraft:lapis_lazuli')
    electron_tubes('forestry:electron_tube_silicon',       'ae2:silicon')
    electron_tubes('forestry:electron_tube_amber',         'alexscaves:amber_curiosity')
    electron_tubes('forestry:electron_tube_ender',         'thermal:enderium_ingot')

    electron_tubes('kubejs:portal_lantern',                'ae2:sky_dust')
    electron_tubes('kubejs:soul_fuse',                     'enderio:filled_soul_vial')
})