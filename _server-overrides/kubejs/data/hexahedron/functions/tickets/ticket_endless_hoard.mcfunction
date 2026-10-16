### TEMINATE CURRENT POSITION
execute as @e[tag=outer_core] at @s run fill ~-8 ~-8 ~-8 ~8 ~8 ~8 air
kill @e[type=marker,tag=outer_core]

### INITIATE CONNECTION
execute as @e[type=immersive_portals:portal,name=main_cube] at @s run portal nbt {isVisible:false,bindCluster:false}
execute as @e[type=immersive_portals:portal,name=main_cube] at @s run portal set_portal_destination hexahedron:endless_hoard ~ ~ ~
execute at @e[type=minecraft:marker,tag=core] at @s in hexahedron:endless_hoard run summon marker ~ ~ ~ {NoGravity:1b,Tags:["outer_core"]}

### QUE REPOSITIONING
schedule function hexahedron:repositioning/standard_floor 5s

### START TELEPORTATION
tag @e[type=minecraft:marker,tag=core] add running

### KEEP YOUR FRIENDS INSIDE THE VEHICLE AT ALL TIMES
execute if score warp_pull_players hex_settings matches 1 in minecraft:overworld as @e[type=marker,tag=core] at @s run tag @a[distance=..50] add inside_cube
execute if score warp_pull_players hex_settings matches 1 in minecraft:overworld as @e[type=marker,tag=core] at @s if entity @a[tag=!inside_cube,tag=init] run tp @a[tag=!inside_cube,tag=init] ~ ~-7 ~4
tag @a remove inside_cube