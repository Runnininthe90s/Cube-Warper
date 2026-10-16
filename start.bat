@echo off
title Cube Warper Server (v1.12)
cd /d "%~dp0"

set "JAVA="
if exist "C:\Program Files (x86)\Minecraft Launcher\runtime\java-runtime-gamma\windows-x64\java-runtime-gamma\bin\javaw.exe" (
    set "JAVA=C:\Program Files (x86)\Minecraft Launcher\runtime\java-runtime-gamma\windows-x64\java-runtime-gamma\bin\javaw.exe"
)
if not defined JAVA (
    for /d %%D in ("C:\Program Files\Eclipse Adoptium\jdk-17*") do (
        if exist "%%D\bin\java.exe" set "JAVA=%%D\bin\java.exe"
    )
)
if not defined JAVA (
    if exist "%APPDATA%\PrismLauncher\java\java-runtime-gamma\bin\java.exe" (
        set "JAVA=%APPDATA%\PrismLauncher\java\java-runtime-gamma\bin\java.exe"
    )
)
if not defined JAVA (
    echo ERROR: Java 17 not found!
    pause
    exit /b 1
)

echo Using Java 17: "%JAVA%"
:loop
start /wait "" "%JAVA%" @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.20.1-47.4.23/win_args.txt nogui
echo Server stopped. Restarting in 10s (Ctrl+C to cancel)...
timeout /t 10
goto loop
