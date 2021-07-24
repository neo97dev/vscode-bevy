# Bevy Editor for VSCode

This is an **experimental** vscode extension to run a [Bevy](https://bevyengine.org) app within the [VSCode editor](https://code.visualstudio.com/).

## Demo

<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/e/5rl2we" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>

## Usage

First, you need to set up Bevy for WASM builds. See [this project template](https://github.com/mrk-its/bevy_webgl2_app_template) as an example.

Then, serve your compiled HTML file on `localhost:4000`. The Bevy Editor extension will render a fullscreen iFrame connected to this port.

To open the editor, open the Command Palette (Ctrl+Shift+P) and enter "start bevy editor".
