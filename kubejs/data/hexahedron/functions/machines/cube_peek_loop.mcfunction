execute if entity @e[type=marker,tag=cube_marker,limit=1,sort=nearest,scores={time=..0}] run fill ~4 ~4 ~4 ~-4 ~-4 ~-4 kubejs:ancient_runes


execute if entity @e[type=marker,tag=cube_marker,limit=1,sort=nearest,scores={time=0..101}] run scoreboard players remove @e[type=marker,tag=cube_marker,limit=1,sort=nearest] cube_time 1
execute if entity @e[type=marker,tag=cube_marker,limit=1,sort=nearest,scores={time=0..101}] run function hexahedron:machines/cube_peek_loop

execute if entity @e[type=marker,tag=cube_marker,limit=1,sort=nearest,scores={time=..0}] run scoreboard players remove @e[type=marker,tag=cube_marker,limit=1,sort=nearest] cube_time 0


#version 10.1