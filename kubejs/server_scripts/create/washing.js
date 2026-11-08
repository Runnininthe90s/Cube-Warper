ServerEvents.recipes(event => {

  event.recipes.create.splashing(
    [
      Item.of('minecraft:wheat_seeds')              .withChance(0.005),
      Item.of('minecraft:melon_seeds')              .withChance(0.005),
      Item.of('minecraft:pumpkin_seeds')            .withChance(0.005),
      Item.of('minecraft:beetroot_seeds')           .withChance(0.005),
      Item.of('farmersdelight:cabbage_seeds')       .withChance(0.005),
      Item.of('farmersdelight:tomato_seeds')        .withChance(0.005),
      Item.of('neapolitan:strawberry_pips')         .withChance(0.005),
      Item.of('supplementaries:flax_seeds')         .withChance(0.005),
      Item.of('immersiveengineering:seed')          .withChance(0.005),
      Item.of('farmersdelight:rice')                .withChance(0.005),
      Item.of('minecraft:cocoa_beans')              .withChance(0.005),
      Item.of('actuallyadditions:coffee_beans')     .withChance(0.005),
      Item.of('neapolitan:adzuki_beans')            .withChance(0.005),
      Item.of('minecraft:sweet_berries')            .withChance(0.005),
      Item.of('minecraft:potato')                   .withChance(0.005),
      Item.of('minecraft:carrot')                   .withChance(0.005),
      Item.of('farmersdelight:onion')               .withChance(0.005),
      Item.of('windswept:ginger_root')              .withChance(0.005)
    ],
    'minecraft:dirt'
  )

})