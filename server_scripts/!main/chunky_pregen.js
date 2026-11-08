const PREGEN_WORLDS = [
  'hexahedron_graveyard',
  'dry_ocean', 
  'stacked_rocks', 
  'copper_remains',
  'dark_rocks', 
  'magnetic_ceiling', 
  'magma_plateau',
  'toxic_caves', 
  'endless_hoard', 
  'pine_forrest', 
  'snowstorm', 
  'silver_forest',
  'brimstone_veil', 
  'blood_ocean', 
  'the_sugarscape', 
  'the_azurewood',
  'dusk_islands', 
  'endless_rainbows', 
  'soul_valley', 
  'the_umbral_sea', 
  'gronglegrowth',
  'forsaken_planes', 
  'carrion_485', 
  'lavender_fields', 
  'alpha_islands',
  'the_edge_of_reality',
  'overworld'
]

function runPregen(server) {
  	server.runCommandSilent('chunky quiet 99999')
  	PREGEN_WORLDS.forEach(w => {
  	  	server.runCommandSilent(`chunky start hexahedron:${w} circle 0 0 80 80`)
  	})
}

ServerEvents.commandRegistry(event => {
	const { commands: Commands } = event
	event.register(
	  Commands.literal('hexpregen')
	  	.requires(src => src.hasPermission(0))
	  	.executes(ctx => {
	  		runPregen(ctx.source.server)
	  		return 1
	  	})
	)
})

ServerEvents.loaded(event => {
	const server = event.server
	if (server.persistentData.getBoolean('hexahedron_pregen_done')) return
	server.scheduleInTicks(100, () => {
		runPregen(server)
		server.persistentData.putBoolean('hexahedron_pregen_done', true)
	})
})