ItemEvents.rightClicked('kubejs:tiny_party_popper', event => {
	event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run function hexahedron:effects/confetti_tiny`)
	event.item.count--
})

