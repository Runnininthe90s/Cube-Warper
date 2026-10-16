//Made by the wonderful Chiefarug
//Edited by me for server compat

//requires: alexscaves
//requires: fabric_api
//use Forgified Fabric API to get fabric api

const $RecipeType = Java.loadClass('net.minecraft.world.item.crafting.RecipeType')

StartupEvents.registry('recipe_type', event => {
    global.nuclearFurnaceRecipeType = event.createCustom('nuclear_furnace', () => $RecipeType.simple('kubejs:nuclear_furnace'))
})

const $SimpleCookingSerializer = Java.loadClass('net.minecraft.world.item.crafting.SimpleCookingSerializer')
const $SmeltingRecipe = Java.loadClass('net.minecraft.world.item.crafting.SmeltingRecipe')
const $RecipeSerializer = Java.loadClass('net.minecraft.world.item.crafting.RecipeSerializer')
const $CookieBaker = Java.loadClass('net.minecraft.world.item.crafting.SimpleCookingSerializer$CookieBaker')
const $UtilsJS = Java.loadClass('dev.latvian.mods.kubejs.util.UtilsJS')
const $AbstractCookingRecipe = Java.loadClass('net.minecraft.world.item.crafting.AbstractCookingRecipe')

StartupEvents.registry('recipe_serializer', event => {
    const cookieBaker = $UtilsJS.makeFunctionProxy("STARTUP", $CookieBaker, (rl, s, cbc, inp, out, exp, cookTime) => {
        const recipe = new $SmeltingRecipe(rl, s, cbc, inp, out, exp, cookTime)
        const typeHolder = recipe.getClass().getSuperclass().getDeclaredField('f_43726_') // type
        typeHolder.setAccessible(true)
        typeHolder.set(recipe, global.nuclearFurnaceRecipeType.get())
        return recipe;
    })
    event.createCustom('nuclear_furnace', () => new $SimpleCookingSerializer(
        cookieBaker,
        3000)); // the default cooking time. furnace is 200, blast furnace is 100
})

StartupEvents.recipeSchemaRegistry(event => {
    event.register('kubejs:nuclear_furnace', event.namespace('minecraft').get('smelting').schema)
})

const $BlockEntity = Java.loadClass('net.minecraft.world.level.block.entity.BlockEntity')
const $RecipeManager = Java.loadClass('net.minecraft.world.item.crafting.RecipeManager')
const $NuclearFurnaceBlockEntity = Java.loadClass('com.github.alexmodguy.alexscaves.server.block.blockentity.NuclearFurnaceBlockEntity')

// Common classes: safe on both the client and a dedicated server
const $ServerBlockEntityEvents = Java.loadClass('net.fabricmc.fabric.api.event.lifecycle.v1.ServerBlockEntityEvents')
const $ServerBlockEntity$Load = Java.loadClass('net.fabricmc.fabric.api.event.lifecycle.v1.ServerBlockEntityEvents$Load')

// I would use forges attach capabilities event, but that fires too early (as the BE is being constructed) so happens before Caves sets its own value.
// so instead we depend on fabric api! on forge! this is fine
const eventHandler = (blockEntity, world) => {
    if (blockEntity instanceof $NuclearFurnaceBlockEntity) {
        /** @type {Internal.Field<Internal.RecipeManager$CachedCheck>} */
        const quickCheckHolder = blockEntity.getClass().getDeclaredField('quickCheck')
        quickCheckHolder.setAccessible(true)
        quickCheckHolder.set(blockEntity, $RecipeManager.createCheck(global.nuclearFurnaceRecipeType.get()))
    }
}

const ServerHandler = $UtilsJS.makeFunctionProxy("STARTUP", $ServerBlockEntity$Load, eventHandler)
$ServerBlockEntityEvents.BLOCK_ENTITY_LOAD.register(ServerHandler)

// Client-only: these classes don't exist on a dedicated server, so only touch them on the client.
// Wrapped in a function so the consts live in a function scope (Rhino can choke on const inside a bare if-block).
function registerClientHandler() {
    const ClientEvents = Java.loadClass('net.fabricmc.fabric.api.client.event.lifecycle.v1.ClientBlockEntityEvents')
    const ClientLoad = Java.loadClass('net.fabricmc.fabric.api.client.event.lifecycle.v1.ClientBlockEntityEvents$Load')

    const ClientHandler = $UtilsJS.makeFunctionProxy("STARTUP", ClientLoad, eventHandler)
    ClientEvents.BLOCK_ENTITY_LOAD.register(ClientHandler)
}

if (Platform.isClientEnvironment()) {
    registerClientHandler()
}