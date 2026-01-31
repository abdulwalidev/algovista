@echo off
setlocal EnableDelayedExpansion

REM ===== PATHS =====
set SOURCE=C:\Users\X1 Carbon\Desktop\algoHTML\sorting
set DEST=C:\Users\X1 Carbon\Desktop\algo_react\algovista\html version\fn
set GITROOT=C:\Users\X1 Carbon\Desktop\algo_react\algovista

REM ===== GO TO GIT ROOT =====
cd /d "%GITROOT%"

IF NOT EXIST ".git" (
    echo ERROR: Git repo not found
    pause
    exit /b
)

REM ===== SYNC WITH REMOTE ONCE =====
git pull --rebase
IF ERRORLEVEL 1 (
    echo Git pull failed
    pause
    exit /b
)

REM ===== COPY + COMMIT + PUSH (ONE FILE AT A TIME) =====
for /r "%SOURCE%" %%F in (*) do (

    set "REL=%%F"
    set "REL=!REL:%SOURCE%=!"

    if not exist "%DEST%!REL!\.." (
        mkdir "%DEST%!REL!\.." >nul 2>&1
    )

    copy "%%F" "%DEST%!REL!" /Y >nul
    echo Copied: !REL!

    git add .
    git commit --allow-empty-message -m ""
    IF ERRORLEVEL 1 (
        echo Commit failed
        pause
        exit /b
    )

    git push
    IF ERRORLEVEL 1 (
        echo Push failed — stopping
        pause
        exit /b
    )

    echo Uploaded to GitHub
    echo ------------------------
)

echo ALL FILES DONE SUCCESSFULLY
pause
