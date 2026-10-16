scoreboard objectives add hex_settings dummy
execute unless score warp_pull_players hex_settings matches 0..1 run scoreboard players set warp_pull_players hex_settings 0
execute if score warp_pull_players hex_settings matches 0 run tellraw @s ["",{"text":"[Hexahedron] ","color":"aqua","bold":true},{"text":"Current warp mode: ","color":"gray"},{"text":"LEAVE BEHIND (0)","color":"gold","bold":true}]
execute if score warp_pull_players hex_settings matches 1 run tellraw @s ["",{"text":"[Hexahedron] ","color":"aqua","bold":true},{"text":"Current warp mode: ","color":"gray"},{"text":"TELEPORT INSIDE (1)","color":"green","bold":true}]
