effect give @a blindness 2 0 true
title @a actionbar {"text":"Generating world, please hold...","bold":true,"color":"aqua"}
tp @a 0 200.5 0
stopsound @a

execute if score world_start world_start matches 1 run return 1
schedule function hexahedron:first_init/blindfold 20t