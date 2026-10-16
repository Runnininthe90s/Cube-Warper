ServerEvents.recipes(event => {

    let weeping_well = (Output, Input) => {
        event.remove({output: Output})
        event.custom({
            "type": "malum:favor_of_the_void",
            "input": {
              "item": Input
            },
            "output": {
              "item": Output
            }
        })
    }
    
    weeping_well("kubejs:error_cube",
        "untagged_mobs:default_cube"
    )

    weeping_well("alexscaves:thornwood_log",
        "botania:dreamwood_log"
    )

    weeping_well("malum:warp_flux",
        "kubejs:alpha_particles"
    )

    weeping_well("enderio:dark_steel_ingot",
        "enderio:end_steel_ingot"
    )

    weeping_well("incision:vile_fang",
        "alexscaves:sweet_tooth"
    )

    weeping_well("untagged_mobs:null_item",
        "untagged_mobs:item_missing"
    )

    weeping_well("untagged_mobs:inverse_sand",
        "untagged_mobs:alpha_sand"
    )

    weeping_well("kubejs:vector_operator_step9",
        "kubejs:vector_operator_step8"
    )

    event.remove({id: "malum:void_favor/malignant_lead"})
    event.custom({
        "type": "malum:favor_of_the_void",
        "input": {
          "item": "malum:hallowed_gold_ingot"
        },
        "output": {
          "item": "malum:malignant_lead"
        }
    })

})