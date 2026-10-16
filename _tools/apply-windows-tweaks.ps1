# Run this script to add the Windows Defender exclusion and Windows Firewall inbound rules across ALL profiles (Domain/WireGuard, Private, Public)
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Host "Requesting Administrator privileges to configure Windows Defender & Firewall..." -ForegroundColor Cyan
    Start-Process powershell.exe -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs -Wait
    exit
}

Write-Host "1. Adding Microsoft Defender exclusion for c:\CubeWarperServer..." -ForegroundColor Cyan
Add-MpPreference -ExclusionPath "c:\CubeWarperServer"

Write-Host "2. Adding Windows Firewall Inbound Rule (TCP 25565 - MC CubeWarper) for ALL profiles (including WireGuard Domain profile)..." -ForegroundColor Cyan
Remove-NetFirewallRule -DisplayName "MC CubeWarper" -ErrorAction SilentlyContinue
New-NetFirewallRule -DisplayName "MC CubeWarper" -Direction Inbound -Protocol TCP -LocalPort 25565 -Profile Any -Action Allow | Out-Null

Write-Host "3. Updating OpenJDK Platform binary firewall rules to allow ALL profiles (Domain, Private, Public)..." -ForegroundColor Cyan
Get-NetFirewallApplicationFilter | Where-Object { $_.Program -match "adoptium" } | ForEach-Object {
    Get-NetFirewallRule -AssociatedNetFirewallApplicationFilter $_ | Set-NetFirewallRule -Profile Any
}

Write-Host "Done! Windows Defender exclusion and WireGuard/Firewall rules are active." -ForegroundColor Green
Start-Sleep -Seconds 3
