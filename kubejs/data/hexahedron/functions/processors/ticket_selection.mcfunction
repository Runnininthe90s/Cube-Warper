### TICKET SELECTION

### PROCESSOR 0
execute as @e[type=marker,tag=core,scores={dimension_seed=0}] run function hexahedron:tickets/ticket_hexahedron_graveyard

### PROCESSOR 1
execute as @e[type=marker,tag=core,scores={dimension_seed=1}] run function hexahedron:tickets/ticket_dry_ocean
execute as @e[type=marker,tag=core,scores={dimension_seed=2}] run function hexahedron:tickets/ticket_stacked_rocks
execute as @e[type=marker,tag=core,scores={dimension_seed=3}] run function hexahedron:tickets/ticket_copper_remains

### PROCESSOR 2
execute as @e[type=marker,tag=core,scores={dimension_seed=4}] run function hexahedron:tickets/ticket_dark_rocks
execute as @e[type=marker,tag=core,scores={dimension_seed=6}] run function hexahedron:tickets/ticket_magnetic_ceiling
execute as @e[type=marker,tag=core,scores={dimension_seed=9}] run function hexahedron:tickets/ticket_magma_plateau

### PROCESSOR 3
execute as @e[type=marker,tag=core,scores={dimension_seed=5}] run function hexahedron:tickets/ticket_toxic_caves
execute as @e[type=marker,tag=core,scores={dimension_seed=7}] run function hexahedron:tickets/ticket_endless_hoard
execute as @e[type=marker,tag=core,scores={dimension_seed=8}] run function hexahedron:tickets/ticket_pine_forrest
execute as @e[type=marker,tag=core,scores={dimension_seed=12}] run function hexahedron:tickets/ticket_snowstorm
execute as @e[type=marker,tag=core,scores={dimension_seed=18}] run function hexahedron:tickets/ticket_silver_forest

# PROCESSOR 4
execute as @e[type=marker,tag=core,scores={dimension_seed=10}] run function hexahedron:tickets/ticket_brimstone_veil
execute as @e[type=marker,tag=core,scores={dimension_seed=16}] run function hexahedron:tickets/ticket_blood_ocean
execute as @e[type=marker,tag=core,scores={dimension_seed=24}] run function hexahedron:tickets/ticket_the_sugarscape
execute as @e[type=marker,tag=core,scores={dimension_seed=32}] run function hexahedron:tickets/ticket_the_azurewood

# PROCESSOR 5
execute as @e[type=marker,tag=core,scores={dimension_seed=13}] run function hexahedron:tickets/ticket_dusk
execute as @e[type=marker,tag=core,scores={dimension_seed=14}] run function hexahedron:tickets/ticket_endless_rainbows
execute as @e[type=marker,tag=core,scores={dimension_seed=36}] run function hexahedron:tickets/ticket_soul_valley
execute as @e[type=marker,tag=core,scores={dimension_seed=48}] run function hexahedron:tickets/ticket_the_umbral_sea
execute as @e[type=marker,tag=core,scores={dimension_seed=72}] run function hexahedron:tickets/ticket_gronglegrowth

# PROCESSOR 6
execute as @e[type=marker,tag=core,scores={dimension_seed=17}] run function hexahedron:tickets/ticket_forsaken_planes
execute as @e[type=marker,tag=core,scores={dimension_seed=64}] run function hexahedron:tickets/ticket_carrion_485
execute as @e[type=marker,tag=core,scores={dimension_seed=96}] run function hexahedron:tickets/ticket_lavender_fields
execute as @e[type=marker,tag=core,scores={dimension_seed=128}] run function hexahedron:tickets/ticket_alpha_islands

# PROCESSOR 7
execute as @e[type=marker,tag=core,scores={dimension_seed=999..}] run function hexahedron:tickets/ticket_the_edge_of_reality

### END
execute as @e[type=marker,tag=core,scores={dimension_seed=..-999}] run function hexahedron:tickets/ticket_overworld

##(1) +1 → total 3 → +3 → [1, 2, 3]
##(2) *3 → total 6 → +3 → [4, 6, 9]
##(3) +2 → total 11 → +5 → [5, 7, 8, 12, 18]
##(4) *4 → total 15 → +4 → [10, 16, 24, 32]
##(5) *6 → total 20 → +5 → [13, 14, 36, 48, 72]
##(6) *8 → total 24 → +4 → [17, 64, 96, 128]
##(7) /0 → total 26 → +1 → [undefined]

##(8) *5 → total 33 → +7 → [20, 25, 30, 40, 50, 60, 80]
##(9) *7 → total 43 → +10 → [21, 28, 35, 42, 49, 56, 70, 84, 98, 112]