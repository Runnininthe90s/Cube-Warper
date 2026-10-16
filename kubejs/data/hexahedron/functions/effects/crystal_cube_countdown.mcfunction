execute in hexahedron:endless_rainbows as @e[type=marker,tag=cube_countdown,limit=1,sort=nearest] run scoreboard players add @s time 1

execute in hexahedron:endless_rainbows as @e[type=marker,tag=cube_countdown] at @s run playsound malum:cthonic_gold_place master @a ~ ~ ~ 50 0
execute in hexahedron:endless_rainbows as @e[type=marker,tag=cube_countdown] at @s run particle end_rod ~ ~ ~ 5 5 5 0.3 100 force


execute in hexahedron:endless_rainbows as @e[type=marker,tag=cube_countdown,scores={time=10..}] at @s run playsound block.respawn_anchor.deplete master @a ~ ~ ~ 50 0
execute in hexahedron:endless_rainbows as @e[type=marker,tag=cube_countdown,scores={time=10..}] at @s run particle minecraft:enchant ~ ~ ~ 0 0 0 0.1 1000 force
execute in hexahedron:endless_rainbows as @e[type=marker,tag=cube_countdown,scores={time=10..}] at @s run fill ~-7 ~-8 ~-7 ~7 ~8 ~7 minecraft:air replace #clanginghowl:energy_cluster
execute in hexahedron:endless_rainbows as @e[type=marker,tag=cube_countdown,scores={time=10..}] at @s run fill ~-4 ~-4 ~-4 ~4 ~4 ~4 kubejs:ancient_runes
execute in hexahedron:endless_rainbows as @e[type=marker,tag=cube_countdown,scores={time=10..}] at @s run tag @s remove cube_countdown

execute in hexahedron:endless_rainbows as @e[type=marker,tag=cube_countdown,scores={time=..10}] at @s run schedule function hexahedron:effects/crystal_cube_countdown 1s
execute in hexahedron:endless_rainbows as @e[type=marker,scores={time=10..}] at @s run scoreboard players set @s time 0
