### MOVE
execute as @e[type=immersive_portals:portal,tag=y,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=y_outer,limit=1]
execute as @e[type=immersive_portals:portal,tag=-y,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=-y_outer,limit=1]

execute as @e[type=immersive_portals:portal,tag=x,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=x_outer,limit=1]
execute as @e[type=immersive_portals:portal,tag=-x,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=-x_outer,limit=1]

execute as @e[type=immersive_portals:portal,tag=z,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=z_outer,limit=1]
execute as @e[type=immersive_portals:portal,tag=-z,limit=1] at @s run portal set_portal_destination_to @e[type=marker,tag=-z_outer,limit=1]