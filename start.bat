@echo off
title Cube Warper Server (v1.12)
cd /d "%~dp0"

set "JAVA=java"

rem Java-Version check
for /f "tokens=3" %%V in ('java -version 2^>^&1 ^| findstr /i "version"') do set "JAVA_VERSION=%%V"
set "JAVA_VERSION=%JAVA_VERSION:"=%"

for /f "tokens=1 delims=." %%M in ("%JAVA_VERSION%") do set "JAVA_MAJOR=%%M"

rem Checking for J17 or newer
if %JAVA_MAJOR% LSS 17 (
    echo ERROR: Java 17 or newer is required.
    echo Found Java version: %JAVA_VERSION%
    echo Please install Java 17+ and make sure it is available in PATH.
    pause
    exit /b 1
)

echo Using Java %JAVA_VERSION%

:loop
start /wait "" "%JAVA%" @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.20.1-47.4.23/win_args.txt nogui
echo Server stopped. Restarting in 10s (Ctrl+C to cancel)...
timeout /t 10
goto loop