#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

JAVA_BIN=""

if command -v java >/dev/null 2>&1; then
    JAVA_VERSION="$(java -version 2>&1 | head -n1 | grep -oP '(?<=version ")[^"]+')"
    JAVA_MAJOR="${JAVA_VERSION%%.*}"

    if [ "$JAVA_MAJOR" -ge 17 ]; then
        JAVA_BIN="java"
    fi
fi

if [ -z "$JAVA_BIN" ]; then
    echo "ERROR: Java 17 or newer is required." >&2
    echo "Please install it, e.g.: sudo apt install openjdk-17-jre-headless" >&2
    exit 1
fi

echo "Using Java $JAVA_VERSION"

while true; do
    "$JAVA_BIN" @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.20.1-47.4.23/unix_args.txt nogui "$@"
    echo "Server stopped. Restarting in 10s (Ctrl+C to cancel)..."
    sleep 10
done