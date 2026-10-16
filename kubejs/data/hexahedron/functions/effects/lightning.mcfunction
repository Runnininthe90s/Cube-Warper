scoreboard players add @e[type=marker,tag=lightning] time 1


execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s run summon lightning_bolt ~ ~ ~
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s run particle minecraft:firework ~ ~ ~ 0 0 0 0.5 100 force
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s run summon firework_rocket ~ ~1 ~ {FireworksItem:{id:"firework_rocket",Count:1,tag:{Fireworks:{Explosions:[{Type:4,Flicker:1b,Trail:1b,Colors:[I;16777215],FadeColors:[I;10092536]}]}}}}
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s run playsound soundofrain:thunder_close master @a ~ ~ ~ 30 0

#North
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~ ~-29 ~-15 supplementaries:pedestal run particle minecraft:firework ~ ~-29.5 ~-7 0 0 3 0.05 100 force
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~ ~-29 ~-15 supplementaries:pedestal run particle minecraft:campfire_signal_smoke ~ ~-29.5 ~-7 0 0 3 0 100 force
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~ ~-29 ~-15 supplementaries:pedestal run summon firework_rocket ~ ~-28 ~-15 {FireworksItem:{id:"firework_rocket",Count:1,tag:{Fireworks:{Explosions:[{Type:4,Flicker:1b,Trail:1b,Colors:[I;16777215],FadeColors:[I;10092536]}]}}}}
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~ ~-29 ~-15 supplementaries:pedestal{Items:[{Slot:0b,id:"minecraft:glass_bottle",Count:1b}]} run data merge block ~ ~-29 ~-15 {Items:[{Slot:0b,id:"kubejs:bottled_lightning",Count:1b}]}
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~ ~-29 ~-15 supplementaries:pedestal{Items:[{Slot:0b,id:"kubejs:vector_operator_step6",Count:1b}]} run data merge block ~ ~-29 ~-15 {Items:[{Slot:0b,id:"kubejs:vector_operator_step7",Count:1b}]}
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~ ~-29 ~-15 supplementaries:pedestal{Items:[{Slot:0b,id:"thermal:copper_dust",Count:1b}]} run data merge block ~ ~-29 ~-15 {Items:[{Slot:0b,id:"thermal:lightning_charge",Count:1b}]}

#South
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~ ~-29 ~15 supplementaries:pedestal run particle minecraft:firework ~ ~-29.5 ~7 0 0 3 0.05 100 force
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~ ~-29 ~15 supplementaries:pedestal run particle minecraft:campfire_signal_smoke ~ ~-29.5 ~7 0 0 3 0 100 force
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~ ~-29 ~15 supplementaries:pedestal run summon firework_rocket ~ ~-28 ~15 {FireworksItem:{id:"firework_rocket",Count:1,tag:{Fireworks:{Explosions:[{Type:4,Flicker:1b,Trail:1b,Colors:[I;16777215],FadeColors:[I;10092536]}]}}}}
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~ ~-29 ~15 supplementaries:pedestal{Items:[{Slot:0b,id:"minecraft:glass_bottle",Count:1b}]} run data merge block ~ ~-29 ~15 {Items:[{Slot:0b,id:"kubejs:bottled_lightning",Count:1b}]}
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~ ~-29 ~15 supplementaries:pedestal{Items:[{Slot:0b,id:"kubejs:vector_operator_step6",Count:1b}]} run data merge block ~ ~-29 ~15 {Items:[{Slot:0b,id:"kubejs:vector_operator_step7",Count:1b}]}
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~ ~-29 ~15 supplementaries:pedestal{Items:[{Slot:0b,id:"thermal:copper_dust",Count:1b}]} run data merge block ~ ~-29 ~15 {Items:[{Slot:0b,id:"thermal:lightning_charge",Count:1b}]}

#West
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~-15 ~-29 ~ supplementaries:pedestal run particle minecraft:firework ~-7 ~-29.5 ~ 3 0 0 0.05 100 force
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~-15 ~-29 ~ supplementaries:pedestal run particle minecraft:campfire_signal_smoke ~-7 ~-29.5 ~ 3 0 0 0 100 force
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~-15 ~-29 ~ supplementaries:pedestal run summon firework_rocket ~-15 ~-28 ~ {FireworksItem:{id:"firework_rocket",Count:1,tag:{Fireworks:{Explosions:[{Type:4,Flicker:1b,Trail:1b,Colors:[I;16777215],FadeColors:[I;10092536]}]}}}}
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~-15 ~-29 ~ supplementaries:pedestal{Items:[{Slot:0b,id:"minecraft:glass_bottle",Count:1b}]} run data merge block ~-15 ~-29 ~ {Items:[{Slot:0b,id:"kubejs:bottled_lightning",Count:1b}]}
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~-15 ~-29 ~ supplementaries:pedestal{Items:[{Slot:0b,id:"kubejs:vector_operator_step6",Count:1b}]} run data merge block ~-15 ~-29 ~ {Items:[{Slot:0b,id:"kubejs:vector_operator_step7",Count:1b}]}
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~-15 ~-29 ~ supplementaries:pedestal{Items:[{Slot:0b,id:"thermal:copper_dust",Count:1b}]} run data merge block ~-15 ~-29 ~ {Items:[{Slot:0b,id:"thermal:lightning_charge",Count:1b}]}

#East
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~15 ~-29 ~ supplementaries:pedestal run particle minecraft:firework ~7 ~-29.5 ~ 3 0 0 0.05 100 force
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~15 ~-29 ~ supplementaries:pedestal run particle minecraft:campfire_signal_smoke ~7 ~-29.5 ~ 3 0 0 0 100 force
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~15 ~-29 ~ supplementaries:pedestal run summon firework_rocket ~15 ~-28 ~ {FireworksItem:{id:"firework_rocket",Count:1,tag:{Fireworks:{Explosions:[{Type:4,Flicker:1b,Trail:1b,Colors:[I;16777215],FadeColors:[I;10092536]}]}}}}
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~15 ~-29 ~ supplementaries:pedestal{Items:[{Slot:0b,id:"minecraft:glass_bottle",Count:1b}]} run data merge block ~15 ~-29 ~ {Items:[{Slot:0b,id:"kubejs:bottled_lightning",Count:1b}]}
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~15 ~-29 ~ supplementaries:pedestal{Items:[{Slot:0b,id:"kubejs:vector_operator_step6",Count:1b}]} run data merge block ~15 ~-29 ~ {Items:[{Slot:0b,id:"kubejs:vector_operator_step7",Count:1b}]}
execute as @e[type=marker,tag=lightning,scores={time=3..}] at @s if block ~15 ~-29 ~ supplementaries:pedestal{Items:[{Slot:0b,id:"thermal:copper_dust",Count:1b}]} run data merge block ~15 ~-29 ~ {Items:[{Slot:0b,id:"thermal:lightning_charge",Count:1b}]}


execute if entity @e[type=marker,tag=lightning,scores={time=3..}] run kill @e[type=marker,tag=lightning]
schedule function hexahedron:effects/lightning 1s

#data merge block ~-15 ~-29 ~ {Items:[{Slot:0b,id:"kubejs:bottled_lightning", Count: 1b}]}
