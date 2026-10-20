execute as @e[tag=core] at @s run tag @e[distance=..30,type=magma_cube] add hex_target
execute as @e[tag=core] at @s run tag @e[distance=..30,type=untagged_mobs:vain] add hex_target
execute as @e[tag=core] at @s run tag @e[distance=..30,type=clanginghowl:extraterrestrial_reaper] add hex_target
execute as @e[tag=core] at @s run tag @e[distance=..30,type=alexscaves:gammaroach] add hex_target
execute as @e[tag=core] at @s run tag @e[distance=..30,type=alexscaves:gingerbread_man] add hex_target
execute as @e[tag=core] at @s run tag @e[distance=..30,type=minecraft:wither_skeleton] add hex_target
execute as @e[tag=core] at @s run tag @e[distance=..30,type=windswept:frostbiter] add hex_target
execute as @e[tag=core] at @s run tag @e[distance=..30,type=windswept:chilled] add hex_target
execute as @e[tag=core] at @s run tag @e[distance=..30,type=untagged_mobs:cleeper] add hex_target
execute as @e[tag=core] at @s run tag @e[distance=..30,type=alexscaves:gumbeeper] add hex_target
execute as @e[tag=core] at @s run tag @e[distance=..30,type=caverns_and_chasms:peeper] add hex_target
execute as @e[tag=core] at @s run tag @e[distance=..30,type=minecraft:enderman] add hex_target

execute as @e[tag=outer_core] at @s run tag @e[distance=..30,type=magma_cube] add hex_target
execute as @e[tag=outer_core] at @s run tag @e[distance=..30,type=untagged_mobs:vain] add hex_target
execute as @e[tag=outer_core] at @s run tag @e[distance=..30,type=clanginghowl:extraterrestrial_reaper] add hex_target
execute as @e[tag=outer_core] at @s run tag @e[distance=..30,type=alexscaves:gammaroach] add hex_target
execute as @e[tag=outer_core] at @s run tag @e[distance=..30,type=alexscaves:gingerbread_man] add hex_target
execute as @e[tag=outer_core] at @s run tag @e[distance=..30,type=minecraft:wither_skeleton] add hex_target
execute as @e[tag=outer_core] at @s run tag @e[distance=..30,type=windswept:frostbiter] add hex_target
execute as @e[tag=outer_core] at @s run tag @e[distance=..30,type=windswept:chilled] add hex_target
execute as @e[tag=outer_core] at @s run tag @e[distance=..30,type=untagged_mobs:cleeper] add hex_target
execute as @e[tag=outer_core] at @s run tag @e[distance=..30,type=alexscaves:gumbeeper] add hex_target
execute as @e[tag=outer_core] at @s run tag @e[distance=..30,type=caverns_and_chasms:peeper] add hex_target
execute as @e[tag=outer_core] at @s run tag @e[distance=..30,type=minecraft:enderman] add hex_target

execute as @e[tag=outer_core] at @s as @e[distance=..15,tag=hex_target] at @s if block ~ ~ ~ kubejs:hexahedron_filling run tp @s ~ ~-500 ~