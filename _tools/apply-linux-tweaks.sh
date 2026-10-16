#!/usr/bin/env bash
# Run this script on Linux to open TCP port 25565 in your active firewall (ufw, firewalld, or iptables)
set -euo pipefail

if [ "${EUID:-$(id -u)}" -ne 0 ]; then
    echo "Requesting sudo privileges to configure Linux firewall rules for TCP 25565..."
    exec sudo bash "$0" "$@"
fi

PORT=25565

if command -v ufw >/dev/null 2>&1 && ufw status | grep -q "Status: active"; then
    echo "1. Allowing TCP $PORT in UFW..."
    ufw allow "$PORT/tcp" comment "MC CubeWarper"
    ufw reload
elif command -v firewall-cmd >/dev/null 2>&1 && systemctl is-active --quiet firewalld; then
    echo "1. Allowing TCP $PORT in firewalld..."
    firewall-cmd --permanent --add-port="${PORT}/tcp"
    firewall-cmd --reload
elif command -v iptables >/dev/null 2>&1; then
    echo "1. Ensuring TCP $PORT is allowed in iptables INPUT chain..."
    if ! iptables -C INPUT -p tcp --dport "$PORT" -j ACCEPT 2>/dev/null; then
        iptables -I INPUT -p tcp --dport "$PORT" -j ACCEPT
    fi
else
    echo "No active firewall manager (ufw/firewalld/iptables) detected; TCP $PORT is already unblocked locally."
fi

echo "Done! Linux firewall rule for TCP $PORT (MC CubeWarper) is active."
