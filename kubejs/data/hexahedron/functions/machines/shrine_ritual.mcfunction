playsound malum:ritual_forms master @a ~ ~ ~ 30 1
playsound malum:ritual_begins master @a ~ ~ ~ 30 0
playsound malum:ritual_evolution_ambience master @a ~ ~ ~ 0.5 1.5

particle alexscaves:void_being_eye ~ ~2 ~ 0 0 0 0 1 force

tag @e[type=marker,tag=ritual_marker,distance=..5,limit=1,sort=nearest] add active_ritual
function hexahedron:machines/shrine_ritual_sequence