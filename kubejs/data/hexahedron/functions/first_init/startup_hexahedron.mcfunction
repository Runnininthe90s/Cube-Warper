execute if score hexahedron_start hexahedron_start matches 1 run return 0

# Attempt to Load Spawn
tp @a 0 300.5 0
setworldspawn 0 100 0

function hexahedron:hexahedron_setup

scoreboard objectives add hexahedron_start dummy
scoreboard players set hexahedron_start hexahedron_start 1