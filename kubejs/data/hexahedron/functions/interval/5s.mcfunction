schedule function hexahedron:interval/5s 5s

#function hexahedron:processors/portal_visibility
execute in hexahedron:brimstone_veil as @e[type=marker,tag=geyser_marker] at @s run fill ~ ~ ~ ~ ~8 ~ air
#function hexahedron:effects/dynamic_portal_fix