// Cube Warper Multiplayer Warp Settings
// Configurable via config/cubewarper-server.json, /function hexahedron:settings/*, or in-game chat: !warpmode

const WARP_CONFIG_PATH = 'config/cubewarper-server.json'
let lastKnownFileMode = null

function loadWarpConfig(server) {
  let cfg = JsonIO.read(WARP_CONFIG_PATH)
  if (!cfg || !cfg.outsidePlayersOnWarp) {
    cfg = {
      outsidePlayersOnWarp: 'leave_behind',
      _options: ['leave_behind', 'teleport_inside'],
      _comment: "Controls what happens to players outside the Hexahedron when the Launch Button is pressed. 'leave_behind' (default) safely severs the outer portals so outside players don't crash and stay in that dimension. 'teleport_inside' pulls all outside players back into the Hexahedron when the warp starts."
    }
    JsonIO.write(WARP_CONFIG_PATH, cfg)
  }
  let mode = String(cfg.outsidePlayersOnWarp).toLowerCase()
  if (mode !== lastKnownFileMode && server) {
    lastKnownFileMode = mode
    let score = (mode === 'teleport_inside' || mode === 'all_aboard' || mode === '1' || mode === 'true') ? 1 : 0
    server.runCommandSilent('scoreboard objectives add hex_settings dummy')
    server.runCommandSilent(`scoreboard players set warp_pull_players hex_settings ${score}`)
  }
  return mode
}

function saveWarpConfig(server, mode) {
  let normalized = (mode === 'teleport_inside' || mode === 'all_aboard' || mode === '1') ? 'teleport_inside' : 'leave_behind'
  let cfg = {
    outsidePlayersOnWarp: normalized,
    _options: ['leave_behind', 'teleport_inside'],
    _comment: "Controls what happens to players outside the Hexahedron when the Launch Button is pressed. 'leave_behind' (default) safely severs the outer portals so outside players don't crash and stay in that dimension. 'teleport_inside' pulls all outside players back into the Hexahedron when the warp starts."
  }
  JsonIO.write(WARP_CONFIG_PATH, cfg)
  lastKnownFileMode = normalized
  if (server) {
    server.runCommandSilent(`function hexahedron:settings/${normalized}`)
  }
}

ServerEvents.loaded(event => {
  loadWarpConfig(event.server)
})

BlockEvents.rightClicked('kubejs:launch_button', event => {
  loadWarpConfig(event.server)
})

PlayerEvents.chat(event => {
  let msg = event.message.trim()
  if (!msg.startsWith('!warpmode')) return

  let parts = msg.split(/\s+/)
  if (parts.length === 1 || parts[1] === 'status') {
    event.player.runCommandSilent('function hexahedron:settings/status')
    event.cancel()
    return
  }

  if (!event.player.op) {
    event.player.tell(Text.red('[Hexahedron] Only server operators can change the warp mode.'))
    event.cancel()
    return
  }

  let arg = parts[1].toLowerCase()
  if (arg === 'leave_behind' || arg === 'leave' || arg === '0') {
    saveWarpConfig(event.server, 'leave_behind')
  } else if (arg === 'teleport_inside' || arg === 'teleport' || arg === 'all_aboard' || arg === '1') {
    saveWarpConfig(event.server, 'teleport_inside')
  } else {
    event.player.tell(Text.yellow('[Hexahedron] Usage: !warpmode [leave_behind | teleport_inside | status]'))
  }
  event.cancel()
})
