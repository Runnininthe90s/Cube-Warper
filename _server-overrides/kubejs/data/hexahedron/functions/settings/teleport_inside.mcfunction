scoreboard objectives add hex_settings dummy
scoreboard players set warp_pull_players hex_settings 1
tellraw @a ["",{"text":"[Hexahedron] ","color":"aqua","bold":true},{"text":"Outside players on warp set to: ","color":"gray"},{"text":"TELEPORT INSIDE","color":"green","bold":true},{"text":" (all players outside are pulled into the Hexahedron when warp starts).","color":"gray"}]
