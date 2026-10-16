
playsound malum:ritual_absorbs_item master @a ~ ~ ~ 10 1
particle dust_color_transition 1 0 0 5 0 0 0 ~ ~ ~ 0.5 0.5 0.5 0 20 force
particle alexscaves:void_being_eye ~ ~1 ~ 0 0 0 0 1 force

scoreboard objectives add computer dummy
scoreboard objectives add super_computer dummy
scoreboard objectives add forsaken_idol dummy
scoreboard objectives add eye dummy
scoreboard objectives add soul dummy
scoreboard objectives add flesh dummy
scoreboard objectives add null dummy
scoreboard objectives add salt dummy
scoreboard objectives add nothing dummy
scoreboard objectives add modular_reactor dummy
scoreboard objectives add vector dummy


execute if block ~ ~ ~ kubejs:computer run scoreboard players add @e[type=marker,tag=active_ritual,limit=1,sort=nearest] computer 1
execute if block ~ ~ ~ kubejs:supercomputer run scoreboard players add @e[type=marker,tag=active_ritual,limit=1,sort=nearest] super_computer 1
execute if block ~ ~ ~ alexscaves:forsaken_idol run scoreboard players add @e[type=marker,tag=active_ritual,limit=1,sort=nearest] forsaken_idol 1
execute if block ~ ~ ~ kubejs:crimson_eye run scoreboard players add @e[type=marker,tag=active_ritual,limit=1,sort=nearest] eye 1
execute if block ~ ~ ~ darkerdepths:void_soul_jar run scoreboard players add @e[type=marker,tag=active_ritual,limit=1,sort=nearest] soul 1
execute if block ~ ~ ~ malum:block_of_living_flesh run scoreboard players add @e[type=marker,tag=active_ritual,limit=1,sort=nearest] flesh 1
execute if block ~ ~ ~ untagged_mobs:nullpoint_tiles run scoreboard players add @e[type=marker,tag=active_ritual,limit=1,sort=nearest] null 1
execute if block ~ ~ ~ malum:block_of_void_salts run scoreboard players add @e[type=marker,tag=active_ritual,limit=1,sort=nearest] salt 1
execute if block ~ ~ ~ untagged_mobs:nothing run scoreboard players add @e[type=marker,tag=active_ritual,limit=1,sort=nearest] nothing 1
execute if block ~ ~ ~ kubejs:modular_reactor run scoreboard players add @e[type=marker,tag=active_ritual,limit=1,sort=nearest] modular_reactor 1
execute if block ~ ~ ~ kubejs:vector_operator_lightning run scoreboard players add @e[type=marker,tag=active_ritual,limit=1,sort=nearest] vector 1

setblock ~ ~ ~ air