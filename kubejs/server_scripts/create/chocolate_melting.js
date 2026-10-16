ServerEvents.recipes(event => {

	let chocolate_melting = (Chocolate) => {
		event.recipes.createMixing(Fluid.of('create:chocolate', 1000), [
		  	Chocolate
		]).heated()
	}
	
	chocolate_melting('alexscaves:block_of_chocolate')
	chocolate_melting('alexscaves:block_of_frosted_chocolate')
	chocolate_melting('alexscaves:block_of_chocolate_frosting')

})