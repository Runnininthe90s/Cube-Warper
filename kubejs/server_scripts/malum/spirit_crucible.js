ServerEvents.recipes(event => {

	event.remove({output: 'minecraft:glowstone_dust'})
	event.remove({id: 'enderio:sag_milling/glowstone'})
	//event.custom({
	//	"type": "malum:spirit_focusing",
	//	"durabilityCost": 1,
	//	"input": {
	//	  "item": "malum:alchemical_impetus"
	//	},
	//	"output": {
	//	  "count": 8,
	//	  "item": "minecraft:glowstone_dust"
	//	},
	//	"spirits": [
	//	  {
	//	    "type": "infernal"
	//	  }
	//	],
	//	"time": 300
	//})

})