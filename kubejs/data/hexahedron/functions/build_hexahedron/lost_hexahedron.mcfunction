scoreboard objectives add lost_hex dummy
scoreboard players add lost_hex lost_hex 1
execute if score lost_hex lost_hex matches 1 as @e[type=marker,tag=outer_core] at @s run place template hexahedron:lost_hexahedron ~-8 ~-8 ~60