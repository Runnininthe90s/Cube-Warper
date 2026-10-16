particle firework ~ ~ ~ 0.5 0.5 0.5 0.1 1
particle cofh_core:spark ~ ~ ~ 0.2 1 0.2 0 1
execute if block ~ ~-1 ~ immersiveengineering:steel_fence positioned ~ ~-1 ~ run function hexahedron:machines/lightning_rod_current
execute if block ~ ~-2 ~ immersiveengineering:lightning_rod run data merge block ~ ~-2 ~ {energy:200000}