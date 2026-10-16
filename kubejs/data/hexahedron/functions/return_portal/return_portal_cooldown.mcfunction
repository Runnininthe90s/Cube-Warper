scoreboard players remove @e[type=immersive_portals:portal,name=home_portal] time 1

execute as @e[type=immersive_portals:portal,name=home_portal] at @s run playsound untagged_mobs:item.offsetter.loop master @a ~ ~ ~ 1 0
execute as @e[type=immersive_portals:portal,name=home_portal] at @s run particle minecraft:dust_color_transition 0 0.431 1 3 0 0 0 ~ ~ ~ 0.5 1 0 0 10 force
execute as @e[type=immersive_portals:portal,name=home_portal] at @s run particle supplementaries:rotation_trail_emitter ~ ~ ~ 0.5 1 0 0 25 force

execute as @e[type=immersive_portals:portal,name=home_portal,limit=1,sort=nearest] at @s if score @s time matches ..0 run particle minecraft:flash ~ ~ ~ 0 0 0 1 1 force
execute as @e[type=immersive_portals:portal,name=home_portal,limit=1,sort=nearest] at @s if score @s time matches ..0 run playsound untagged_mobs:block.dimensional_lock.open master @a ~ ~ ~ 0.3 2
execute as @e[type=immersive_portals:portal,name=home_portal,limit=1,sort=nearest] at @s if score @s time matches ..0 run playsound block.respawn_anchor.deplete master @a ~ ~ ~ 1 0
execute as @e[type=immersive_portals:portal,name=home_portal,limit=1,sort=nearest] at @s if score @s time matches ..0 run fill ~ ~ ~ ~ ~-1 ~ air replace light

kill @e[type=immersive_portals:portal,name=home_portal,scores={time=..0}]

execute if score @e[type=immersive_portals:portal,name=home_portal,limit=1,sort=nearest] time matches 0.. run schedule function hexahedron:return_portal/return_portal_cooldown 1s

