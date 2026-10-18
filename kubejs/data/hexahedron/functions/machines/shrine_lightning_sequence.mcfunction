setblock ~ ~-8 ~ air
setblock ~ ~-8 ~ immersiveengineering:capacitor_lv{energy:0,sideConfig_1:1,sideConfig_2:1,sideConfig_3:1,sideConfig_4:1,sideConfig_5:1,sideConfig_6:1,}

playsound item.trident.thunder weather @a[distance=..100] ~ ~ ~ 30 0
playsound item.trident.return weather @a[distance=..100] ~ ~ ~ 30 0
playsound immersiveengineering:charge_slow weather @a[distance=..100] ~ ~ ~ 30 1

summon marker ~ ~ ~ {Tags:["lightning"]}

function hexahedron:effects/lightning

