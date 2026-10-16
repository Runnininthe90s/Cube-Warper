ServerEvents.recipes(event => {

    const $BuiltInRegistries = Java.loadClass(
        'net.minecraft.core.registries.BuiltInRegistries'
    )

    let moltenExists = material => {
        let fluidId = `tconstruct:molten_${material}`
        return $BuiltInRegistries.FLUID.containsKey(fluidId)
    }


    let melting = (ingot, fluid) => {
        event.recipes.thermal.crucible(
            Fluid.of(fluid, 90),
            ingot
        ).energy(1000)
    }

    Ingredient.of('#forge:ingots').itemIds.forEach(ingot => {
        let [namespace, item] = ingot.split(':')

        if (item.endsWith('_ingot')) {
            let material = item.substring(0, item.length - '_ingot'.length)

            if (moltenExists(material)) {
                melting(ingot, `tconstruct:molten_${material}`)
            }
        }
    })


    let chilling = (fluid, ingot) => {
        event.recipes.thermal.chiller(
            ingot,
            [
                Fluid.of(fluid, 90),
                'thermal:chiller_ingot_cast'
            ]
        ).energy(1000)
    }

    Ingredient.of('#forge:ingots').itemIds.forEach(ingot => {
        let [namespace, item] = ingot.split(':')

        if (item.endsWith('_ingot')) {
            let material = item.substring(0, item.length - '_ingot'.length)
            let fluid = `tconstruct:molten_${material}`

            if (moltenExists(material)) {
                chilling(fluid, ingot)
            }
        }
    })

})