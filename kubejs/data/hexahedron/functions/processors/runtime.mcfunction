### PRE RUNTIME TICKING
scoreboard players add @e[type=marker,tag=pre_runtime] pre_runtime 1

### SEED SELECTION (OLD)
#execute as @e[type=marker,tag=core,scores={pre_runtime=1}] run function hexahedron:processors/calculation_procedure

### TERMINATE VENTS AND LOWER THE ANCHOR
#execute as @e[type=marker,tag=core,scores={pre_runtime=200}] run execute as @e[type=minecraft:marker,tag=outer_core] at @s run particle flash ~ ~ ~ 0 0 0 0 1 force
execute as @e[type=marker,tag=core,scores={pre_runtime=1}] run execute as @e[type=minecraft:marker,tag=outer_core] at @s run kill @e[type=marker,tag=vent,distance=..20]
execute as @e[type=marker,tag=core,scores={pre_runtime=1}] run execute as @e[type=minecraft:marker,tag=outer_core] at @s run summon marker ~ ~ ~ {Tags:["anchor"]}
execute as @e[type=marker,tag=core,scores={pre_runtime=1}] run function hexahedron:processors/pre_warp_safety

### BUTTON PRESS
execute as @e[type=marker,tag=core,scores={pre_runtime=1}] run playsound block.bamboo_wood_button.click_on master @a ~ ~ ~ 0 1
execute as @e[type=marker,tag=core,scores={pre_runtime=1}] run playsound mekanism:tile.machine.antiprotonic_nucleosynthesizer master @a ~ ~ ~ 1 0
execute as @e[type=marker,tag=core,scores={pre_runtime=1}] at @s positioned ~ ~-4 ~4 run playsound mekanism:gui.digital_beep master @a ~ ~ ~ 1 0
execute as @e[type=marker,tag=core,scores={pre_runtime=1}] at @s positioned ~ ~-4 ~4 run playsound mekanism:gui.digital_beep master @a ~ ~ ~ 1 0

### PROCESSOR HIGHLIGHT
execute as @e[type=marker,tag=core,scores={pre_runtime=20}] run scoreboard players set @s dimension_seed 0
execute as @e[type=marker,tag=core,scores={pre_runtime=20}] at @s positioned ~1 ~-6 ~8 run function hexahedron:processors/runtime_effects
execute as @e[type=marker,tag=core,scores={pre_runtime=40}] at @s positioned ~ ~-6 ~8 run function hexahedron:processors/runtime_effects
execute as @e[type=marker,tag=core,scores={pre_runtime=60}] at @s positioned ~-1 ~-6 ~8 run function hexahedron:processors/runtime_effects

### EFFECT
execute as @e[type=marker,tag=core,scores={pre_runtime=1}] at @s run setblock ~ ~-7 ~7 kubejs:launch_button_pressed
execute as @e[type=marker,tag=core,scores={pre_runtime=215}] at @s run setblock ~ ~-7 ~7 kubejs:launch_button

execute as @e[type=marker,tag=core,scores={pre_runtime=1}] at @s run setblock ~1 ~-7 ~8 kubejs:warping_interface_running
execute as @e[type=marker,tag=core,scores={pre_runtime=215}] at @s run setblock ~1 ~-7 ~8 kubejs:warping_interface

execute as @e[type=marker,tag=core,scores={pre_runtime=60}] at @s run tag @a[distance=..50] add travel_actionbar

### TICKET SELECTION (runs at tick 85 > 78 ticks so Immersive Portals unloads overworld from outside clients first)
execute as @e[type=marker,tag=core,scores={pre_runtime=85}] run function hexahedron:processors/ticket_selection

### END
execute as @e[type=marker,tag=core,scores={pre_runtime=215}] at @s run tag @e[type=marker,tag=core] remove pre_runtime
execute as @e[type=marker,tag=core,scores={pre_runtime=215}] at @s run tag @a remove travel_actionbar
execute as @e[type=marker,tag=core,scores={pre_runtime=215}] at @s run scoreboard players set @a travel_actionbar 0
execute as @e[type=marker,tag=core,scores={pre_runtime=215}] at @s run scoreboard players set @e[type=marker,tag=core] dimension_seed 0
execute as @e[type=marker,tag=core,scores={pre_runtime=215}] at @s run scoreboard players set @e[type=marker,tag=core] pre_runtime 0