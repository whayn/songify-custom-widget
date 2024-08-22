Dim objShell, fso, scriptPath, distPath

' Create the FileSystemObject and Shell object
Set fso = CreateObject("Scripting.FileSystemObject")
Set objShell = WScript.CreateObject("WScript.Shell")

' Get the path of the current script
scriptPath = fso.GetParentFolderName(WScript.ScriptFullName)

' Construct the full path to the dist/server.js file
distPath = fso.BuildPath(scriptPath, "dist\server.js")

' Run the Node.js server
objShell.Run """node"" """ & distPath & """", 0

WScript.Echo "Server started"

' Clean up
Set fso = Nothing
