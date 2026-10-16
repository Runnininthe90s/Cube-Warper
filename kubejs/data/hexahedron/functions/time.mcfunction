scoreboard players add @e[type=marker,tag=tick_tock] time 1
execute as @e[type=marker,tag=tick_tock,scores={time=1}] at @s run playsound supplementaries:block.clock.tick_1 master @a ~ ~1 ~ 1 2
execute as @e[type=marker,tag=tick_tock,scores={time=11}] at @s run playsound supplementaries:block.clock.tick_2 master @a ~ ~1 ~ 1 2
execute as @e[type=marker,tag=tick_tock,scores={time=21}] at @s run playsound supplementaries:block.clock.tick_1 master @a ~ ~1 ~ 1 2
execute as @e[type=marker,tag=tick_tock,scores={time=31}] at @s run playsound supplementaries:block.clock.tick_2 master @a ~ ~1 ~ 1 2
execute as @e[type=marker,tag=tick_tock,scores={time=41}] at @s run playsound supplementaries:block.clock.tick_1 master @a ~ ~1 ~ 1 2
execute as @e[type=marker,tag=tick_tock,scores={time=51}] at @s run playsound supplementaries:block.clock.tick_2 master @a ~ ~1 ~ 1 2
execute as @e[type=marker,tag=tick_tock,scores={time=61}] at @s run playsound supplementaries:block.clock.tick_1 master @a ~ ~1 ~ 1 2
kill @e[type=marker,tag=tick_tock,scores={time=61}]