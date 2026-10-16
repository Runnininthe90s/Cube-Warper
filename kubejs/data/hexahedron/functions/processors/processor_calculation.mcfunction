### Operators
execute as @e[type=marker,tag=core] if block ~ ~ ~ kubejs:vector_operator_basic run scoreboard players operation @s dimension_seed += 1 1
execute as @e[type=marker,tag=core] if block ~ ~ ~ kubejs:vector_operator_charged run scoreboard players operation @s dimension_seed *= 3 3
execute as @e[type=marker,tag=core] if block ~ ~ ~ kubejs:vector_operator_fluix run scoreboard players operation @s dimension_seed += 2 2
execute as @e[type=marker,tag=core] if block ~ ~ ~ kubejs:vector_operator_nuclear run scoreboard players operation @s dimension_seed *= 4 4
execute as @e[type=marker,tag=core] if block ~ ~ ~ kubejs:vector_operator_blaze run scoreboard players operation @s dimension_seed *= 6 6
execute as @e[type=marker,tag=core] if block ~ ~ ~ kubejs:vector_operator_lightning run scoreboard players operation @s dimension_seed *= 8 8
#execute as @e[type=marker,tag=core] if block ~ ~ ~ kubejs:vector_operator_basic run scoreboard players operation @s dimension_seed -= 1 1
#execute as @e[type=marker,tag=core] if block ~ ~ ~ kubejs:vector_operator_basic run scoreboard players operation @s dimension_seed *= 5 5
#execute as @e[type=marker,tag=core] if block ~ ~ ~ kubejs:vector_operator_basic run scoreboard players operation @s dimension_seed *= 7 7


### Special Operators
execute as @e[type=marker,tag=core] if block ~ ~ ~ kubejs:vector_operator_eye run scoreboard players operation @s dimension_seed = 999 999
execute as @e[type=marker,tag=core] if block ~ ~ ~ kubejs:vector_operator_infinite run scoreboard players operation @s dimension_seed = -999 -999




##(1) +1 → total 3 → +3 → [1, 2, 3]
##(2) *3 → total 6 → +3 → [4, 6, 9]
##(3) +2 → total 11 → +5 → [5, 7, 8, 12, 18]
##(4) *4 → total 15 → +4 → [10, 16, 24, 32]
##(5) *6 → total 20 → +5 → [13, 14, 36, 48, 72]
##(6) *8 → total 24 → +4 → [17, 64, 96, 128]

##(7) -1 → total 26 → +2 → [11, 15]
##(8) *5 → total 33 → +7 → [20, 25, 30, 40, 50, 60, 80]
##(9) *7 → total 43 → +10 → [21, 28, 35, 42, 49, 56, 70, 84, 98, 112]