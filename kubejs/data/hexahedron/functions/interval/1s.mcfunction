schedule function hexahedron:interval/1s 1s

function hexahedron:interval/cooldown_seconds
function hexahedron:machines/shrine_time_ticking
execute in hexahedron:brimstone_veil as @e[type=marker,tag=geyser_marker] at @s if entity @e[type=tnt,distance=..2] run function hexahedron:effects/geysers
function hexahedron:effects/hex_beam_1s
execute as @e[type=marker,tag=outer_core] at @s run tp @e[distance=..10,tag=hex_target] ~ ~-100 ~
function hexahedron:processors/portal_visibility
execute in hexahedron:dusk_islands as @a[nbt={Dimension:"hexahedron:dusk_islands"}] at @s run function hexahedron:effects/storm_sounds

# Multiplayer safety: teleport brand-new late-joiners or players who logged out during the intro into the cube once world_start == 1
execute if score world_start world_start matches 1 as @a[tag=!init] in minecraft:overworld run tp @s 0.5 98 6.5
execute if score world_start world_start matches 1 as @a[tag=!init] run tag @s add init
execute if score world_start world_start matches 1 in hexahedron:bedrock_bottom as @a[nbt={Dimension:"hexahedron:bedrock_bottom"}] unless entity @e[type=marker,tag=outer_core,distance=..150] in minecraft:overworld run tp @s 0.5 98 6.5