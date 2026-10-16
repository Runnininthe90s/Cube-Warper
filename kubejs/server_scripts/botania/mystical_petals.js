ServerEvents.recipes(event => {

	let flowers = (colour) => {
		event.replaceOutput({	
			input: 	'#minecraft:flowers',
			output: '#forge:dyes'
		}, 
			`minecraft:${colour}_dye`,
			`botania:${colour}_petal`
		)
	}

	flowers('brown')
	flowers('red')
	flowers('orange')
	flowers('yellow')
	flowers('lime')
	flowers('green')
	flowers('cyan')
	flowers('light_blue')
	flowers('blue')
	flowers('purple')
	flowers('magenta')
	flowers('pink')
	flowers('white')
	flowers('light_gray')
	flowers('gray')
	flowers('black')

})