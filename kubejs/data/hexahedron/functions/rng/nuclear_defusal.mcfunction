scoreboard players set max RNG_Constant 2
function hexahedron:rng/rng


setblock ~ ~ ~ air

execute if score RNG RNG_Variable matches 0 run summon alexscaves:nuclear_bomb
#execute if score RNG RNG_Variable matches 0 run playsound alexscaves:nuclear_siren master @a ~ ~ ~ 1 1
execute if score RNG RNG_Variable matches 0 run playsound alexscaves:nuclear_bomb_place master @a ~ ~ ~ 1 0

execute if score RNG RNG_Variable matches 1 run summon item ~ ~ ~ {Motion:[0.1,0.5,0.05],Item:{id:"alexscaves:fissile_core",Count:1b}}
execute if score RNG RNG_Variable matches 1 run playsound alexscaves:nuclear_bomb_break master @a ~ ~ ~ 1 0
execute if score RNG RNG_Variable matches 1 run playsound minecraft:block.respawn_anchor.charge master @a ~ ~ ~ 1 0
execute if score RNG RNG_Variable matches 1 run playsound minecraft:block.lava.extinguish master @a ~ ~ ~ 1 0
execute if score RNG RNG_Variable matches 1 run particle alexscaves:hazmat_breathe ~ ~ ~ 0.3 0.3 0.3 0 300 force
execute if score RNG RNG_Variable matches 1 run particle minecraft:dust_color_transition 0.282 1 0 4 1 1 1 ~ ~ ~ 0.3 0.3 0.3 0 5 force
