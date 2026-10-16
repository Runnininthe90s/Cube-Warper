param(
    [string]$Source = "$env:APPDATA\PrismLauncher\instances\Cube Warper\minecraft",
    [string]$Server = "$PSScriptRoot\..",
    [switch]$FullSync
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path $Source)) {
    throw "Source Prism instance not found at: $Source"
}

Write-Host "=== Syncing Cube Warper instance from '$Source' to '$Server' ===" -ForegroundColor Cyan

# Ensure server folders exist
$dirs = @(
    "$Server\_tools",
    "$Server\_server-overrides\mods",
    "$Server\_server-overrides\config",
    "$Server\_server-overrides\defaultconfigs",
    "$Server\_disabled_client_mods",
    "$Server\_backups",
    "$Server\mods"
)
foreach ($d in $dirs) {
    if (-not (Test-Path $d)) {
        New-Item -ItemType Directory -Path $d -Force | Out-Null
    }
}

# Helper for robocopy (robocopy exit codes 0-7 are success)
function Invoke-RobocopySync {
    param(
        [string]$SrcDir,
        [string]$DstDir,
        [string[]]$ExtraArgs = @()
    )
    if (-not (Test-Path $SrcDir)) {
        Write-Host "Skipping missing source folder: $SrcDir" -ForegroundColor Yellow
        return
    }
    $rcArgs = @($SrcDir, $DstDir, "/MIR", "/NFL", "/NDL", "/NJH", "/NJS", "/NP", "/R:2", "/W:1") + $ExtraArgs
    & robocopy @rcArgs | Out-Null
    if ($LASTEXITCODE -ge 8) {
        throw "Robocopy failed with exit code $LASTEXITCODE for $SrcDir -> $DstDir"
    }
}

Write-Host "1. Mirroring mods\ (*.jar only, excluding .connector)..."
Invoke-RobocopySync -SrcDir "$Source\mods" -DstDir "$Server\mods" -ExtraArgs @("*.jar", "/XD", ".connector")

if ($FullSync -or -not (Test-Path "$Server\kubejs\data")) {
    Write-Host "2. Mirroring config\..."
    Invoke-RobocopySync -SrcDir "$Source\config" -DstDir "$Server\config"

    Write-Host "3. Mirroring defaultconfigs\..."
    Invoke-RobocopySync -SrcDir "$Source\defaultconfigs" -DstDir "$Server\defaultconfigs"

    Write-Host "4. Mirroring kubejs\ (excluding probe)..."
    Invoke-RobocopySync -SrcDir "$Source\kubejs" -DstDir "$Server\kubejs" -ExtraArgs @("/XD", "probe")

    Write-Host "5. Mirroring moonlight-global-datapacks\ and patchouli_books\..."
    Invoke-RobocopySync -SrcDir "$Source\moonlight-global-datapacks" -DstDir "$Server\moonlight-global-datapacks"
    Invoke-RobocopySync -SrcDir "$Source\patchouli_books" -DstDir "$Server\patchouli_books"
} else {
    Write-Host "2-5. Preserving repository's patched kubejs\, config\, defaultconfigs\, and patchouli_books\ (pass -FullSync to overwrite from client)." -ForegroundColor Yellow
}

# Phase 3: Move client-only mods to _disabled_client_mods\
$clientListFile = "$Server\_tools\client-only-mods.txt"
if (Test-Path $clientListFile) {
    $prefixes = Get-Content $clientListFile | ForEach-Object { $_.Trim() } | Where-Object { $_ -and -not $_.StartsWith("#") }
    # Clear old disabled mods before moving fresh ones
    Remove-Item "$Server\_disabled_client_mods\*.jar" -Force -ErrorAction SilentlyContinue
    $movedCount = 0
    Get-ChildItem "$Server\mods\*.jar" | ForEach-Object {
        $jar = $_
        foreach ($prefix in $prefixes) {
            if ($jar.Name.StartsWith($prefix, [System.StringComparison]::OrdinalIgnoreCase)) {
                Move-Item -Path $jar.FullName -Destination "$Server\_disabled_client_mods\$($jar.Name)" -Force
                $movedCount++
                break
            }
        }
    }
    Write-Host "6. Moved $movedCount client-only mod jars to _disabled_client_mods\."
}

# Copy server-only overrides (mods, config, defaultconfigs, etc.)
Write-Host "7. Applying _server-overrides\..."
Get-ChildItem "$Server\_server-overrides" -Recurse -File | ForEach-Object {
    $relPath = $_.FullName.Substring("$Server\_server-overrides\".Length)
    $targetPath = Join-Path $Server $relPath
    $targetParent = Split-Path $targetPath -Parent
    if (-not (Test-Path $targetParent)) {
        New-Item -ItemType Directory -Path $targetParent -Force | Out-Null
    }
    Copy-Item -Path $_.FullName -Destination $targetPath -Force
    Write-Host "   Applied override: $relPath"
}

$finalModCount = (Get-ChildItem "$Server\mods\*.jar").Count
$disabledModCount = (Get-ChildItem "$Server\_disabled_client_mods\*.jar").Count
Write-Host "=== Sync Complete! Active server mods: $finalModCount | Disabled client mods: $disabledModCount ===" -ForegroundColor Green
