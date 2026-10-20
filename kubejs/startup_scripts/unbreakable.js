let unbreakable_block = (unbreakable_block) => {
	BlockEvents.modification(event => {
	  event.modify(unbreakable_block, block => {
	    block.destroySpeed = -1
	    block.explosionResistance = 3600000
	  })
	})
}

//unbreakable_block('clanginghowl:extraterrestrial_energy_crystal_block')