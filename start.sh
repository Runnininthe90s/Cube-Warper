#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

JAVA_BIN=""
if command -v java >/dev/null 2>&1 && java -version 2>&1 | grep -q 'version "17\.'; then
    JAVA_BIN="java"
else
    for candidate in \
        /usr/lib/jvm/java-17-openjdk*/bin/java \
        /usr/lib/jvm/temurin-17*/bin/java \
        /usr/lib/jvm/jdk-17*/bin/java \
        "$HOME/.local/share/PrismLauncher/java"/*/bin/java; do
        if [ -x "$candidate" ]; then
            JAVA_BIN="$candidate"
            break
        fi
    done
fi

if [ -z "$JAVA_BIN" ]; then
    echo "ERROR: Java 17 not found! Install OpenJDK 17 (e.g., sudo apt install openjdk-17-jre-headless)." >&2
    exit 1
fi

echo "Using Java 17: $JAVA_BIN"
while true; do
    "$JAVA_BIN" @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.20.1-47.4.23/unix_args.txt nogui "$@"
    echo "Server stopped. Restarting in 10s (Ctrl+C to cancel)..."
    sleep 10
done
