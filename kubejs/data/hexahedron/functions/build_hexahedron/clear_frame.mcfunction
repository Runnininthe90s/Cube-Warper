scoreboard players add @e[type=marker,tag=clear_frame] time 1

execute as @e[type=marker,tag=clear_frame] at @s run fill ~30 ~ ~30 ~-30 ~ ~-30 air replace #minecraft:hexahedron_frame
execute as @e[type=marker,tag=clear_frame] at @s run tp @s ~ ~-1 ~

execute if entity @e[type=marker,tag=clear_frame,scores={time=60..}] as @e[type=marker,tag=core] at @s run function hexahedron:build_hexahedron/17x17
kill @e[type=marker,tag=clear_frame,scores={time=60..}]