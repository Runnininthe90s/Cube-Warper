### PROCESSOR DETECTION
execute if block ~ ~ ~ #kubejs:vector run playsound block.end_portal_frame.fill master @a ~ ~ ~ 1 1
execute unless block ~ ~ ~ #kubejs:vector run playsound minecraft:entity.evoker.cast_spell master @a ~ ~ ~ 1 2
execute unless block ~ ~ ~ #kubejs:vector run playsound minecraft:block.beacon.deactivate master @a ~ ~ ~ 1 2
function hexahedron:processors/processor_calculation

### EFFECT
execute unless block ~ ~ ~ #kubejs:vector run particle alexscaves:small_colored_dust ~ ~ ~ 0.2 0.2 0.2 10 10 force

execute if block ~ ~ ~ kubejs:vector_operator_basic run particle dust_color_transition 1 1 1 3 0.514 0.514 0.514 ~ ~ ~ 0.2 0.2 0.2 0.1 10 force
execute if block ~ ~ ~ kubejs:vector_operator_charged run particle dust_color_transition 1 0.816 0 3 0.455 0.373 0.008 ~ ~ ~ 0.2 0.2 0.2 0.1 10 force
execute if block ~ ~ ~ kubejs:vector_operator_fluix run particle dust_color_transition 0.635 0 1 3 0.31 0 0.373 ~ ~ ~ 0.2 0.2 0.2 0.1 10 force
execute if block ~ ~ ~ kubejs:vector_operator_nuclear run particle dust_color_transition 0.318 1 0 3 0.075 0.373 0 ~ ~ ~ 0.2 0.2 0.2 0.1 10 force
execute if block ~ ~ ~ kubejs:vector_operator_blaze run particle dust_color_transition 1 0.451 0 3 0.706 0.224 0 ~ ~ ~ 0.2 0.2 0.2 0.1 10 force
execute if block ~ ~ ~ kubejs:vector_operator_lightning run particle dust_color_transition 0 0.969 1 3 0 0.373 0.62 ~ ~ ~ 0.2 0.2 0.2 0.1 10 force
execute if block ~ ~ ~ kubejs:vector_operator_eye run particle dust_color_transition 1 0 0 3 0.373 0 0 ~ ~ ~ 0.2 0.2 0.2 0.1 10 force

### CONSUME
execute if block ~ ~ ~ #kubejs:vector run setblock ~ ~ ~ kubejs:vector_operator_empty

