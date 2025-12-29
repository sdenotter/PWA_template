Set WshShell = CreateObject("WScript.Shell")
' Run pm2 resurrect in a hidden window (0)
WshShell.Run "pm2 resurrect", 0, True
