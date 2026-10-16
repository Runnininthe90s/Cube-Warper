param(
    [string]$Server = "c:\CubeWarperServer",
    [int]$Radius = 16
)

$ErrorActionPreference = "Stop"
$ticketsDir = "$Server\kubejs\data\hexahedron\functions\tickets"
if (-not (Test-Path $ticketsDir)) {
    throw "Tickets directory not found: $ticketsDir"
}

$dims = [System.Collections.Generic.List[string]]::new()
Get-ChildItem "$ticketsDir\ticket_*.mcfunction" | Sort-Object Name | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match "portal\s+set_portal_destination\s+(hexahedron:[a-z0-9_]+)") {
        $dim = $Matches[1]
        if ($dim -eq "hexahedron:dusk") { $dim = "hexahedron:the_dusk" }
        if (-not $dims.Contains($dim)) {
            $dims.Add($dim)
        }
    }
}

Write-Host "Found $($dims.Count) unique warp ticket dimensions." -ForegroundColor Cyan

$lines = [System.Collections.Generic.List[string]]::new()
$lines.Add("# Auto-generated Chunky pre-generation function (Radius: $Radius)")
foreach ($dim in $dims) {
    $lines.Add("chunky world $dim")
    $lines.Add("chunky center 0 0")
    $lines.Add("chunky shape square")
    $lines.Add("chunky radius $Radius")
    $lines.Add("chunky start")
}

$overrideFn = "$Server\_server-overrides\kubejs\data\hexahedron\functions\pregen_all.mcfunction"
$liveFn = "$Server\kubejs\data\hexahedron\functions\pregen_all.mcfunction"
New-Item -ItemType Directory -Path (Split-Path $overrideFn -Parent) -Force | Out-Null
$lines | Set-Content -Path $overrideFn -Encoding UTF8
$lines | Set-Content -Path $liveFn -Encoding UTF8

Write-Host "Wrote pregen_all.mcfunction with $($dims.Count) dimensions (radius $Radius)." -ForegroundColor Green
$dims
