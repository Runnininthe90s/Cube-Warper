ItemEvents.tooltip(event => {

  event.addAdvanced('kubejs:vector_operator_basic', (item, advanced, text) => {
    text.add(1, Text.gray('Adds 1').bold(true))  
  })

  event.addAdvanced('kubejs:vector_operator_charged', (item, advanced, text) => {
    text.add(1, Text.gray('Multiplies by 3').bold(true))  
  })

  event.addAdvanced('kubejs:vector_operator_fluix', (item, advanced, text) => {
    text.add(1, Text.gray('Adds 2').bold(true))  
  })

  event.addAdvanced('kubejs:vector_operator_nuclear', (item, advanced, text) => {
    text.add(1, Text.gray('Multiplies by 4').bold(true))  
  })

  event.addAdvanced('kubejs:vector_operator_blaze', (item, advanced, text) => {
    text.add(1, Text.gray('Multiplies by 6').bold(true))  
  })

  event.addAdvanced('kubejs:vector_operator_lightning', (item, advanced, text) => {
    text.add(1, Text.gray('Multiplies by 8').bold(true))  
  })

  event.addAdvanced('kubejs:vector_operator_eye', (item, advanced, text) => {
    text.add(1, Text.red('Divides by 0').bold(true))  
  })

  event.addAdvanced('kubejs:vector_operator_infinite', (item, advanced, text) => {
    text.add(1, Text.red('Collapses all destinations into one').bold(true))  
  })

  event.addAdvanced('alexscaves:frostmint', (item, advanced, text) => {
    text.add(1, Text.blue('Will not be consumed when used in the Chiller'))  
  })

//Final Vectors
  event.addAdvanced('kubejs:vector_operator_infinite_empty', (item, advanced, text) => {text.add(1, Text.gray('Step 1 -> Right-Click on Ancient Redstone').bold(true))  })
  event.addAdvanced('kubejs:vector_operator_step2', (item, advanced, text) => {text.add(1, Text.gray('Step 2 -> Age With the Shrine in Dimension 8 ').bold(true))  })
  event.addAdvanced('kubejs:vector_operator_step3', (item, advanced, text) => {text.add(1, Text.gray('Step 3 -> Spout with Lumisene').bold(true))  })
  event.addAdvanced('kubejs:vector_operator_step4', (item, advanced, text) => {text.add(1, Text.gray('Step 4 -> Spirit Craft with Runes in a Spirit Altar').bold(true))  })
  event.addAdvanced('kubejs:vector_operator_step5', (item, advanced, text) => {text.add(1, Text.gray('Step 5 -> Combine with Blaze Fuel').bold(true))  })
  event.addAdvanced('kubejs:vector_operator_step6', (item, advanced, text) => {text.add(1, Text.gray('Step 6 -> Charge at the Lightning Shrine').bold(true))  })
  event.addAdvanced('kubejs:vector_operator_step7', (item, advanced, text) => {text.add(1, Text.gray('Step 7 -> Combine with metals in the Arc Furnace').bold(true))  })
  event.addAdvanced('kubejs:vector_operator_step8', (item, advanced, text) => {text.add(1, Text.gray('Step 8 -> Drop into the Weeping Well').bold(true))  })
  event.addAdvanced('kubejs:vector_operator_step9', (item, advanced, text) => {text.add(1, Text.gray('Step 9 -> Combine with 8 Modular Reactors in the Ritual Ciricle').bold(true))  })
  event.addAdvanced('kubejs:vector_operator_step10', (item, advanced, text) => {text.add(1, Text.gray('Step 10 -> Combine with 8 Forsaken Idols in the Ritual Ciricle').bold(true))  })
  event.addAdvanced('kubejs:vector_operator_step11', (item, advanced, text) => {text.add(1, Text.gray('Step 11 -> Combine with 8 Super Computers in the Ritual Ciricle').bold(true))  })
  event.addAdvanced('kubejs:vector_operator_step12', (item, advanced, text) => {text.add(1, Text.gray('Step 12 -> Place this back on the Vector Tuner within 10 minutes').bold(true))  })


  //(1) +1 → total 3  → +3 → [1, 2, 3]
  //(2) *3 → total 6  → +3 → [4, 6, 9]
  //(3) +2 → total 11 → +5 → [5, 7, 8, 12, 18]
  //(4) *4 → total 15 → +4 → [10, 16, 24, 32]
  //(5) *6 → total 20 → +5 → [13, 14, 36, 48, 72]
  //(6) *8 → total 24 → +4 → [17, 64, 96, 128]
  //(7) /0 → total 26 → +1 → [undifined]

  //(8) *5 → total 33 → +7 → [20, 25, 30, 40, 50, 60, 80]
  //(9) *7 → total 43 → +10 → [21, 28, 35, 42, 49, 56, 70, 84, 98, 112]

})