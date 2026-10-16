effect give @a resistance 10 200 true
execute as @e[type=marker,tag=outer_core,limit=1] at @s run tp @a ~ ~-1 ~-25 facing ~ ~ ~90
effect clear @a blindness

execute in hexahedron:bedrock_bottom positioned 0 100 0 run playsound ambientsounds:suspense.end master @a ~ ~ ~ 200 1