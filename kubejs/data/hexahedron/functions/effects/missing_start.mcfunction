setblock ~ ~ ~ air

playsound untagged_mobs:block.server_door.open master @a ~ ~ ~ 1 0
playsound untagged_mobs:block.dimensional_lock.open master @a ~ ~ ~ 1 0

particle untagged_mobs:missing_cube ~ ~ ~ 0 0 0 0.1 100 force
particle dust_color_transition 0 0 0 5 1 0 1 ~ ~ ~ 10 10 10 0 1000 force
particle dust_color_transition 1 0 1 5 0 0 0 ~ ~ ~ 10 10 10 0 1000 force

summon untagged_mobs:non_player ~ ~ ~ {CustomNameVisible:0b,Motion:[0.0,0.0,0.0],CustomName:'{"text":"missing","obfuscated":true}',ActiveEffects:[{Id:11,Amplifier:1b,Duration:-1,ShowParticles:0b}]}
summon untagged_mobs:non_player ~ ~ ~ {CustomNameVisible:0b,Motion:[0.0,0.0,0.0],CustomName:'{"text":"missing","obfuscated":true}',ActiveEffects:[{Id:11,Amplifier:1b,Duration:-1,ShowParticles:0b}]}

tellraw @p {"text":"Non-Player joined the game","color":"yellow"}
tellraw @p {"text":"Non-Player joined the game","color":"yellow"}