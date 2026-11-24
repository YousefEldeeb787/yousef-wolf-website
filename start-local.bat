@echo off
cd /d "%~dp0"
echo Starting the WOLF portfolio at http://localhost:3000
start "" http://localhost:3000
node local-server.js
pause
