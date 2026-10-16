
particle minecraft:flash ~ ~2 ~ 0 0 0 0 1 force
particle minecraft:dust_color_transition 1 0.882 0.369 5 1 1 1 ~ ~1.3 ~ 0.5 0.5 0.5 0.1 10 force


playsound minecraft:block.respawn_anchor.deplete master @a ~ ~ ~ 0.5 0
playsound minecraft:block.bell.resonate master @a ~ ~ ~ 0.5 1
#playsound minecraft:entity.illusioner.prepare_blindness master @a ~ ~ ~ 0.5 0
summon marker ~ ~ ~ {Tags:["tick_tock"]}

execute if block ~ ~1 ~ kubejs:vector_operator_empty run setblock ~ ~1 ~ kubejs:vector_operator_basic