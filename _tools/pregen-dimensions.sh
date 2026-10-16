#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEFAULT_SERVER="$(cd "$SCRIPT_DIR/.." && pwd)"

SERVER="${1:-$DEFAULT_SERVER}"
RADIUS="${2:-16}"

TICKETS_DIR="$SERVER/kubejs/data/hexahedron/functions/tickets"
if [ ! -d "$TICKETS_DIR" ]; then
    echo "ERROR: Tickets directory not found: $TICKETS_DIR" >&2
    exit 1
fi

declare -a dims=()
declare -A seen=()

for file in "$TICKETS_DIR"/ticket_*.mcfunction; do
    [ -f "$file" ] || continue
    dim=$(grep -oE 'portal[[:space:]]+set_portal_destination[[:space:]]+hexahedron:[a-z0-9_]+' "$file" | awk '{print $3}' | head -n 1 || true)
    if [ -n "$dim" ]; then
        if [ "$dim" = "hexahedron:dusk" ]; then
            dim="hexahedron:the_dusk"
        fi
        if [ -z "${seen[$dim]+x}" ]; then
            seen["$dim"]=1
            dims+=("$dim")
        fi
    fi
done

echo "Found ${#dims[@]} unique warp ticket dimensions."

OVERRIDE_FN="$SERVER/_server-overrides/kubejs/data/hexahedron/functions/pregen_all.mcfunction"
LIVE_FN="$SERVER/kubejs/data/hexahedron/functions/pregen_all.mcfunction"
mkdir -p "$(dirname "$OVERRIDE_FN")" "$(dirname "$LIVE_FN")"

{
    echo "# Auto-generated Chunky pre-generation function (Radius: $RADIUS)"
    for dim in "${dims[@]}"; do
        echo "chunky world $dim"
        echo "chunky center 0 0"
        echo "chunky shape square"
        echo "chunky radius $RADIUS"
        echo "chunky start"
    done
} > "$OVERRIDE_FN"

cp -f "$OVERRIDE_FN" "$LIVE_FN"

echo "Wrote pregen_all.mcfunction with ${#dims[@]} dimensions (radius $RADIUS)."
printf '%s\n' "${dims[@]}"
