ServerEvents.recipes(event => {

    let spirit_infusion = (output, output_count, input, input_count, extra_items, spirits) => {

        extra_items = extra_items || []
        spirits = spirits || []

        event.remove({output: output})
        event.remove({
            id: `malum:spirit_infusion/${output.split(":")[1]}`
        })

        event.custom({
            type: "malum:spirit_infusion",

            extra_items: extra_items,

            input: {
                count: input_count,
                item: input
            },

            output: {
                count: output_count,
                item: output
            },

            spirits: spirits
        })
    }

    spirit_infusion(
        "malum:spirit_crucible", 1,
        "minecraft:furnace", 1,
        [
            {
                count: 8,
                item: "botania:livingrock"
            },
            {
                count: 32,
                item: "thermal:silver_ingot"
            },
            {
                count: 1,
                item: "alexscaves:fissile_core"
            }
        ],
        [
            {
                type: "arcane",
                count: 8
            },
            {
                type: "infernal",
                count: 16
            },
            {
                type: "earthen",
                count: 4
            }
        ]
    )

    spirit_infusion(
        "caverns_and_chasms:large_arrow", 4,
        "immersiveposts:stick_silver", 1, 
        [
            {
                count: 16,
                item: "thermal:silver_ingot"
            }
        ],
        [
            {
                type: "aerial",
                count: 8
            }
        ]
    )

    spirit_infusion(
        "alexscaves:burrowing_arrow", 4,
        "enderio:infinity_rod", 1,
        [
            {
                count: 1,
                item: "alexscaves:sweet_tooth"
            }
        ],
        [
            {
                type: "aerial",
                count: 4
            },
            {
                type: "earthen",
                count: 4
            }
        ]
    )

    spirit_infusion(
        "alexscaves:occult_gem", 1,
        "botania:dragonstone", 1,
        [
            {
                count: 16,
                item: "kubejs:error_cube"
            },
            {
                count: 1,
                item: "alexscaves:pure_darkness"
            },
            {
                count: 1,
                item: "malum:living_flesh"
            }
        ],
        [
            {
                type: "aerial",
                count: 4
            },
            {
                type: "arcane",
                count: 4
            },
            {
                type: "infernal",
                count: 4
            }
        ]
    )

    spirit_infusion(
        "alexscaves:forsaken_idol", 1,
        "enderio:ensouled_chassis", 1,
        [
            {
                count: 6,
                item: "alexscaves:occult_gem"
            },
            {
                count: 6,
                item: "darkerdepths:forsaken_bronze_ingot"
            },
            {
                count: 6,
                item: "alexscaves:thornwood_log"
            }
        ],
        [
            {
                type: "arcane",
                count: 32
            }
        ]
    )

    spirit_infusion(
        "kubejs:crimson_eye", 32,
        "kubejs:crimson_eye", 16,
        [
            {
                count: 16,
                item: "malum:living_flesh"
            }
        ],
        [
            {
                type: "infernal",
                count: 4
            }
        ]
    )

    spirit_infusion(
        "incision:congealed_acid", 32,
        "incision:congealed_acid", 16,
        [
            {
                count: 16,
                item: "malum:living_flesh"
            }
        ],
        [
            {
                type: "infernal",
                count: 4
            }
        ]
    )

    spirit_infusion(
        "kubejs:vector_operator_step5", 1,
        "kubejs:vector_operator_step4", 1,
        [
            {
                count: 4,
                item: "botania:rune_water"
            },
            {
                count: 4,
                item: "botania:rune_earth"
            },
            {
                count: 4,
                item: "botania:rune_fire"
            },
            {
                count: 4,
                item: "botania:rune_air"
            }
        ],
        [
            {
                type: "aqueous",
                count: 4
            },
            {
                type: "earthen",
                count: 4
            },
            {
                type: "infernal",
                count: 4
            },
            {
                type: "aerial",
                count: 4
            }
        ]
    )

    
    spirit_infusion(
        "malum:runewood_totem_base", 1,
        "malum:runewood_log", 1,
        [
            {
                count: 8,
                item: "malum:runewood_planks"
            },
            {
                count: 4,
                item: "malum:hex_ash"
            }
        ],
        [
            {
                type: "arcane",
                count: 16
            },
            {
                type: "aqueous",
                count: 8
            },
            {
                type: "earthen",
                count: 8
            },
            {
                type: "infernal",
                count: 8
            },
            {
                type: "aerial",
                count: 8
            }
        ]
    )


})