scoreboard players set max RNG_Constant 5
function hexahedron:rng/rng

execute if score RNG RNG_Variable matches 0 run place template hexahedron:maze_piece_5 ~ ~ ~
execute if score RNG RNG_Variable matches 1 run place template hexahedron:maze_piece_1 ~ ~ ~
execute if score RNG RNG_Variable matches 2 run place template hexahedron:maze_piece_2 ~ ~ ~
execute if score RNG RNG_Variable matches 3 run place template hexahedron:maze_piece_3 ~ ~ ~
execute if score RNG RNG_Variable matches 4 run place template hexahedron:maze_piece_4 ~ ~ ~
execute if score RNG RNG_Variable matches 5 run place template hexahedron:maze_piece_5 ~ ~ ~