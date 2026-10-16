ItemEvents.modification(event => {
    event.modify('miners_delight:weird_caviar', item => {
        item.foodProperties = food => {
            food.hunger(6)
            food.saturation(0.5)
        }
    })
})