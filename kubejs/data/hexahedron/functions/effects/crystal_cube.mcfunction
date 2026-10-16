execute as @e[type=caverns_and_chasms:large_arrow,distance=..30] at @s run particle minecraft:flash ~ ~ ~ 0 0 0 0 1 force
kill @e[type=caverns_and_chasms:large_arrow,distance=..30]
tag @e[type=marker,tag=cube_marker,distance=..20] add crystalized

playsound caverns_and_chasms:entity.large_arrow.hit master @a ~ ~ ~ 50 0
playsound minecraft:block.amethyst_block.break master @a ~ ~ ~ 50 0
playsound block.respawn_anchor.charge master @a ~ ~ ~ 50 0

particle neapolitan:mint_boost ~ ~ ~ 7 7 7 0 1000 force
particle end_rod ~ ~ ~ 5 5 5 0.3 1000 force
#particle minecraft:dust_color_transition 0.5 0.5 0.5 10 1 1 1 ~ ~ ~ 7 7 7 0 1000 force
#particle campfire_signal_smoke ~ ~ ~ 5 5 5 0.01 1000 force

place template hexahedron:crystal_cube ~-6 ~-7 ~-6
tag @e[type=marker,tag=cube_marker,distance=..1,limit=1,sort=nearest] add cube_countdown
function hexahedron:effects/crystal_cube_countdown

#fill ~-7 ~-7 ~-7 ~7 ~7 ~7 minecraft:air replace #clanginghowl:energy_cluster
#fill ~-4 ~-4 ~-4 ~4 ~4 ~4 kubejs:ancient_runes