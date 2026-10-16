# This is the final countdown

scoreboard objectives add countdown_sec dummy
scoreboard objectives add countdown_min dummy

function hexahedron:effects/final_countdown_reset
title @a actionbar {"text":"0:00","color":"red","bold":true}

schedule function hexahedron:effects/final_countdown_sec 1s
schedule function hexahedron:effects/final_countdown_min 60s