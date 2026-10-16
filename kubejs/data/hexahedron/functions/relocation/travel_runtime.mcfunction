### TICKING LOOP
execute as @e[type=minecraft:marker,tag=core] if entity @s[tag=running] run scoreboard players add @s runtime 1

### TRIGGER EFFECTS
execute as @e[type=minecraft:marker,tag=core,scores={runtime=1}] at @s run playsound block.respawn_anchor.ambient master @a ~ ~ ~ 10 0
execute as @e[type=minecraft:marker,tag=core,scores={runtime=1}] at @s run playsound minecraft:block.respawn_anchor.charge master @a ~ ~ ~ 1 1
execute as @e[type=minecraft:marker,tag=core,scores={runtime=1}] at @s run playsound block.respawn_anchor.set_spawn master @a ~ ~ ~ 10 1
execute as @e[type=minecraft:marker,tag=core,scores={runtime=1}] at @s run playsound minecraft:block.portal.trigger master @a ~ ~ ~ 1 0

execute as @e[type=minecraft:marker,tag=core,scores={runtime=120}] at @s run playsound minecraft:ambient.basalt_deltas.mood master @a ~ ~ ~ 1 2


### TICKING EFFECTS
#execute as @e[type=minecraft:marker,tag=core,scores={runtime=1..}] at @s run particle supplementaries:rotation_trail_emitter ~ ~ ~ 0 0 0 10 1 force

### Vents
execute if entity @e[type=minecraft:marker,tag=core,scores={runtime=30}] at @e[type=minecraft:marker,tag=vent] run playsound minecraft:block.candle.extinguish master @a ~ ~ ~ 0.3 1
execute if entity @e[type=minecraft:marker,tag=core,scores={runtime=30..35}] run function hexahedron:effects/vents

execute if entity @e[type=minecraft:marker,tag=core,scores={runtime=70}] at @e[type=minecraft:marker,tag=vent] run playsound minecraft:block.candle.extinguish master @a ~ ~ ~ 0.3 1
execute if entity @e[type=minecraft:marker,tag=core,scores={runtime=70..75}] run function hexahedron:effects/vents

execute if entity @e[type=minecraft:marker,tag=core,scores={runtime=100}] at @e[type=minecraft:marker,tag=vent] run playsound minecraft:block.candle.extinguish master @a ~ ~ ~ 0.3 1
execute if entity @e[type=minecraft:marker,tag=core,scores={runtime=100..105}] run function hexahedron:effects/vents

### REPOSITION
execute as @e[type=minecraft:marker,tag=core,scores={runtime=120}] run function hexahedron:tickets/relocation
execute as @e[type=minecraft:marker,tag=core,scores={runtime=120}] run schedule function hexahedron:fix_portals 3s

### END
execute as @e[type=minecraft:marker,tag=core,scores={runtime=120..}] run tag @s remove running
execute as @e[type=minecraft:marker,tag=core,scores={runtime=120..}] run scoreboard players set @s runtime 0