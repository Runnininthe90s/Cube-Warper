ServerEvents.recipes(event => {

  event.remove({output: 'ae2:printed_silicon'})
  event.recipes.thermal.press('ae2:printed_silicon', [
      'ae2:silicon', 
      'ae2:silicon_press'
  ])

	let press = (die, input, output, processor) => {
    event.remove({output: processor})
    event.remove({output: output})
    event.recipes.createDeploying(processor, ['ae2:printed_silicon', output])
    event.recipes.thermal.press(output, [
        input, 
        die
    ])
  }

    press('ae2:logic_processor_press',          'thermal:gold_dust',        'ae2:printed_logic_processor',        'ae2:logic_processor')
    press('ae2:engineering_processor_press',    'thermal:diamond_dust',     'ae2:printed_engineering_processor',  'ae2:engineering_processor')
    press('ae2:calculation_processor_press',    'ae2:certus_quartz_dust',   'ae2:printed_calculation_processor',  'ae2:calculation_processor')
    press('appflux:energy_processor_press',     'appflux:charged_redstone', 'appflux:printed_energy_processor',   'appflux:energy_processor')


//let inscriber_rework = (input, output) => {
//        event.remove({output: output})
//        event.custom({
//            "type": "ae2:inscriber",
//            "ingredients": {
//              "bottom": {
//                "item": "ae2:printed_silicon"
//              },
//              "middle": {
//                "item": 'clanginghowl:redstone_wire'
//              },
//              "top": {
//                "item": input
//              }
//            },
//            "mode": "press",
//            "result": {
//              "item": output
//            }
//        })
//    //}

//    inscriber_rework(
//        'ae2:printed_calculation_processor',
//        'ae2:calculation_processor'
//    //)

//    inscriber_rework(
//        'ae2:printed_logic_processor',
//        'ae2:logic_processor'
//    //)

//    inscriber_rework(
//        'ae2:printed_engineering_processor',
//        'ae2:engineering_processor'
//    )

})