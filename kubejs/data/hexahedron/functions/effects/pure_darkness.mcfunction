scoreboard players add @e[type=marker,tag=darkness_return] time 1

execute as @e[type=marker,tag=darkness_return] at @s run setblock ~ ~ ~ air

execute as @e[type=marker,tag=darkness_return] at @s run playsound block.end_portal_frame.fill master @a ~ ~ ~ 10 0
execute as @e[type=marker,tag=darkness_return] at @s run playsound malum:a_soul_shatters master @a ~ ~ ~ 10 1
execute as @e[type=marker,tag=darkness_return] at @s run particle dust_color_transition 1 0 0 5 0 0 0 ~ ~ ~ 0.3 0.3 0.3 0 5 force

execute as @e[type=marker,tag=darkness_return,scores={time=1}] at @s run summon item ~ ~ ~ {Motion:[0.1,0.3,0.1],Item:{id:"alexscaves:pure_darkness",Count:1b}}
execute as @e[type=marker,tag=darkness_return,scores={time=2}] at @s run summon item ~ ~ ~ {Motion:[0.1,0.3,-0.1],Item:{id:"alexscaves:pure_darkness",Count:1b}}
execute as @e[type=marker,tag=darkness_return,scores={time=3}] at @s run summon item ~ ~ ~ {Motion:[0.0,0.3,0.1],Item:{id:"alexscaves:pure_darkness",Count:1b}}

execute as @e[type=marker,tag=darkness_return,scores={time=3}] at @s run kill @e[type=marker,tag=darkness_return,scores={time=3..},limit=1,sort=nearest]


execute as @e[type=marker,tag=darkness_return,scores={time=..3}] at @s run schedule function hexahedron:effects/pure_darkness 1s