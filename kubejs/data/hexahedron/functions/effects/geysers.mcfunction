kill @e[type=tnt,distance=..5]

summon blaze ~ ~7 ~ {Motion:[0.0,1.5,0.0]}
summon firework_rocket ~ ~12 ~ {FireworksItem:{id:"firework_rocket",Count:1,tag:{Fireworks:{Explosions:[{Type:4,Flicker:1b,Trail:1b,Colors:[I;16757504],FadeColors:[I;16744707]}]}}}}
playsound minecraft:ambient.nether_wastes.mood master @a ~ ~7 ~ 1 2
playsound minecraft:ambient.nether_wastes.mood master @a ~ ~7 ~ 1 2
playsound minecraft:ambient.nether_wastes.mood master @a ~ ~7 ~ 1 2

playsound minecraft:entity.generic.explode master @a ~ ~1 ~ 35 0
playsound soundofrain:thunder_close master @a ~ ~1 ~ 0.1 0
playsound minecraft:entity.firework_rocket.twinkle_far master @a ~ ~ ~ 1 0

particle minecraft:flame ~ ~13 ~ 0.5 1 0.5 0.1 50 force
particle minecraft:lava ~ ~10 ~ 0.5 5 0.5 0.1 100 force
particle minecraft:campfire_signal_smoke ~ ~10 ~ 0 0 0 0.3 200 force
particle minecraft:dust_color_transition 1 0.816 0 4 1 0.369 0 ~ ~12 ~ 0.5 0.5 0.5 0.1 100