ServerEvents.recipes(event => {

    event.remove({output: 'malum:runic_sapball'})
	event.shapeless('malum:runic_sapball', ['malum:runic_sap'])

    event.remove({output: 'malum:cursed_sapball'})
	event.shapeless('malum:cursed_sapball', ['malum:cursed_sap'])

	let rock_gen = (output, adjacent, below) => {
    event.custom({
        "type": "thermal:rock_gen",
        "adjacent": adjacent,
        "below": below,
        "result": {
            "item": output
        }
      })
    }

    rock_gen('malum:runic_sapball', 
        'malum:block_of_alchemical_calx', 
        'malum:revealed_runewood_log'
    )

    rock_gen('malum:cursed_sapball', 
        'malum:block_of_alchemical_calx', 
        'malum:revealed_soulwood_log'
    )

})