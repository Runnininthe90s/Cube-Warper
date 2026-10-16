function hexahedron:effects/hex_targets

execute as @e[tag=core] at @s if entity @e[tag=hex_target,distance=..30,limit=1,sort=nearest] run summon marker ~ ~ ~ {Tags:["hex_beam"]}
#execute as @e[tag=outer_core] at @s if entity @e[tag=hex_target,distance=..30,limit=1,sort=nearest] run summon marker ~ ~ ~ {Tags:["hex_beam"]}
#execute as @e[tag=outer_core] at @s if entity @e[tag=hex_target,distance=..30,limit=1,sort=nearest] at @e[tag=core] run summon marker ~ ~ ~ {Tags:["hex_beam"]}
execute as @e[tag=hex_beam] at @s run tp @s ~ ~ ~ facing entity @e[tag=hex_target,limit=1,sort=nearest] eyes

execute as @e[tag=core] at @s at @e[tag=hex_target,distance=..30,limit=1,sort=nearest] run function hexahedron:effects/hex_beam
#execute as @e[tag=outer_core] at @s at @e[tag=hex_target,distance=..30,limit=1,sort=nearest] run function hexahedron:effects/hex_beam