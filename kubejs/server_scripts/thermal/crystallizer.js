ServerEvents.recipes(event => {

    let crystallizer = (Fluid, Input, Output) => {

        Input = Input || []

        let ingredients = [
            {
                "fluid": Fluid,
                "amount": 200
            }
        ]

        Input.forEach(ingredient => {
            ingredients.push(ingredient)
        })

        event.custom({
            "type": "thermal:crystallizer",
            "ingredients": ingredients,
            "result": [Output],
            "energy": 500
        })
    }

    event.remove({output: 'ae2:fluix_crystal'})
    crystallizer(
        "minecraft:water",
        [
            {"item": "ae2:charged_certus_quartz_crystal"},
            {"item": "ae2:sky_dust"},
        ],
        {"item": "ae2:fluix_crystal", "count": 3}
    )

    crystallizer(
        "minecraft:water",
        [
            {"item": "kubejs:vector_operator_empty"},
            {"item": "ae2:fluix_dust"},
        ],
        {"item": "kubejs:vector_operator_fluix"}
    )

    event.remove({output: 'create:rose_quartz'})
    crystallizer(
        "untagged_mobs:fluid_blood",
        [
            {"item": "ae2:certus_quartz_dust"},
        ],
        {"item": "create:rose_quartz", "count": 2}
    )

    crystallizer(
        "untagged_mobs:fluid_blood",
        [
            {"item": "thermal:quartz_dust"},
        ],
        {"item": "create:rose_quartz", "count": 2}
    )

    event.remove({output: 'appflux:redstone_crystal'})
    crystallizer(
        "minecraft:water",
        [
            {"item": "kubejs:energized_redstone"},
            {"item": "ae2:sky_dust"},
        ],
        {"item": "appflux:redstone_crystal", "count": 1}
    )

    event.remove({ id: 'ae2:transform/damaged_budding_quartz' })
    crystallizer(
        "minecraft:water",
        [
            {"item": "ae2:quartz_block"},
            {"item": "ae2:charged_certus_quartz_crystal"},
        ],
        {"item": "ae2:damaged_budding_quartz", "count": 1}
    )

    event.remove({ id: 'ae2:transform/chipped_budding_quartz' })
    crystallizer(
        "minecraft:water",
        [
            {"item": "ae2:damaged_budding_quartz"},
            {"item": "ae2:charged_certus_quartz_crystal"},
        ],
        {"item": "ae2:chipped_budding_quartz", "count": 1}
    )

    event.remove({ id: 'ae2:transform/flawed_budding_quartz' })
    crystallizer(
        "minecraft:water",
        [
            {"item": "ae2:chipped_budding_quartz"},
            {"item": "ae2:charged_certus_quartz_crystal"},
        ],
        {"item": "ae2:flawed_budding_quartz", "count": 1}
    )

})