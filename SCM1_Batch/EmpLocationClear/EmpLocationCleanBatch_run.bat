@echo off

rem
rem 3�b���Node.js�̃t�@�C����Powershell�Ŏ��s����
rem

timeout 1

start "app" "%SystemRoot%\system32\WindowsPowerShell\v1.0\powershell.exe" "node EmpLocationCleanBatch.js"

exit