StartupEvents.registry('block', event => {

	event.create('cobblestone_ancient').displayName("Cobblestone")
		.textureAll('kubejs:block/old_minecraft_textures/cobblestone_ancient')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")

	event.create('cobblestone').displayName("Cobblestone")
		.textureAll('kubejs:block/old_minecraft_textures/cobblestone')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")

	event.create('mossy_cobblestone').displayName("Mossy Cobblestone")
		.textureAll('kubejs:block/old_minecraft_textures/mossy_cobblestone')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")

	event.create('bricks_ancient').displayName("Bricks")
		.textureAll('kubejs:block/old_minecraft_textures/bricks_ancient')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")

	event.create('bricks').displayName("Bricks")
		.textureAll('kubejs:block/old_minecraft_textures/bricks')
		.fullBlock(true)
		.material("stone")
		.soundType("stone")

})