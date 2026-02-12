
$ErrorActionPreference = "Stop"

$keyPath = "$env:USERPROFILE\.ssh\id_ed25519"
$pubKeyPath = "$keyPath.pub"

Write-Host "Checking for existing key at $keyPath"

if (-not (Test-Path $keyPath)) {
    Write-Host "Generating new SSH key..."
    # Use Start-Process to handle arguments precisely
    $process = Start-Process ssh-keygen -ArgumentList "-t", "ed25519", "-C", "agent@antigravity.ai", "-f", $keyPath, "-N", '""' -NoNewWindow -PassThru -Wait
    
    if ($process.ExitCode -ne 0) {
        Write-Error "ssh-keygen failed with exit code $($process.ExitCode)"
    }
}
else {
    Write-Host "SSH key already exists."
}

# Try to start ssh-agent
try {
    $service = Get-Service ssh-agent
    if ($service.Status -ne 'Running') {
        Write-Host "Starting ssh-agent..."
        Start-Service ssh-agent
    }
}
catch {
    Write-Warning "Could not start ssh-agent. You might need to run as Administrator. Using key file directly."
}

if (Test-Path $pubKeyPath) {
    echo "PUBLIC_KEY_START"
    Get-Content $pubKeyPath
    echo "PUBLIC_KEY_END"
}
else {
    Write-Error "Public key file not found!"
}
