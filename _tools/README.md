# Cube Warper — Dedicated Server Guide & House Rules

## Connecting to the Server

### For the Host
- In Multiplayer → Add Server, use Server Address:
  `
  localhost
  `

### For Friends (Connecting from Outside)
1. Install **Cube Warper** via the **CurseForge App** or **Prism Launcher**.
   - **Important:** Ensure you are using **Cube Warper v1.12** (Minecraft 1.20.1, Forge 47.4.23).
2. In your launcher settings, allocate **8 GB to 12 GB of RAM** (8192 MB – 12288 MB) to the instance.
3. Launch the game → **Multiplayer** → **Add Server** → enter your server's domain or public IP:
   `
   play.yourdomain.com:25565
   `
4. Ensure the server admin has added your Minecraft username to the whitelist (/whitelist add <username>).

---

## Multiplayer Setup & House Rules

1. **Join One Shared FTB Team**
   - Because the Hexahedron cube and its warps are shared globally, all players should join a single FTB Team so quest progress and chunk claims are shared:
     - Host runs: /ftbteams party create CubeCrew
     - Host invites each player: /ftbteams party invite <player>
     - Players accept via /ftbteams party join CubeCrew or the FTB Teams UI icon in their inventory.

2. **Announce Before Warping!**
   - Activating a Warp Ticket moves the cube's outer portals to a new dimension immediately, even if a teammate is outside exploring!
   - Always call out in chat/voice before inserting a ticket or warping.
   - **If You Get Stranded Outside:** Use a **Portal Lantern** (kubejs:portal_lantern) to return to the cube, or ask an admin to run:
     `
     /execute in minecraft:overworld run tp <player> 0.5 99 2.5
     `

3. **Force-Loaded Chunks Etiquette**
   - Remote-dimension factories (Create, Mekanism, AE2) only run when their chunks are force-loaded via FTB Chunks.
   - Only force-load the specific chunks your active machines occupy, and un-force chunks in dimensions you are no longer harvesting from to keep server TPS at a locked 20.0.

---

## Admin Operations & Updating the Pack

- **Start the Server:**
  - **Linux:** ./start.sh
  - **Windows:** Double-click start.bat
- **Stop the Server Safely:** Type stop in the server console window.
- **Check Server Health:** Run /spark tps or /spark profiler --timeout 120 in-game or from the console.
- **Backups:** Automatic backups run every 60 minutes into _backups/. You can trigger an immediate backup anytime with /simplebackups backup start.