# Cube Warper — Multiplayer & Dedicated Server Edition

[![Minecraft](https://img.shields.io/badge/Minecraft-1.20.1-brightgreen.svg)](https://www.minecraft.net/)
[![Forge](https://img.shields.io/badge/Forge-47.4.23-orange.svg)](https://files.minecraftforge.net/net/minecraftforge/forge/index_1.20.1.html)
[![Modpack](https://img.shields.io/badge/Cube%20Warper-v1.12-blue.svg)](https://www.curseforge.com/minecraft/modpacks/cube-warper)

This repository is a community fork of [Appocryptha/Cube-Warper](https://github.com/Appocryptha/Cube-Warper). It contains the full **v1.12** modpack data and scripts (`kubejs`), critical bugfixes for multiplayer servers, and ready-to-use launch and administration tooling for both **Linux** and **Windows** dedicated servers.

---

## 🌟 Key Enhancements in this Fork

### 1. Outside-Player Warp Crash Fix (`ConcurrentModificationException`)
* **The Bug:** In vanilla Cube Warper, if a player is standing outside the Hexahedron in an exploratory dimension while a teammate triggers a warp via the Launch Button, the outside player's client crashes with `java.util.ConcurrentModificationException` inside Immersive Portals (`ClientWorldLoader.tick()`).
* **The Fix:** Outer reverse portals and cluster links (`bindCluster:false`) are immediately severed at `pre_runtime=1` (when the Launch Button is pressed), and `ticket_selection` is adjusted to tick 85 so Immersive Portals cleanly unloads overworld chunk tracking from outside clients before the new destination is set.
* **Configurable Warp Behavior (`config/cubewarper-server.json`):**
  * `leave_behind` *(Default)*: Outer portals close safely when launch starts; outside players stay unharmed in their current dimension.
  * `teleport_inside`: Automatically pulls all players across all dimensions back inside the Hexahedron before departure.
  * In-game commands: `!warpmode [leave_behind|teleport_inside|status]` or `/function hexahedron:settings/[leave_behind|teleport_inside|status]`.

### 2. Late-Joiner & Respawn Fix
* Brand new players joining an active server after the cube has already launched (`world_start == 1`), as well as players who logged out during the intro sequence, are automatically detected and safely teleported into the Hexahedron room (`0.5, 98, 6.5`) instead of dropping into the void in `hexahedron:bedrock_bottom`.

### 3. Dimension Pre-Generation Tooling
* Includes `_tools/pregen-dimensions.ps1` and `_tools/pregen-dimensions.sh` alongside [`kubejs/data/hexahedron/functions/pregen_all.mcfunction`](kubejs/data/hexahedron/functions/pregen_all.mcfunction) to pre-generate all 32+ warp dimensions using Chunky to eliminate warp lag.

### 4. True Dedicated Server Root Layout (Linux + Windows)
* Unlike the upstream repo (which only tracks the contents of `kubejs/` at the top level), this fork is structured as a **complete Minecraft server root directory**:
  * `kubejs/` — All KubeJS scripts, assets, and Hexahedron datapacks (including multiplayer crash fixes)
  * `config/` & `defaultconfigs/` — Server-ready configurations (with client-only bloat removed)
  * `patchouli_books/` & `moonlight-global-datapacks/` — Modpack guidebooks and global datapack directories
  * `mods/` — Includes [`mods/README.md`](mods/README.md) and is populated automatically via `_tools/sync-from-instance`
  * `start.sh` (Linux) & `start.bat` (Windows) — Auto-restart launch scripts with Java 17 auto-detection and G1GC tuning (`user_jvm_args.txt`)
  * `_tools/` — Sync scripts (`sync-from-instance.sh`/`.ps1`), client-only mod filter (`client-only-mods.txt`), dimension pregen scripts, and firewall helpers

---

## 🚀 Setting Up a Dedicated Server

### Prerequisites
* **Java 17 (64-bit)** (e.g. Eclipse Adoptium Temurin 17 or OpenJDK 17).
* 8 GB – 12 GB RAM allocated to the server.
* An installed client instance of **Cube Warper v1.12** (via Prism Launcher, CurseForge, or ATLauncher) to copy the mod `.jar` files from.

### Installation (Linux & Windows)

1. **Clone this repository into your server directory:**
   ```bash
   git clone https://github.com/Runnininthe90s/Cube-Warper.git server
   cd server
   ```

2. **Sync the mod `.jar` files from your client instance:**
   * **Linux:**
     ```bash
     chmod +x start.sh _tools/*.sh
     ./_tools/sync-from-instance.sh "$HOME/.local/share/PrismLauncher/instances/Cube Warper/minecraft" .
     ```
   * **Windows (PowerShell):**
     ```powershell
     .\_tools\sync-from-instance.ps1 -Source "$env:APPDATA\PrismLauncher\instances\Cube Warper\minecraft" -Server "."
     ```
   *(This populates `mods/`, strips client-only mods like Embeddium, FancyMenu, Continuity, Curiosity, and ETF listed in `_tools/client-only-mods.txt`, and preserves this repository's patched `kubejs/` and `config/` files. See [`mods/README.md`](mods/README.md) if copying `mods/` manually).*

3. **Install the Forge Server binary:**
   Download the official Forge `1.20.1-47.4.23` installer and run:
   ```bash
   java -jar forge-1.20.1-47.4.23-installer.jar --installServer .
   ```

4. **Accept EULA & Configure:**
   * Create `eula.txt`:
     ```text
     eula=true
     ```
   * Ensure `enable-command-block=true` in `server.properties` (required by the modpack).

5. **Start the server:**
   * **Linux:** `./start.sh`
   * **Windows:** Double-click `start.bat`

---

## ⚙️ Configuration & Server Settings

### Warp Player Handling
Edit `config/cubewarper-server.json`:
```json
{
  "outsidePlayersOnWarp": "leave_behind",
  "_options": [
    "leave_behind",
    "teleport_inside"
  ]
}
```
* Can also be changed live in-game by server operators via chat:
  ```text
  !warpmode leave_behind
  !warpmode teleport_inside
  !warpmode status
  ```

---

## 👥 Multiplayer House Rules & Tips

1. **One Unified FTB Team:** The Hexahedron is shared globally across the server. All players should join a single party so quests and chunk claims stay in sync:
   ```text
   /ftbteams party create CubeCrew
   /ftbteams party invite <player>
   ```
2. **Announce Before Warping:** When leaving players behind is enabled, players stranded in exploratory dimensions can return to the Hexahedron using a **Portal Lantern** (`kubejs:portal_lantern`).
3. **Claiming & Force-Loading:** Use FTB Chunks (`M` key) to claim factory machinery, but un-force chunks in dimensions you are no longer using to keep TPS pinned at 20.0.

---

## 📜 Credits & License
* Original modpack and concept by **[Appocryptha](https://github.com/Appocryptha)**.
* Check out the official modpack on [CurseForge](https://www.curseforge.com/minecraft/modpacks/cube-warper).
* **Special Thanks to our Playtesters:** A huge thank you to **Beefy_Spawn**, **HunterTheGnome**, and **MeowingtonHaxor** for braving the void, stress-testing warp dimensions, and helping isolate multiplayer edge cases!
