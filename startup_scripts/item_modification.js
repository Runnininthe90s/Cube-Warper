ItemEvents.modification(event => {
    event.modify('miners_delight:weird_caviar', item => {
        item.foodProperties = food => {
            food.hunger(6)
            food.saturation(0.5)
        }
    })

    event.modify('neapolitan:strawberry_ice_cream_block', item => {
        item.foodProperties = food => {
            food.hunger(2.0)
            food.saturation(0.5)
        }
    })
})

ItemEvents.modification(event => {
    event.modify('alexscaves:radon_bottle', item => {
        item.craftingRemainder = null
    })
})