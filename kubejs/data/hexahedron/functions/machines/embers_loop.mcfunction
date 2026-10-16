execute if score ember_loop ember_loop matches 1 run return 1

execute as @e[type=item,nbt={OnGround:1b,Item: {id: "embers:ember_shard"}}] run particle campfire_signal_smoke ~ ~ ~ 0 0 0 0 1 force

schedule function hexahedron:machines/embers_loop 1t