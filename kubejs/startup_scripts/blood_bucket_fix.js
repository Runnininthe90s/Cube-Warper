//Script by @keetsta

const FluidBucketWrapper = Java.loadClass('net.minecraftforge.fluids.capability.wrappers.FluidBucketWrapper')
const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

ForgeEvents.onGenericEvent('net.minecraftforge.event.AttachCapabilitiesEvent', 'net.minecraft.world.item.ItemStack', event => {
  let stack = event.getObject()
  if (stack.id == 'untagged_mobs:fluid_blood_bucket') {
    event.addCapability(new ResourceLocation('kubejs', 'blood_bucket'), new FluidBucketWrapper(stack))
  }
})