Set WshShell = CreateObject("WScript.Shell")
' Run npm start (which executes "serve .") in a hidden window (0)
' The False argument means the script doesn't wait for the server to finish
WshShell.Run "npm start", 0, False
