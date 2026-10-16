### CORE
execute as @e[tag=outer_core] at @s unless entity @e[type=marker,tag=hex_anchor,distance=..1000] run spreadplayers ~ ~ 100 100 under 51 false @e[tag=outer_core]
execute as @e[tag=outer_core] at @s unless entity @e[type=marker,tag=hex_anchor,distance=..1000] run tp @s ~ ~8.5 ~

### ANCHOR
execute as @e[tag=outer_core] at @s run tp @e[tag=outer_core] @e[type=marker,tag=hex_anchor,distance=..1000,limit=1]
execute as @e[tag=outer_core] at @s unless entity @e[type=marker,tag=hex_anchor,distance=..1000] run summon marker ~ ~ ~ {Tags:["hex_anchor"]}

### UNFOLD
function hexahedron:repositioning/unfold

### LOOP
#execute if score @e[tag=outer_core,limit=1] unfold matches 0 run function hexahedron:repositioning/standard_floor
