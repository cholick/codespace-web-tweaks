# Codespace Web Tweaks

## Background

Chromes extension security model is... pretty crazy. An extension doing anything
interesting needs to "Read and modify your data" on all sites. Toss in things like
[Chrome extensions being maliciously hijacked](https://thehackernews.com/2017/08/chrome-extension-hacking.html),
and minimizing the number installed seems prudent.

As it turns out, it only takes a tiny bit of scaffolding to wrap up scripts that I would otherwise use something like
[tampermonkey](http://tampermonkey.net/) anyway, so there's minimal inconvenience.

## Functionality

* Adds a conformation to `⌘ + w`. I keep getting into the flow of things and trying to close editor tabs with the hotkey,
  which kills the whole Codespace. (VSCode closed as wont-fix: https://github.com/microsoft/vscode/issues/197731)

## Use

Releasing an extension to the Chrome web store is a hassle, so anyone wanting to use this extension should clone and
[load unpacked](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked).
