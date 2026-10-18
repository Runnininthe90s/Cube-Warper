

scoreboard players set max RNG_Constant 10
function hexahedron:rng/rng

execute as @a[limit=1,sort=nearest] at @s run playsound weather.rain weather @s ~ ~ ~ 0.1 0.8
execute if score RNG RNG_Variable matches 1..5 as @a[limit=1,sort=nearest] at @s run playsound soundofrain:rain_water weather @s ~ ~ ~ 0.1 1

execute if score RNG RNG_Variable matches 1 as @a[limit=1,sort=nearest] at @s run playsound soundofrain:thunder_medium weather @s ~ ~ ~ 1 1
execute if score RNG RNG_Variable matches 2 as @a[limit=1,sort=nearest] at @s run playsound soundofrain:thunder_far weather @s ~ ~ ~ 1 1