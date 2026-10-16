ServerEvents.recipes(event => {

	event.smelting('minecraft:copper_ingot', 
		'minecraft:cut_copper')

	//event.smelting('minecraft:copper_ingot', 
	//	'create:copper_shingles')

	//event.smelting('minecraft:copper_ingot', 
	//	'create:copper_tiles')

	event.smelting('minecraft:gold_nugget', 
		'thermal:gold_coin')

	event.smelting('clanginghowl:extraterrestrial_steel_ingot', 
		'clanginghowl:extraterrestrial_steel')

	event.smelting('kubejs:guano_blast_brick', 
		'kubejs:unbaked_guano_blast_brick')



})