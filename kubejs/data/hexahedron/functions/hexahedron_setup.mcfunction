# Hex Filling
execute positioned 0 105.5 0 in overworld run fill ~-8 ~-8 ~-8 ~8 ~8 ~8 air
#execute positioned 0 105.5 0 in overworld run fill ~-6 ~-6 ~-6 ~6 ~6 ~6 light
execute positioned 0 100.5 0 in overworld run function hexahedron:build_hexahedron/17x17

execute positioned 0 105.5 0 in overworld run summon marker ~ ~ ~ {Rotation:[0.0f,-90.0f],NoGravity:1b,Tags:["core"]}

execute positioned 0 105.5 0 in overworld run summon marker ~ ~8.51 ~ {Rotation:[0.0f,-90.0f],NoGravity:1b,Tags:["portal","y"]}
execute positioned 0 105.5 0 in overworld run summon marker ~ ~-8.51 ~ {Rotation:[0.0f,90.0f],NoGravity:1b,Tags:["portal","-y"]}

execute positioned 0 105.5 0 in overworld run summon marker ~8.51 ~ ~ {Rotation:[270.0f,0.0f],NoGravity:1b,Tags:["portal","x"]}
execute positioned 0 105.5 0 in overworld run summon marker ~-8.51 ~ ~ {Rotation:[90.0f,0.0f],NoGravity:1b,Tags:["portal","-x"]}

execute positioned 0 105.5 0 in overworld run summon marker ~ ~ ~8.51 {Rotation:[0.0f,0.0f],NoGravity:1b,Tags:["portal","z"]}
execute positioned 0 105.5 0 in overworld run summon marker ~ ~ ~-8.51 {Rotation:[180.0f,0.0f],NoGravity:1b,Tags:["portal","-z"]}


execute as @e[type=minecraft:marker,tag=portal] at @s run portal cb_make_portal 17 17 @s @s main_cube
execute as @e[type=immersive_portals:portal,name=main_cube] at @s run portal set_portal_destination hexahedron:bedrock_bottom ~ ~ ~
function hexahedron:build_hexahedron/tag_portals
execute as @e[type=immersive_portals:portal,name=main_cube] at @s run portal complete_bi_way_portal

# Return
scoreboard players set hexahedron_start hexahedron_start 1
