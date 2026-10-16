ServerEvents.recipes(event => {

	event.custom({
	  	"type": "forestry:squeezer",
	  	"chance": 0.6,
	  	"output": {
	  	  "Amount": 10,
	  	  "FluidName": "minecraft:water"
	  	},
	  	"remnant": {
	  	  "Count": 1,
	  	  "id": "forestry:peat"
	  	},
	  	"resources": [
	  	  {
	  	    "tag": "hexahedron:peat_block"
	  	  }
	  	],
	  	"time": 10
	})

})