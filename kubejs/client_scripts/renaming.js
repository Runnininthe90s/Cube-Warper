let rename_item = (Block, Name) => {

  ClientEvents.lang('en_us', event => {
    event.renameItem    (Block, Name)
  })  
}

let rename_block = (Block, Name) => {

  ClientEvents.lang('en_us', event => {
    event.renameItem    (Block, Name)
    event.renameBlock   (Block, Name)
  })  
}

rename_item("untagged_mobs:executable_redactor", "Redacted")
rename_item("create:andesite_alloy", "Seared Alloy")
rename_item("create:brass_hand", "Gold Hand")

rename_block("actuallyadditions:lava_factory_casing", "Power Casing")
rename_block("forestry:carpenter", "Soldering Machine")
rename_block("untagged_mobs:skybox_missing", "Missing Core")
rename_block("thermal:dynamo_lapidary", "Nuclear Dynamo")

rename_block("create:andesite_alloy_block", "Block of Seared Alloy")
rename_block("createdieselgenerators:andesite_girder", "Seared Girder")
rename_block("create:andesite_scaffolding", "Seared Scaffolding")
rename_block("create:andesite_door", "Seared Door")
rename_block("create:andesite_casing", "Seared Casing")
rename_block("create:andesite_funnel", "Seared Funnel")
rename_block("create:andesite_tunnel", "Seared Tunnel")
rename_block("create:andesite_table_cloth", "Seared Table Cloth")
rename_block("create:andesite_bars", "Seared Bars")
rename_block("create:andesite_ladder", "Seared Ladder")
rename_block("appflux:harden_insulating_resin", "Hardened Insulating Resin")

ClientEvents.lang('en_us', event => {
  event.add('fluid_type.untagged_mobs.fluid_blood', 'Blood')
})

