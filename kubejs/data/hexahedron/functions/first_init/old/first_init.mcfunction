scoreboard objectives add world_start dummy
scoreboard objectives add hexahedron_start dummy

execute if score world_start world_start matches 1 run return 1

schedule function hexahedron:first_init/hexahedron_start 1t
schedule function hexahedron:first_init/blindfold 1t