# Server Mods Directory (`mods/`)

Third-party mod `.jar` files are not tracked directly in Git due to size (~530 MB) and CurseForge redistribution licensing.

## How to Populate `mods/`

### Option A: Automated Sync Script (Recommended)
Run the included sync script from the repository root to automatically copy all server-compatible `.jar` files from your local **Cube Warper** client instance, strip out client-only mods (moving them to `_disabled_client_mods/`), and inject server-side utilities from `_server-overrides/mods/` (such as `spark`):

**Windows (PowerShell):**
```powershell
.\_tools\sync-from-instance.ps1 -Source "C:\Path\To\Cube Warper\minecraft"
```

**Linux (Bash):**
```bash
chmod +x _tools/*.sh start.sh
./_tools/sync-from-instance.sh "/path/to/Cube Warper/minecraft"
```

### Option B: Manual Copy
If you copy the `mods/` folder manually from a client installation of Cube Warper, **you must remove the client-only mods** listed in [`_tools/client-only-mods.txt`](../_tools/client-only-mods.txt) before starting the dedicated server, or Forge will crash during mod loading:

- `AmbientSounds_*`
- `ae2retex-*`
- `BetterF3-*`
- `certain_questing_additions-*`
- `cleanswing-*`
- `continuity-*`
- `Controlling-*`
- `curiosity-*` *(Note: Remove `curiosity-*`, **keep** `curios-forge-*`!)*
- `DripSounds-*`
- `embeddium-*`
- `entity_model_features*`
- `entity_texture_features-*`
- `ExtremeSoundMuffler-*`
- `fancymenu_*`
- `konkrete_*`
- `melody_*`
- `ImmediatelyFast-*`
- `moreoverlays-*`
- `MouseTweaks-*`
- `ResourcePackOverrides-*`
- `Searchables-*`
- `soundofrain-*`
- `visuality-*`

Also delete the `mods/.connector/` cache directory if present so Sinytra Connector regenerates it cleanly for the dedicated server environment.
