# Bevy Editor for VSCode

This is an **experimental** vscode extension to run a [Bevy](https://bevyengine.org) app within the [VSCode editor](https://code.visualstudio.com/).

## Demo

[![5rl2we-1](https://user-images.githubusercontent.com/87893492/126881219-2a582e3b-36cb-4f62-877f-3c9ce719c88b.gif)](https://streamable.com/5rl2we)


## Usage

First, you need to set up Bevy for WASM builds. See [this project template](https://github.com/mrk-its/bevy_webgl2_app_template) as an example.

Then, serve your compiled HTML file on `localhost:4000`. The Bevy Editor extension will render a fullscreen iFrame connected to this port.

To open the editor, open the Command Palette (Ctrl+Shift+P) and enter "start bevy editor".

## License

Licensed under either of

 * Apache License, Version 2.0
   ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
 * MIT license
   ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.

## Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the Apache-2.0 license, shall be
dual licensed as above, without any additional terms or conditions.
