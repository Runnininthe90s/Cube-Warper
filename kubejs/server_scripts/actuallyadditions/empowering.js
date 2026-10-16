ServerEvents.recipes(event => {

//https://minecraft.wiki/w/Calculators/Decimal_representation_of_color

	let empowering = (Input0, Input1, Input2, Input3, Input4, Output, Power, Time, Color) => {
		event.custom({
            "type": "actuallyadditions:empowering",
            "base": {
              "item": Input0
            },
            "color": Color,
            "energy": Power,
            "modifiers": [
              {
                "item": Input1
              },
              {
                "item": Input2
              },
              {
                "item": Input3
              },
              {
                "item": Input4
              }
            ],
            "result": {
              "item": Output
            },
            "time": Time
        })
	}
	
  event.remove({id: 'mekanism:metallurgic_infusing/alloy/infused'})
	empowering(
        "caverns_and_chasms:zirconia",

        "appflux:charged_redstone",
        "actuallyadditions:restonia_crystal",
		    "appflux:charged_redstone",
		    "actuallyadditions:restonia_crystal",

        "mekanism:alloy_infused",
		5000, 50, 16723994
	)

})