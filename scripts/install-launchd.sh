#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PLIST="$HOME/Library/LaunchAgents/com.momo.ai-trust-frontier.plist"

mkdir -p "$HOME/Library/LaunchAgents"

cat > "$PLIST" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.momo.ai-trust-frontier</string>
  <key>ProgramArguments</key>
  <array>
    <string>$ROOT/scripts/run-nightly-research.sh</string>
  </array>
  <key>WorkingDirectory</key>
  <string>$ROOT</string>
  <key>StartCalendarInterval</key>
  <dict>
    <key>Hour</key>
    <integer>1</integer>
    <key>Minute</key>
    <integer>15</integer>
  </dict>
  <key>StandardOutPath</key>
  <string>$ROOT/logs/nightly/launchd.out.log</string>
  <key>StandardErrorPath</key>
  <string>$ROOT/logs/nightly/launchd.err.log</string>
  <key>RunAtLoad</key>
  <false/>
</dict>
</plist>
PLIST

chmod +x "$ROOT/scripts/run-nightly-research.sh"
launchctl unload "$PLIST" >/dev/null 2>&1 || true
launchctl load "$PLIST"

echo "Installed $PLIST"
