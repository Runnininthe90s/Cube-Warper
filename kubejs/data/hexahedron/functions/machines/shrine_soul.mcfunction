summon marker ~ ~ ~ {Tags:["soul_spawn"]}
summon marker ~ ~ ~ {Tags:["soul_spawn"]}
summon marker ~ ~ ~ {Tags:["soul_spawn"]}

#say spawn

spreadplayers ~ ~ 10 10 false @e[tag=soul_spawn]

execute as @e[type=marker,tag=soul_spawn] at @s run particle create:soul ~ ~0.5 ~ 1 0 1 0 3 force
execute as @e[type=marker,tag=soul_spawn] at @s run particle create:soul ~ ~0.5 ~ 1 0 1 0 3 force
execute as @e[type=marker,tag=soul_spawn] at @s run summon minecraft:wither_skeleton ~ ~ ~ {Health:15.0F,Attributes:[{Name:"generic.max_health",Base:15.0d}],HandItems:[{id:"caverns_and_chasms:necromium_sword",Count:1b},{}],HandDropChances:[2.0F,0.0F],ArmorItems:[{id:"caverns_and_chasms:necromium_boots",Count:1b},{id:"caverns_and_chasms:necromium_leggings",Count:1b},{id:"caverns_and_chasms:necromium_chestplate",Count:1b},{id:"caverns_and_chasms:necromium_helmet",Count:1b}],ArmorDropChances:[2.0F,2.0F,2.0F,2.0F]}

#summon wither_skeleton ~ ~ ~ {HandItems:[
#    {id:"caverns_and_chasms:necromium_sword",Count:1b},{}],
#    HandDropChances:[0.500F,0.500F],
#    ArmorItems:[
#        {id:"caverns_and_chasms:necromium_boots",Count:1b},
#        {id:"caverns_and_chasms:necromium_leggings",Count:1b},
#        {id:"caverns_and_chasms:necromium_chestplate",Count:1b},
#        {id:"caverns_and_chasms:necromium_helmet",Count:1b}]}
#        ArmorDropChances:[0.500F,0.500F,0.500F,0.500F]
#}

particle dust_color_transition 0 0.8 1 5 0.161 0.11 0.067 ~ ~ ~ 0.5 0.5 0.5 0.1 10 force
particle soul ~ ~ ~ 0.5 0.5 0.5 0.1 10 force
playsound malum:a_soul_shatters master @a ~ ~ ~ 1 0
playsound malum:ritual_absorbs_spirit master @a ~ ~ ~ 1 0


kill @e[type=marker,tag=soul_spawn]