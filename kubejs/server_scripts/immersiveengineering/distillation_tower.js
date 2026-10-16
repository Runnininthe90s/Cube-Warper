ServerEvents.recipes(event => {

	event.remove({id: 'thermal:machines/refinery/refinery_crude_oil'})
	event.remove({id: 'thermal:machines/refinery/refinery_light_oil'})
	event.remove({id: 'thermal:machines/refinery/refinery_heavy_oil'})

	event.remove({id: 'createdieselgenerators:distillation/crude_oil'})
	event.remove({id: 'createdieselgenerators:distillation/superheated_crude_oil'})

	event.remove({id: 'immersivepetroleum:distillationtower/oil'})

	event.custom({
		"type": "immersivepetroleum:distillation",
		"byproducts": [
		  {
		    "chance": "0.07",
		    "item": "immersivepetroleum:bitumen"
		  }
		],
		"energy": 1024,
		"input": {
		  "amount": 60,
		  "tag": "forge:crude_oil"
		},
		"results": [
		  {
		    "amount": 15,
		    "fluid": "thermal:light_oil"
		  },
		  {
		    "amount": 20,
		    "fluid": "thermal:heavy_oil"
		  },
		  {
		    "amount": 30,
		    "fluid": "immersivepetroleum:diesel"
		  }
		],
		"time": 1
	})


})