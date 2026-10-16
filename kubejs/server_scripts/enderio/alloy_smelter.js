ServerEvents.recipes(event => {

    let alloy_smelter = (Input1, Input2, Input3, Result) => {
      	event.remove({output: Result})
    	event.custom({
    	  	"type": "enderio:alloy_smelting",
    	  	"energy": 4800,
    	  	"experience": 0.3,
    	  	"inputs": [
    	  	  {
    	  	    "count": 1,
    	  	    "ingredient": {
    	  	      "item": Input1
    	  	    }
    	  	  },
    	  	  {
    	  	    "count": 1,
    	  	    "ingredient": {
    	  	      "item": Input2
    	  	    }
    	  	  },
    	  	  {
    	  	    "count": 1,
    	  	    "ingredient": {
    	  	      "item": Input3
    	  	    }
    	  	  }
    	  	],
    	  	"result": {
    	  	  "item": Result
    	  	}
    	})
    }


    alloy_smelter(
      "kubejs:shiny_ingot",
      "caverns_and_chasms:turquoise",
      "actuallyadditions:diamatine_crystal",
      "mekanism:alloy_reinforced"
    )

    alloy_smelter(
      "minecraft:soul_sand",
      "minecraft:netherite_scrap",
      "darkerdepths:forsaken_bronze_scrap",
      "enderio:soularium_ingot"
    )

})