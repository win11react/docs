# Add an App

First, please make sure the site accepts IFrame. You can check this by inserting the sites URL into this: [IFrame checker](https://www.tinywebgallery.com/blog/advanced-iframe/free-iframe-checker)

## Ways to add an app to the store

### Using Github issues

Create an [Issue](https://github.com/win11react/store/issues/new/choose) and follow the given steps.

### Via Github Pull Request

Make a pull request by editing the [store.json](https://github.com/win11react/store/blob/main/store/index.json) file

Read the schema below, **BEFORE** adding any game/app element into the `store.json` file:

```json
{
  "name": "Minecraft", // unique name (check if it has been used already in the file)
  "icon": "https://example.com/minecraft.png", // logo image, preferrably 1:1 and less than 128px of width
  "type": "game", // game or app
  "data": {
    "type": "IFrame", // type currently supports IFrame only
    "url": "https://classic.minecraft.net", // url of the app and make sure they accept Iframe
    "gallery": [
      // three or more images for gallery view in store app
      "https://www.minecraft.net/content/dam/games/minecraft/key-art/CavesandCliffsPt1-dotNET-HomepagePromo-600x360.png",
      "https://variety.com/wp-content/uploads/2019/02/minecraft-best-year-yet.png?w=600",
      "https://www.minecraft.net/content/dam/games/minecraft/screenshots/RayTracing-MineCraft-PMP-Always-Something-New.jpg"
    ],
    "desc": "Minecraft is a sandbox construction video game ...", // description for store app
    "feat": "1.1 Combat changes.\n1.2 Fletching table functionality.", // features for store app
    "invert": true // when true it forces dark theme for game/app window, default is false.
  }
}
```

:::caution
### PLEASE REMOVE THE COMMENTS FROM YOUR JSON, BEFORE MAKING A PULL REQUEST
**Comments look like this: `// example text`**

:::


Add your game/app in the file (don't beautify the code, just add your game/app element) and make a pull request to get it **potentially** accepted.
