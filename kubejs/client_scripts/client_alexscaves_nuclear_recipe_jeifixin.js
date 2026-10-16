//requires: jei
//requires: alexscaves
const $AlexsCavesPlugin = Java.loadClass('com.github.alexmodguy.alexscaves.compat.jei.AlexsCavesPlugin')
JEIEvents.removeRecipes(event => {
    // yeet all existing recipes by hiding them
    event.remove('alexscaves:nuclear_furnace', 
        global.jeiRuntime.recipeManager.createRecipeLookup($AlexsCavesPlugin.NUCLEAR_FURNACE_RECIPE_TYPE).get().map(r => r.id).toList()
    )
    // add all the new recipes by looking at the recipe manager
    global.jeiRuntime.recipeManager.addRecipes($AlexsCavesPlugin.NUCLEAR_FURNACE_RECIPE_TYPE,
        Client.level.recipeManager.getAllRecipesFor(global.nuclearFurnaceRecipeType.get())
    )
})