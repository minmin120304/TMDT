$ErrorActionPreference = 'Stop'

function Start-Client {
  param(
    [Parameter(Mandatory)][string]$Path
  )
  Start-Process -FilePath "powershell" -ArgumentList "-NoExit", "-Command", "cd `"$Path`"; if (Test-Path package.json) { npm run dev } else { Write-Host 'package.json not found' -ForegroundColor Yellow }"
}

Write-Host "Starting all dev servers..." -ForegroundColor Cyan

Start-Client -Path "$PSScriptRoot\client-customer"
Start-Client -Path "$PSScriptRoot\client-seller"
Start-Client -Path "$PSScriptRoot\client-administrator"

Write-Host "Launched 3 terminals. Press Ctrl+C to stop this script window." -ForegroundColor Green

