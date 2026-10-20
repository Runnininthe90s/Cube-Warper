ServerEvents.recipes(event => {

    event.remove({output: 'minecraft:blaze_powder'})
    event.recipes.createCrushing(['create:empty_blaze_burner', 'minecraft:blaze_rod', 'minecraft:blaze_powder', Item.of('minecraft:blaze_powder').withChance(0.5)], ['create:blaze_burner'])
    
    event.remove({id: 'create:milling/compat/ae2/sky_stone_block'})
    event.remove({id: 'create:crushing/compat/ae2/sky_stone_block'})
    event.recipes.createCrushing(['ae2:sky_stone_block', 'ae2:sky_dust'], ['ae2:sky_stone_block'])

    event.remove({id: 'clanginghowl:extraterrestrial_energy_crystal'})
    event.remove({id: 'clanginghowl:extraterrestrial_energy_crystal_block'})
    event.recipes.createCrushing([Item.of('clanginghowl:extraterrestrial_energy_crystal').withChance(0.1)], ['clanginghowl:extraterrestrial_energy_crystal_block'])
	
})