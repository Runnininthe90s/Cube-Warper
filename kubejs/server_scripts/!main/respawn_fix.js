PlayerEvents.respawned(event => {
  event.player.runCommandSilent('execute in minecraft:overworld run tp @s 0.5 98 6.5')
})

PlayerEvents.loggedIn(event => {
  // If the Launch Button has already been pressed (world_start == 1), teleport brand-new late joiners directly inside the cube
  event.server.runCommandSilent(`execute if score world_start world_start matches 1 as ${event.player.username}[tag=!init] in minecraft:overworld run tp @s 0.5 98 6.5`)
  event.server.runCommandSilent(`execute if score world_start world_start matches 1 as ${event.player.username}[tag=!init] run tag @s add init`)
})