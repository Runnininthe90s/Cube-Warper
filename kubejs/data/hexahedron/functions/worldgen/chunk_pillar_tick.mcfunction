
execute as @e[type=marker,tag=chunk_pillar] at @s run fill ~ ~ ~ ~15 ~-15 ~15 kubejs:ancient_bricks
execute as @e[type=marker,tag=chunk_pillar] at @s run tp @s ~ ~-15 ~

kill @e[type=marker,tag=chunk_pillar,y=0,dy=-50]