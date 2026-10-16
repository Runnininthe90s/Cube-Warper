ServerEvents.recipes(event => {

	event.remove({output: 'clanginghowl:techno_optics'})
    event.custom({
		"type": "enderio:slicing",
		"energy": 20000,
		"inputs": [
		  {
		    "item": "kubejs:plastic"
		  },
		  {
		    "item": "kubejs:crimson_eye"
		  },
		  {
		    "item": "kubejs:plastic"
		  },
		  {
		    "item": "kubejs:peeking_circuit"
		  },
		  {
		    "item": "clanginghowl:advanced_energy_battery"
		  },
		  {
		    "item": "kubejs:peeking_circuit"
		  }
		],
		"output": {
		  "item": "clanginghowl:techno_optics"
		}
	})

})