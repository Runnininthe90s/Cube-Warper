ServerEvents.recipes(event => {

	event.recipes.createSequencedAssembly(
		[
			'2x alexscaves:gummy_ring_yellow'
		], 'alexscaves:gummy_ring_red', [
			event.recipes.createFilling(
				'alexscaves:gummy_ring_red', [
	  			'alexscaves:gummy_ring_red',
	  			Fluid.of('supplementaries:lumisene', 10)
			])
		]).transitionalItem('alexscaves:gummy_ring_red').loops(1)

	event.recipes.createSequencedAssembly(
		[
			'2x alexscaves:gummy_ring_green'
		], 'alexscaves:gummy_ring_yellow', [
			event.recipes.createFilling(
				'alexscaves:gummy_ring_yellow', [
	  			'alexscaves:gummy_ring_yellow',
	  			Fluid.of('supplementaries:lumisene', 10)
			])
		]).transitionalItem('alexscaves:gummy_ring_yellow').loops(1)


	event.recipes.createSequencedAssembly(
		[
			'2x alexscaves:gummy_ring_blue'
		], 'alexscaves:gummy_ring_green', [
			event.recipes.createFilling(
				'alexscaves:gummy_ring_green', [
	  			'alexscaves:gummy_ring_green',
	  			Fluid.of('supplementaries:lumisene', 10)
			])
		]).transitionalItem('alexscaves:gummy_ring_green').loops(1)

	event.recipes.createSequencedAssembly(
		[
			'2x alexscaves:gummy_ring_red'
		], 'alexscaves:gummy_ring_blue', [
			event.recipes.createFilling(
				'alexscaves:gummy_ring_blue', [
	  			'alexscaves:gummy_ring_blue',
	  			Fluid.of('supplementaries:lumisene', 10)
			])
		]).transitionalItem('alexscaves:gummy_ring_blue').loops(1)

})