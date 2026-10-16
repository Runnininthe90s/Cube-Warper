scoreboard objectives add runtime dummy
scoreboard objectives add time dummy
scoreboard objectives add hexahedron_portals dummy
scoreboard objectives add unfold dummy

scoreboard objectives add cube_time dummy
scoreboard objectives add redstone_cooldown dummy
scoreboard objectives add hex_settings dummy
execute unless score warp_pull_players hex_settings matches 0..1 run scoreboard players set warp_pull_players hex_settings 0

setworldspawn 0 100 0
execute in overworld run weather clear 999999999d

gamerule commandBlockOutput false