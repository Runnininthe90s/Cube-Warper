execute as @e[type=marker,tag=clocking,scores={time=1}] at @s run playsound minecraft:entity.zombie_villager.converted master @a ~ ~ ~ 1 0
execute as @e[type=marker,tag=clocking] at @s run playsound supplementaries:block.clock.tick_1 master @a ~ ~ ~ 1 0
execute as @e[type=marker,tag=clocking] at @s run schedule function hexahedron:machines/shrine_time_sound 1s
execute as @e[type=marker,tag=clocking] at @s run particle minecraft:enchant ~ ~1 ~ 3 3 3 0 10 force

execute as @e[type=marker,tag=clocking,scores={time=3..}] at @s if block ~ ~ ~ kubejs:vector_operator_empty run summon item ~ ~ ~ {Motion:[0.1,0.4,0.05],Item:{id:"kubejs:vector_operator_basic",Count:1b}}
execute as @e[type=marker,tag=clocking,scores={time=3..}] at @s if block ~ ~ ~ kubejs:vector_operator_empty run particle dust_color_transition 1 1 1 5 0.78 0.78 0.78 ~ ~ ~ 0.5 0.5 0.5 0 10 force
execute as @e[type=marker,tag=clocking,scores={time=3..}] at @s if block ~ ~ ~ kubejs:vector_operator_empty run setblock ~ ~ ~ minecraft:air

execute as @e[type=marker,tag=clocking,scores={time=3..}] at @s if block ~ ~ ~ minecraft:iron_block run summon item ~ ~ ~ {Motion:[0.1,0.4,-0.05],Item:{id:"kubejs:block_shiny_ingot",Count:1b}}
execute as @e[type=marker,tag=clocking,scores={time=3..}] at @s if block ~ ~ ~ minecraft:iron_block run particle dust_color_transition 0 0.882 1 5 1 1 1 ~ ~ ~ 0.5 0.5 0.5 0 10 force
execute as @e[type=marker,tag=clocking,scores={time=3..}] at @s if block ~ ~ ~ minecraft:iron_block run setblock ~ ~ ~ minecraft:air

execute as @e[type=marker,tag=clocking,scores={time=3..}] at @s if block ~ ~ ~ minecraft:emerald_block run function hexahedron:effects/time_stone

execute as @e[type=marker,tag=clocking,scores={time=3..}] at @s if block ~ ~ ~ kubejs:vector_operator_step2 run summon item ~ ~ ~ {Motion:[-0.1,0.4,0.05],Item:{id:"kubejs:vector_operator_step3",Count:1b}}
execute as @e[type=marker,tag=clocking,scores={time=3..}] at @s if block ~ ~ ~ kubejs:vector_operator_step2 run particle dust_color_transition 0.702 0 0.792 5 0 0 0 ~ ~ ~ 0.5 0.5 0.5 0 10 force
execute as @e[type=marker,tag=clocking,scores={time=3..}] at @s if block ~ ~ ~ kubejs:vector_operator_step2 run setblock ~ ~ ~ minecraft:air

execute as @e[type=marker,tag=clocking,scores={time=3..}] at @s run playsound block.respawn_anchor.charge master @a ~ ~ ~ 1 0
execute as @e[type=marker,tag=clocking,scores={time=3..}] at @s run particle minecraft:flash ~ ~ ~ 0 0 0 0 1 force

execute as @e[type=marker,tag=shrine_time,scores={time=3..}] at @s run tag @s remove clocking
execute as @e[type=marker,tag=shrine_time,scores={time=3..}] at @s run scoreboard players set @s time 0