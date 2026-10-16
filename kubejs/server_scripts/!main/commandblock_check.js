//Checks if command blocks are enabled

function commandBlocksEnabled(server) {
  try {
    return server.isCommandBlockEnabled()
  } catch (e) {
    console.error('Could not read command block setting: ' + e)
    return true
  }
}

const WARNING = [
  Text.red('⚠ Command blocks are disabled on this server. ⚠').bold(),
  Text.red('This will break the pack down the line, so please enable them.'),
  Text.red('Set enable-command-block=true in server.properties.')
]

ServerEvents.loaded(event => {
  if (!commandBlocksEnabled(event.server)) {
    console.warn('Command blocks are DISABLED (enable-command-block=false)')
  }
})

PlayerEvents.loggedIn(event => {
  if (!commandBlocksEnabled(event.server)) {
    event.server.scheduleInTicks(60, () => {
      WARNING.forEach(line => event.player.tell(line))
    })
  }
})