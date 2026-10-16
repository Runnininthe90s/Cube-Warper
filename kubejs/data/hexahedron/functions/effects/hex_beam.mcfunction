execute as @e[type=marker,tag=hex_beam] at @s run function hexahedron:effects/hex_beam_effect

execute as @e[type=marker,tag=outer_core] at @s run playsound malum:staff_powers_up master @a ~ ~ ~ 1 2
execute as @e[type=marker,tag=outer_core] at @s run playsound malum:flesh_ring_absorbs master @a ~ ~ ~ 1 0

execute as @e[type=marker,tag=core] at @s run playsound malum:staff_powers_up master @a ~ ~ ~ 1 2
execute as @e[type=marker,tag=core] at @s run playsound malum:flesh_ring_absorbs master @a ~ ~ ~ 1 0
execute as @e[type=marker,tag=core] at @s run particle flash ~ ~ ~ 0 0 0 1 0 force
execute as @e[type=marker,tag=core] at @s run particle minecraft:sonic_boom ~ ~ ~ 0 0 0 0 1 force


particle minecraft:dust_color_transition 0 0.765 1 5 0 0.071 0.459 ~ ~ ~ 0.3 1 0.3 0 20 force
summon firework_rocket ~ ~ ~ {Motion:[0.0,0.0,0.0],FireworksItem:{id:"firework_rocket",Count:1,tag:{Fireworks:{Explosions:[{Type:4,Colors:[I;61183],FadeColors:[I;33023]}]}}}}
kill @e[tag=hex_target,limit=1,sort=nearest]