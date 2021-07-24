// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode"

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "vscode-bevy" is now active!')

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand("vscode-bevy.start", () => {
    const panel = vscode.window.createWebviewPanel(
      "vscode-bevy",
      "Bevy Editor",
      vscode.ViewColumn.Two,
      {
        enableScripts: true,
      }
    )

    panel.webview.html = getWebviewContent()
  })

  context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() {}

function getWebviewContent() {
  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Test Layout</title>
        <style type="text/css">
            body, html
            {
                margin: 0; padding: 0; height: 100%; overflow: hidden;
            }

            #content
            {
                position:absolute; left: 0; right: 0; bottom: 0; top: 0px; 
            }
        </style>
    </head>
    <body>
        <div id="content">
            <iframe width="100%" height="100%" frameborder="0" src="http://localhost:4000"></iframe>
        </div>
    </body>
</html>

	`
}
