summon marker ~ ~ ~ {Tags:["missing"]}
summon marker ~ ~ ~ {Tags:["missing"]}
summon marker ~ ~ ~ {Tags:["missing"]}

spreadplayers ~ ~ 5 5 false @e[type=marker,tag=missing]
execute as @e[type=marker,tag=missing] at @s if block ~ ~-1 ~ #tconstruct:mineable/pickadze run setblock ~ ~-1 ~ untagged_mobs:missing_block
execute as @e[type=marker,tag=missing] at @s run particle untagged_mobs:missing_cube ~ ~ ~ 2 2 2 0 100 force
execute as @e[type=marker,tag=missing] at @s run particle dust_color_transition 1 0 0.831 5 0 0 0 ~ ~ ~ 1 1 1 0 20
execute as @e[type=marker,tag=missing] at @s run playsound untagged_mobs:block.tv.noise master @a ~ ~ ~ 0.5 1
playsound untagged_mobs:entity.redactor.idle master @a ~ ~ ~ 1 0


kill @e[type=marker,tag=missing]