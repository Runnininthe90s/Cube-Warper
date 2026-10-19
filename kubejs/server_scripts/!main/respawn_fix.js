PlayerEvents.respawned(event => {
  event.player.runCommandSilent('execute in minecraft:overworld run tp @s 0.5 98 6.5')
})

PlayerEvents.loggedIn(event => {
  // If the Launch Button has already been pressed (world_start == 1), teleport brand-new late joiners directly inside the cube
  event.player.runCommandSilent('execute if score world_start world_start matches 1 if entity @s[tag=!init] in minecraft:overworld run tp @s 0.5 98 6.5')
  event.player.runCommandSilent('execute if score world_start world_start matches 1 if entity @s[tag=!init] run tag @s add init')
})