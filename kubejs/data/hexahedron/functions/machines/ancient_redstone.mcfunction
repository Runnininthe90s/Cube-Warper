#scoreboard players set @e[tag=ancient_redstone,distance=..2,limit=1,sort=nearest] redstone_cooldown 20

particle minecraft:dust_color_transition 1 0 0 5 0.373 0.043 0.043 ~ ~ ~ 0.5 0.5 0.5 0.1 50 force

playsound minecraft:block.respawn_anchor.charge master @a ~ ~ ~ 1 0
playsound minecraft:block.respawn_anchor.deplete master @a ~ ~ ~ 1 2
#playsound minecraft:item.trident.thunder master @a ~ ~ ~ 1 2