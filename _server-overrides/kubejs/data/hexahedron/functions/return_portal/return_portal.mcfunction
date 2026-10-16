#summon armor_stand ~ ~1 ~2 {NoGravity:1b,Invulnerable:1b,Marker:1b,Invisible:1b,Tags:["home_portal"]}
#execute as @e[type=armor_stand,tag=home_portal,sort=nearest,limit=1] at @s run portal cb_make_portal 1 2 @s @s home_portal
#execute as @e[type=immersive_portals:portal,name=home_portal] at @s run portal set_portal_destination minecraft:overworld 0.5 99 2.5
#execute as @e[type=immersive_portals:portal,name=home_portal] at @s run portal add_command_on_teleported function hexahedron:return_portal/portal_travel
#execute as @e[type=immersive_portals:portal,name=home_portal] at @s run fill ~ ~ ~ ~ ~-1 ~ light replace air
#kill @e[type=armor_stand,tag=home_portal]
#
#scoreboard players set @e[type=immersive_portals:portal,name=home_portal] time 7
#
#execute as @e[type=immersive_portals:portal,name=home_portal,sort=nearest,limit=1] at @s run playsound untagged_mobs:block.tv.transform master @a ~ ~ ~ 0.3 0
#execute as @e[type=immersive_portals:portal,name=home_portal,sort=nearest,limit=1] at @s run particle minecraft:dust_color_transition 0 0.431 1 3 0 0 0 ~ ~ ~ 0.5 1 0 0 10 force
#execute as @e[type=immersive_portals:portal,name=home_portal,sort=nearest,limit=1] at @s run playsound untagged_mobs:item.offsetter.loop master @a ~ ~ ~ 1 0
#
#schedule function hexahedron:return_portal/return_portal_cooldown 1s

execute as @a[limit=1,sort=nearest] in overworld run tp @s 0.5 99 2.5
function hexahedron:return_portal/portal_travel

execute unless entity @e[type=marker,tag=running] unless entity @e[type=marker,tag=pre_runtime] run schedule function hexahedron:fix_portals 3s