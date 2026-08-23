---
title: How To Use Cratty Icons
author: Intensed
---

# How to Use Cratty Icons

We are using Texturepacks to follow Minecraft's Unicode format. Unicodes are free from **E000 - F8FF**. Due to the fact that a lot of packs use custom Symbols in the `E000` Region, we only use `F800` and up, so we're compatible with most packs.

## Using Unicodes via SNBT and JSON
### About SNBT and JSON
SNBT stands for *Stringified NBT*, or NBT we can use and read. It is used (for example) for:
- /data
- Minecraft NBT
- storage

JSON is more commonly used especially in programming and texts. In Minecraft, JSON is used for:
- /tellraw
- /title
- pack.mcmeta

### Use Unicodes in JSON
We can use Unicodes in JSONs by following the `\u[UNICODE]` format. For Example: `\uF801`. We can put this into basic text. Also, JSON supports formatting, and so do the icons. We can change color, styles and more. Here are some Examples:

```mcfunction
/tellraw @a "\uF800 Using Cratty!"
```
Output:
[CRATTY-ICON] Using Cratty!

```mcfunction
/title @a actionbar {text:"\uF801",color:"green"}
```
Output:
[Green MODRINTH-ICON]
