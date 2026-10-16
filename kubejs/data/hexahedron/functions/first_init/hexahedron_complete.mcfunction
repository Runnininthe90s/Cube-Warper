### POSITION OUTER CORE
execute in hexahedron:bedrock_bottom positioned 0 105.5 0 run summon marker ~ ~ ~ {Rotation:[0.0f,-90.0f],NoGravity:1b,Tags:["portal","outer_core"]}

### UNFOLD
execute as @e[tag=outer_core] at @s run summon marker ~ ~8.45 ~ {Rotation:[0.0f,-90.0f],NoGravity:1b,Tags:["portal","y_outer"]}
execute as @e[tag=outer_core] at @s run summon marker ~ ~-8.45 ~ {Rotation:[0.0f,90.0f],NoGravity:1b,Tags:["portal","-y_outer"]}

execute as @e[tag=outer_core] at @s run summon marker ~8.45 ~ ~ {Rotation:[270.0f,0.0f],NoGravity:1b,Tags:["portal","x_outer"]}
execute as @e[tag=outer_core] at @s run summon marker ~-8.45 ~ ~ {Rotation:[90.0f,0.0f],NoGravity:1b,Tags:["portal","-x_outer"]}

execute as @e[tag=outer_core] at @s run summon marker ~ ~ ~8.45 {Rotation:[0.0f,0.0f],NoGravity:1b,Tags:["portal","z_outer"]}
execute as @e[tag=outer_core] at @s run summon marker ~ ~ ~-8.45 {Rotation:[180.0f,0.0f],NoGravity:1b,Tags:["portal","-z_outer"]}


### MOVE
schedule function hexahedron:first_init/hexahedron_move_portals 1t

### END
scoreboard players set hexahedron_portals hexahedron_portals 1
