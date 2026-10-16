scoreboard objectives add hex_settings dummy
scoreboard players set warp_pull_players hex_settings 0
tellraw @a ["",{"text":"[Hexahedron] ","color":"aqua","bold":true},{"text":"Outside players on warp set to: ","color":"gray"},{"text":"LEAVE BEHIND","color":"gold","bold":true},{"text":" (outer portals close safely; players outside stay in their dimension).","color":"gray"}]
