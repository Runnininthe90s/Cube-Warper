place template hexahedron:flesh_block ~-4 ~-4 ~-4
execute as @e[type=marker,tag=cube_marker,limit=1,sort=nearest] at @s run scoreboard players set @e[type=marker,tag=cube_marker,limit=1,sort=nearest] cube_time 100


particle minecraft:dust_color_transition 0.408 0.294 0.294 10 0.373 0 0 ~ ~ ~ 3 3 3 0.1 2000 force
playsound minecraft:entity.illusioner.prepare_blindness master @a ~ ~ ~ 1 0

execute as @e[type=marker,tag=cube_marker,limit=1,sort=nearest] at @s run function hexahedron:machines/cube_peek_loop


