ServerEvents.recipes(event => {

    function mold_cutting(mold) {
        event.remove({ output: mold })
        event.stonecutting(mold, '#forge:plates/iron')
    }

    mold_cutting('immersiveengineering:mold_rod')
    mold_cutting('immersiveengineering:mold_gear')
    mold_cutting('immersiveengineering:mold_wire')
    mold_cutting('immersiveengineering:mold_plate')
    mold_cutting('thermal:chiller_ball_cast')
    mold_cutting('createdieselgenerators:mold')

event.shapeless(
    Item.of('createdieselgenerators:mold', '{Mold:"createdieselgenerators:bar"}'),
    [
        'createdieselgenerators:mold'
    ]
)

event.shapeless(
    Item.of('createdieselgenerators:mold', '{Mold:"createdieselgenerators:chain"}'),
    [
        Item.of('createdieselgenerators:mold', '{Mold:"createdieselgenerators:bar"}').strongNBT()
    ]
)

event.shapeless(
    Item.of('createdieselgenerators:mold', '{Mold:"createdieselgenerators:bowl"}'),
    [
        Item.of('createdieselgenerators:mold', '{Mold:"createdieselgenerators:chain"}').strongNBT()
    ]
)

event.shapeless(
    Item.of('createdieselgenerators:mold', '{Mold:"createdieselgenerators:lines"}'),
    [
        Item.of('createdieselgenerators:mold', '{Mold:"createdieselgenerators:bowl"}').strongNBT()
    ]
)
})