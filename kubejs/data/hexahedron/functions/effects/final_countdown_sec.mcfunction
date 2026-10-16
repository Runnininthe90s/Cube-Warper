schedule function hexahedron:effects/final_countdown_sec 1s
scoreboard players add countdown_sec countdown_sec 1
execute if score countdown_sec countdown_sec matches 60.. run scoreboard players set countdown_sec countdown_sec 0

execute if score countdown_sec countdown_sec matches 0..9 run title @a actionbar {"text":"","color":"red","bold":true,"extra":[{"score":{"name":"countdown_min","objective":"countdown_min"}},{"text":":0"},{"score":{"name":"countdown_sec","objective":"countdown_sec"}}]}
execute if score countdown_sec countdown_sec matches 10.. run title @a actionbar {"text":"","color":"red","bold":true,"extra":[{"score":{"name":"countdown_min","objective":"countdown_min"}},{"text":":"},{"score":{"name":"countdown_sec","objective":"countdown_sec"}}]}