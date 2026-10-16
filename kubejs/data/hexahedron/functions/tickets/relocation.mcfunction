#### ANCHOR
#execute as @e[tag=outer_core] at @s if entity @e[type=marker,tag=anchor,distance=..250] run tp @s @e[type=marker,tag=anchor,distance=..250,limit=1,sort=nearest]
#
#
#### CORE
#execute as @e[tag=outer_core] at @s unless entity @e[type=marker,tag=anchor,distance=..250] run spreadplayers ~ ~ 100 100 false @e[tag=outer_core]
#execute as @e[tag=outer_core] at @s unless entity @e[type=marker,tag=anchor,distance=..250] run tp @s ~ ~3.5 ~

#### ANCHOR
#execute as @e[tag=outer_core] at @s if entity @e[type=marker,tag=anchor,distance=..250] run tp @s @e[type=marker,tag=anchor,distance=..250,limit=1,sort=nearest]
#execute as @e[tag=outer_core] at @s unless entity @e[type=marker,tag=anchor,distance=..250] run tp @s ~ ~3.5 ~


#### UNFOLD
#execute as @e[tag=outer_core] at @s run summon marker ~ ~3.45 ~ {Rotation:[0.0f,-90.0f],NoGravity:1b,Tags:["portal","y_outer"]}
#execute as @e[tag=outer_core] at @s run summon marker ~ ~-3.45 ~ {Rotation:[0.0f,90.0f],NoGravity:1b,Tags:["portal","-y_outer"]}
#
#execute as @e[tag=outer_core] at @s run summon marker ~3.45 ~ ~ {Rotation:[270.0f,0.0f],NoGravity:1b,Tags:["portal","x_outer"]}
#execute as @e[tag=outer_core] at @s run summon marker ~-3.45 ~ ~ {Rotation:[90.0f,0.0f],NoGravity:1b,Tags:["portal","-x_outer"]}
#
#execute as @e[tag=outer_core] at @s run summon marker ~ ~ ~3.45 {Rotation:[0.0f,0.0f],NoGravity:1b,Tags:["portal","z_outer"]}
#execute as @e[tag=outer_core] at @s run summon marker ~ ~ ~-3.45 {Rotation:[180.0f,0.0f],NoGravity:1b,Tags:["portal","-z_outer"]}
#
#
#### MOVE
#execute as @e[type=immersive_portals:portal,tag=y,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=y_outer,limit=1]
#execute as @e[type=immersive_portals:portal,tag=-y,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=-y_outer,limit=1]
#
#execute as @e[type=immersive_portals:portal,tag=x,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=x_outer,limit=1]
#execute as @e[type=immersive_portals:portal,tag=-x,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=-x_outer,limit=1]
#
#execute as @e[type=immersive_portals:portal,tag=z,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=z_outer,limit=1]
#execute as @e[type=immersive_portals:portal,tag=-z,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=-z_outer,limit=1]


### FINAL
#execute as @e[type=minecraft:marker,tag=outer_core] at @s run fill ~8 ~8 ~8 ~-8 ~-8 ~-8 kubejs:hexahedron_filling
#execute as @e[type=minecraft:marker,tag=outer_core] at @s run fill ~6 ~6 ~6 ~-6 ~-6 ~-6 light
#execute as @e[type=minecraft:marker,tag=outer_core] at @s positioned ~ ~-5 ~ run function hexahedron:build_hexahedron/17x17
#
#execute as @e[type=immersive_portals:portal,name=main_cube] at @s run portal nbt {isVisible:true}
#execute as @e[type=immersive_portals:portal,name=!main_cube] at @s run portal nbt {isVisible:true}
function hexahedron:tickets/cleanup