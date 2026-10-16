EntityEvents.spawned(event => {
    let entity = event.entity
    if (entity.type === 'minecraft:item' && entity.item.id === 'kubejs:vector_operator_empty') {        
        if (entity.getOwner() != null) return
        entity.setMotion(0.0,0.25,-0.05)
    }
})

BlockEvents.broken("kubejs:vector_operator_infinite_empty", event => {
    event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function hexahedron:effects/final_countdown`)
})