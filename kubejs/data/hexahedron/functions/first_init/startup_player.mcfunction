execute positioned 0 100.5 0 in hexahedron:bedrock_bottom if entity @a[tag=!init] run fill ~10 ~-4 ~10 ~-10 ~-4 ~-10 bedrock

execute positioned 0 105.5 0 in hexahedron:bedrock_bottom if entity @a[tag=!init] run fill ~8 ~8 ~8 ~-8 ~-8 ~-8 kubejs:hexahedron_filling
execute positioned 0 100.5 0 in hexahedron:bedrock_bottom if entity @a[tag=!init] run function hexahedron:build_hexahedron/17x17
execute positioned 0 105.5 0 in hexahedron:bedrock_bottom if entity @a[tag=!init] run fill ~6 ~6 ~6 ~-6 ~-6 ~-6 light

execute positioned 0 100.5 0 in hexahedron:bedrock_bottom run tp @a[tag=!init] 0 98 -30 facing ~ ~ ~90
execute in hexahedron:bedrock_bottom positioned 0 100 0 as @a[tag=!init] run playsound ambientsounds:suspense.end master @s ~ ~ ~ 200 1

tag @a add init

execute positioned 0 105.5 0 in hexahedron:bedrock_bottom if entity @a[tag=init] unless score hexahedron_portals hexahedron_portals matches 1 run function hexahedron:first_init/hexahedron_complete