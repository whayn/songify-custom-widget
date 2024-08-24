@echo off
SETLOCAL

:: Check if Node.js is installed
node -v >nul 2>&1
IF ERRORLEVEL 1 (
    echo Node.js is not installed.
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b
)

echo Node.js is installed.

:: Run the server
echo Starting the server...
node dist/server.js
IF ERRORLEVEL 1 (
    echo Failed to start the server.
    pause
    exit /b
)
@REM echo Server started. You can now close this window. To close the server, right click on the system tray icon and select "Exit".
pause

ENDLOCAL
