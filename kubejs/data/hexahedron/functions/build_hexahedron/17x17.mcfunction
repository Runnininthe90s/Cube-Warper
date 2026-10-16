# Controls
setblock ~ ~-2 ~8 kubejs:warping_controls
setblock ~1 ~-2 ~8 kubejs:warping_interface
setblock ~-1 ~-2 ~8 kubejs:warping_disc_drive
setblock ~ ~-2 ~7 kubejs:launch_button[facing=north]

# Vertical edges
fill ~8 ~-3 ~8 ~8 ~13 ~8 kubejs:warping_frame
fill ~8 ~-3 ~-8 ~8 ~13 ~-8 kubejs:warping_frame
fill ~-8 ~-3 ~8 ~-8 ~13 ~8 kubejs:warping_frame
fill ~-8 ~-3 ~-8 ~-8 ~13 ~-8 kubejs:warping_frame

# Top edges
fill ~-8 ~13 ~-8 ~8 ~13 ~-8 kubejs:warping_frame
fill ~-8 ~13 ~8 ~8 ~13 ~8 kubejs:warping_frame
fill ~-8 ~13 ~-8 ~-8 ~13 ~8 kubejs:warping_frame
fill ~8 ~13 ~-8 ~8 ~13 ~8 kubejs:warping_frame

# Bottom edges
fill ~-8 ~-3 ~-8 ~8 ~-3 ~-8 kubejs:warping_frame
fill ~-8 ~-3 ~8 ~8 ~-3 ~8 kubejs:warping_frame
fill ~-8 ~-3 ~-8 ~-8 ~-3 ~8 kubejs:warping_frame
fill ~8 ~-3 ~-8 ~8 ~-3 ~8 kubejs:warping_frame

# Floor
fill ~-7 ~-3 ~-7 ~7 ~-3 ~7 kubejs:warping_frame_platform

# Hole
fill ~-1 ~-3 ~-1 ~1 ~-3 ~1 air
execute as @e[type=minecraft:marker,tag=outer_core] at @s run fill ~1 ~-8 ~1 ~-1 ~-8 ~-1 kubejs:hexahedron_filling
fill ~-2 ~-3 ~-2 ~2 ~-3 ~-2 kubejs:warping_frame
fill ~-2 ~-3 ~2 ~2 ~-3 ~2 kubejs:warping_frame
fill ~-2 ~-3 ~-2 ~-2 ~-3 ~2 kubejs:warping_frame
fill ~2 ~-3 ~-2 ~2 ~-3 ~2 kubejs:warping_frame

# Vents
setblock ~8 ~1 ~8 kubejs:warping_vent
summon marker ~8 ~1 ~8 {Tags:["vent"]}

setblock ~-8 ~5 ~8 kubejs:warping_vent
summon marker ~-8 ~5 ~8 {Tags:["vent"]}

setblock ~8 ~9 ~-8 kubejs:warping_vent
summon marker ~8 ~9 ~-8 {Tags:["vent"]}

setblock ~-8 ~13 ~-3 kubejs:warping_vent
summon marker ~-8 ~13 ~-3 {Tags:["vent"]}

setblock ~3 ~13 ~8 kubejs:warping_vent
summon marker ~3 ~13 ~8 {Tags:["vent"]}

setblock ~-4 ~-3 ~-8 kubejs:warping_vent
summon marker ~-4 ~-3 ~-8 {Tags:["vent"]}

setblock ~8 ~-3 ~2 kubejs:warping_vent
summon marker ~8 ~-3 ~2 {Tags:["vent"]}

