ServerEvents.recipes(event => {

    event.remove({type: 	'thermal:lapidary_fuel'})
    event.remove({type: 	'thermal:numismatic_fuel'})
    event.remove({output: 	'thermal:dynamo_numismatic'})

    event.recipes.thermal.lapidary_fuel('alexscaves:uranium_rod').energy(18000000)

})