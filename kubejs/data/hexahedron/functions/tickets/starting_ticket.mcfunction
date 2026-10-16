### TEMINATE CURRENT POSITION
execute as @e[tag=outer_core] at @s run fill ~-8 ~-8 ~-8 ~8 ~8 ~8 air
execute as @e[type=marker,tag=core] run kill @e[type=marker,tag=outer_core]

### INITIATE CONNECTION
execute as @e[type=marker,tag=core] run execute as @e[type=immersive_portals:portal,name=main_cube] at @s run portal nbt {isVisible:false}
execute as @e[type=marker,tag=core] run execute as @e[type=immersive_portals:portal,name=main_cube] at @s run portal set_portal_destination hexahedron:bedrock_bottom ~ ~ ~
execute as @e[type=marker,tag=core] run execute at @e[type=minecraft:marker,tag=core] at @s in hexahedron:bedrock_bottom run summon marker ~ ~ ~ {NoGravity:1b,Tags:["outer_core"]}

### START TELEPORTATION
execute as @e[type=marker,tag=core] run tag @e[type=minecraft:marker,tag=core] add running
schedule function hexahedron:first_init/release_first_player 10s