#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEFAULT_SERVER="$(cd "$SCRIPT_DIR/.." && pwd)"
DEFAULT_SOURCE="$HOME/.local/share/PrismLauncher/instances/Cube Warper/minecraft"

FULL_SYNC=0
if [ "${1:-}" = "--full" ]; then
    FULL_SYNC=1
    shift
fi

SOURCE="${1:-$DEFAULT_SOURCE}"
SERVER="${2:-$DEFAULT_SERVER}"

if [ ! -d "$SOURCE" ]; then
    echo "ERROR: Source Prism instance not found at: $SOURCE" >&2
    echo "Usage: $0 [--full] [source_minecraft_dir] [server_dir]" >&2
    exit 1
fi

if ! command -v rsync >/dev/null 2>&1; then
    echo "ERROR: 'rsync' is required. Install it via your package manager (e.g. sudo apt install rsync)." >&2
    exit 1
fi

echo "=== Syncing Cube Warper instance from '$SOURCE' to '$SERVER' ==="

mkdir -p \
    "$SERVER/_tools" \
    "$SERVER/_server-overrides/mods" \
    "$SERVER/_server-overrides/config" \
    "$SERVER/_server-overrides/defaultconfigs" \
    "$SERVER/_disabled_client_mods" \
    "$SERVER/_backups" \
    "$SERVER/mods"

sync_dir() {
    local src="$1"
    local dst="$2"
    shift 2
    if [ ! -d "$src" ]; then
        echo "Skipping missing source folder: $src"
        return
    fi
    mkdir -p "$dst"
    rsync -a --delete "$@" "$src/" "$dst/"
}

echo "1. Mirroring mods/ (*.jar only, excluding .connector)..."
sync_dir "$SOURCE/mods" "$SERVER/mods" --exclude='.connector/' --include='*.jar' --exclude='*'

if [ "$FULL_SYNC" -eq 1 ] || [ ! -d "$SERVER/kubejs/data" ]; then
    echo "2. Mirroring config/..."
    sync_dir "$SOURCE/config" "$SERVER/config"

    echo "3. Mirroring defaultconfigs/..."
    sync_dir "$SOURCE/defaultconfigs" "$SERVER/defaultconfigs"

    echo "4. Mirroring kubejs/ (excluding probe)..."
    sync_dir "$SOURCE/kubejs" "$SERVER/kubejs" --exclude='probe/'

    echo "5. Mirroring moonlight-global-datapacks/ and patchouli_books/..."
    sync_dir "$SOURCE/moonlight-global-datapacks" "$SERVER/moonlight-global-datapacks"
    sync_dir "$SOURCE/patchouli_books" "$SERVER/patchouli_books"
else
    echo "2-5. Preserving repository's patched kubejs/, config/, defaultconfigs/, and patchouli_books/ (pass --full to overwrite from client)."
fi

CLIENT_LIST_FILE="$SERVER/_tools/client-only-mods.txt"
if [ -f "$CLIENT_LIST_FILE" ]; then
    rm -f "$SERVER/_disabled_client_mods/"*.jar
    moved_count=0
    mapfile -t prefixes < <(sed 's/\r$//' "$CLIENT_LIST_FILE" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' | grep -vE '^(#|$)')
    shopt -s nullglob nocaseglob
    for jar in "$SERVER/mods/"*.jar; do
        jar_name="$(basename "$jar")"
        for prefix in "${prefixes[@]}"; do
            if [[ "${jar_name,,}" == "${prefix,,}"* ]]; then
                mv -f "$jar" "$SERVER/_disabled_client_mods/$jar_name"
                moved_count=$((moved_count + 1))
                break
            fi
        done
    done
    shopt -u nullglob nocaseglob
    echo "6. Moved $moved_count client-only mod jars to _disabled_client_mods/."
fi

echo "7. Applying _server-overrides/..."
if [ -d "$SERVER/_server-overrides" ]; then
    while IFS= read -r -d '' file; do
        rel_path="${file#"$SERVER/_server-overrides/"}"
        target_path="$SERVER/$rel_path"
        mkdir -p "$(dirname "$target_path")"
        cp -f "$file" "$target_path"
        echo "   Applied override: $rel_path"
    done < <(find "$SERVER/_server-overrides" -type f -print0)
fi

final_mod_count=$(find "$SERVER/mods" -maxdepth 1 -name '*.jar' | wc -l | tr -d ' ')
disabled_mod_count=$(find "$SERVER/_disabled_client_mods" -maxdepth 1 -name '*.jar' | wc -l | tr -d ' ')
echo "=== Sync Complete! Active server mods: $final_mod_count | Disabled client mods: $disabled_mod_count ==="
