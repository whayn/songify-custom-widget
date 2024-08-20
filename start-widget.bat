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
pause

:: Check if npm is installed
@REM npm -v >nul 2>&1
@REM IF ERRORLEVEL 1 (
@REM     echo npm is not installed.
@REM     echo Please install Node.js and npm from https://nodejs.org/
@REM     pause
@REM     exit /b
@REM )
@REM echo npm is installed.
@REM pause

:: Install project dependencies
echo Installing dependencies...
call npm install
IF ERRORLEVEL 1 (
    echo Failed to install dependencies.
    pause
    exit /b
)
echo Dependencies installed.
pause

:: Build the client
echo Building the client...
cd client || exit /b
call npm run build
IF ERRORLEVEL 1 (
    echo Failed to build the client.
    pause
    exit /b
)
cd ..
echo Client built.

:: Run the server
echo Starting the server...
node dist/server.js
IF ERRORLEVEL 1 (
    echo Failed to start the server.
    pause
    exit /b
)
echo Server started.

ENDLOCAL
