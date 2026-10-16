BlockEvents.modification(event => {
  event.modify('biomesoplenty:dried_salt', block => {
    block.soundType = 'basalt'
  })

  event.modify('untagged_mobs:inverse_alpha_grass', block => {
    block.soundType = 'grass'
  })

})