### UNFOLD
execute as @e[tag=outer_core] at @s run summon marker ~ ~8.45 ~ {Rotation:[0.0f,-90.0f],NoGravity:1b,Tags:["portal","y_outer"]}
execute as @e[tag=outer_core] at @s run summon marker ~ ~-8.45 ~ {Rotation:[0.0f,90.0f],NoGravity:1b,Tags:["portal","-y_outer"]}

execute as @e[tag=outer_core] at @s run summon marker ~8.45 ~ ~ {Rotation:[270.0f,0.0f],NoGravity:1b,Tags:["portal","x_outer"]}
execute as @e[tag=outer_core] at @s run summon marker ~-8.45 ~ ~ {Rotation:[90.0f,0.0f],NoGravity:1b,Tags:["portal","-x_outer"]}

execute as @e[tag=outer_core] at @s run summon marker ~ ~ ~8.45 {Rotation:[0.0f,0.0f],NoGravity:1b,Tags:["portal","z_outer"]}
execute as @e[tag=outer_core] at @s run summon marker ~ ~ ~-8.45 {Rotation:[180.0f,0.0f],NoGravity:1b,Tags:["portal","-z_outer"]}


### MOVE
execute as @e[type=immersive_portals:portal,tag=y,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=y_outer,limit=1]
execute as @e[type=immersive_portals:portal,tag=-y,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=-y_outer,limit=1]

execute as @e[type=immersive_portals:portal,tag=x,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=x_outer,limit=1]
execute as @e[type=immersive_portals:portal,tag=-x,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=-x_outer,limit=1]

execute as @e[type=immersive_portals:portal,tag=z,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=z_outer,limit=1]
execute as @e[type=immersive_portals:portal,tag=-z,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=-z_outer,limit=1]


### COMPLETE
execute as @e[type=immersive_portals:portal,name=main_cube] at @s run portal nbt {bindCluster:true,isVisible:true}
execute as @e[type=immersive_portals:portal,tag=y,limit=1] at @s run portal complete_bi_way_portal
execute as @e[type=immersive_portals:portal,tag=-y,limit=1] at @s run portal complete_bi_way_portal

execute as @e[type=immersive_portals:portal,tag=x,limit=1] at @s run portal complete_bi_way_portal
execute as @e[type=immersive_portals:portal,tag=-x,limit=1] at @s run portal complete_bi_way_portal

execute as @e[type=immersive_portals:portal,tag=z,limit=1] at @s run portal complete_bi_way_portal
execute as @e[type=immersive_portals:portal,tag=-z,limit=1] at @s run portal complete_bi_way_portal
execute as @e[type=immersive_portals:portal,name=!main_cube] at @s run portal nbt {isVisible:true}


### BUILD HEXAHEDRON
execute as @e[type=minecraft:marker,tag=outer_core] at @s run fill ~8 ~8 ~8 ~-8 ~-8 ~-8 kubejs:hexahedron_filling
execute as @e[type=minecraft:marker,tag=outer_core] at @s run fill ~6 ~6 ~6 ~-6 ~-6 ~-6 light
execute as @e[type=minecraft:marker,tag=outer_core] at @s positioned ~ ~-5 ~ run function hexahedron:build_hexahedron/17x17

function hexahedron:tickets/cleanup