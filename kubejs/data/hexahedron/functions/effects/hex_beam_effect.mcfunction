execute as @e[tag=hex_beam] at @s run particle minecraft:dust_color_transition 0 0.765 1 3 0 0.071 0.459 ~ ~ ~ 0 0 0 0 3 force

execute as @e[tag=hex_beam] at @s run tp @s ^ ^ ^0.5

execute as @e[type=marker,tag=core] at @s run kill @e[type=marker,tag=hex_beam,distance=30..]
execute as @e[type=marker,tag=outer_core] at @s run kill @e[type=marker,tag=hex_beam,distance=30..]
execute as @e[tag=hex_beam] at @s if entity @e[tag=hex_target,limit=1,sort=nearest,distance=..2] run kill @e[type=marker,tag=hex_beam,limit=1,sort=nearest]

execute as @e[tag=hex_beam] at @s unless entity @e[tag=hex_target,limit=1,sort=nearest,distance=..2] run function hexahedron:effects/hex_beam_effect


#/tag @e[type=minecraft:husk] add hex_target