# Controls
setblock ~ ~-3 ~3 kubejs:warping_controls
setblock ~1 ~-3 ~3 kubejs:warping_interface
setblock ~-1 ~-3 ~3 kubejs:warping_disc_drive

# Vertical edges
fill ~3 ~-3 ~3 ~3 ~3 ~3 kubejs:warping_frame
fill ~3 ~-3 ~-3 ~3 ~3 ~-3 kubejs:warping_frame
fill ~-3 ~-3 ~3 ~-3 ~3 ~3 kubejs:warping_frame
fill ~-3 ~-3 ~-3 ~-3 ~3 ~-3 kubejs:warping_frame

# Top edges 
fill ~-3 ~3 ~-3 ~3 ~3 ~-3 kubejs:warping_frame
fill ~-3 ~3 ~3 ~3 ~3 ~3 kubejs:warping_frame
fill ~-3 ~3 ~-3 ~-3 ~3 ~3 kubejs:warping_frame
fill ~3 ~3 ~-3 ~3 ~3 ~3 kubejs:warping_frame

# Bottom edges
fill ~-3 ~-3 ~-3 ~3 ~-3 ~-3 kubejs:warping_frame
fill ~-3 ~-3 ~3 ~3 ~-3 ~3 kubejs:warping_frame
fill ~-3 ~-3 ~-3 ~-3 ~-3 ~3 kubejs:warping_frame
fill ~3 ~-3 ~-3 ~3 ~-3 ~3 kubejs:warping_frame

# Floor
fill ~-2 ~-3 ~-2 ~2 ~-3 ~2 kubejs:stacked_warping_frame_slab

# Controls
setblock ~ ~-2 ~3 kubejs:warping_controls
setblock ~1 ~-2 ~3 kubejs:warping_interface
setblock ~-1 ~-2 ~3 kubejs:warping_disc_drive

# Vents
setblock ~1 ~-3 ~-3 kubejs:warping_vent
summon marker ~1 ~-3 ~-3 {Tags:["vent"]}

setblock ~3 ~1 ~3 kubejs:warping_vent
summon marker ~3 ~1 ~3 {Tags:["vent"]}

setblock ~-3 ~3 ~-1 kubejs:warping_vent
summon marker ~-3 ~3 ~-1 {Tags:["vent"]}