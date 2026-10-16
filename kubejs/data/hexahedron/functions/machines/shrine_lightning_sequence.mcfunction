setblock ~ ~-8 ~ air
setblock ~ ~-8 ~ immersiveengineering:capacitor_lv{energy:0,sideConfig_1:1,sideConfig_2:1,sideConfig_3:1,sideConfig_4:1,sideConfig_5:1,sideConfig_6:1,}

playsound item.trident.thunder master @a ~ ~ ~ 30 0
playsound item.trident.return master @a ~ ~ ~ 30 0
playsound immersiveengineering:charge_slow master @a ~ ~ ~ 30 1

summon marker ~ ~ ~ {Tags:["lightning"]}

function hexahedron:effects/lightning

