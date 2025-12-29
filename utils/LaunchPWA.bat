@echo off
set "SCRIPT_DIR=%~dp0"
cd /d "%SCRIPT_DIR%"

echo Starting Server in background...
wscript.exe "%SCRIPT_DIR%launcher.vbs"

echo Opening PWA...
:: Wait a couple seconds for server to initialize
timeout /t 2 /nobreak > nul
start http://localhost:3000

exit
