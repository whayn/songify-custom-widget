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

:: Build the client
echo Building the client...
cd client || exit /b
call npm i
call npm run build
IF ERRORLEVEL 1 (
    echo Failed to build the client.
    pause
    exit /b
)
cd ..
echo Client built.

:: Build the server
echo Building the server...
call npx tsc
IF ERRORLEVEL 1 (
    echo Failed to build the server.
    pause
    exit /b
)
echo Server built.

@REM :: Check if the server is already running and terminate it
@REM echo Checking for existing server instance...
@REM for /f "tokens=2 delims=," %%i in ('tasklist /FI "IMAGENAME eq node.exe" /FO CSV /NH ^| findstr /I "dist\\server.js"') do (
@REM     echo Server is already running. Terminating the existing instance...
@REM     taskkill /F /PID %%i
@REM     IF ERRORLEVEL 1 (
@REM         echo Failed to terminate the existing server instance.
@REM         pause
@REM         exit /b
@REM     )
@REM     echo Existing server instance terminated.
@REM )

:: Run the server
echo Starting the server...
start "" /B wscript.exe launch-silent.vbs
IF ERRORLEVEL 1 (
    echo Failed to start the server.
    pause
    exit /b
)
echo Server started. You can now close this window. To close the server, right click on the system tray icon and select "Exit".
pause

ENDLOCAL
