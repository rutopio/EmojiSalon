<div align="center">

<h1>🪄 Emoji Salon - Coloring Your Emoji</h1>

🔗 https://emojisalon.art 🔗

[![Netlify Status](https://api.netlify.com/api/v1/badges/875f191b-0b50-46c8-966a-49fa4f20b6fe/deploy-status)](https://app.netlify.com/sites/elegant-mccarthy-ce9195/deploys)

![](src/image/social.png)

**Emoji Salon** allows you to customize the colors of emojis,<br> just like dressing them up by various cosmetics or coloring them by different paints.

</div>

## Emoji Series

- [Twemoji-colr / Created by Twitter & Modified by Mozilla](https://github.com/mozilla/twemoji-colr): `COLR/CPAL v0`
  - *Stable.* Current website and `main` branch.
- [Noto Color Emoji / Google Font](https://fonts.google.com/noto/specimen/Noto+Color+Emoji): `COLR/CPAL v1`
  - *Experimental.* Switch to `with-Noto-Emoji` branch.


## Browser Compatibility

- Have been tested on my own devices:

|   | Chrome | Edge | FireFox | Safari | Brave |
| ---:|:----:|:----:|:----:|:----:|:----:|
| Version  | 117.0 | 117.0 | 117.0.1 | 16.0 | 1.58.131 |
|Twemoji| ✅ | ✅ | 🟠 * | ✅ | ✅ |
|Noto Color Emoji| ✅ | ✅ | 🟠 * | ❌ ** | ✅ | 

| |Chrome on iOS | Safari on iOS | Chrome on Android |
| ---:|:----:|:----:|:----:|
|Version| 100.0 / iOS 16.5 | 16.5 / iOS 16.5| 104.0 / Android 12|
|Twemoji| ✅ | ✅ | ✅ |
|Noto Color Emoji| ❌ ** | ❌ ** | ✅ |

- `*`: In Firefox, both rendering and coloring functions are available. However, the result can not be rendered into an image. When you try to download the creation, it will be the original version and not the color overridden one.
- `**`: Safari and any browser on iOS/iPadOS cannot render `COLR/CPAL v1` color fonts. Therefore, the link open via these browsers will be redirected to use Twemoji.
- You can use [ChromaCheck](https://pixelambacht.nl/chromacheck/) to see whether your browser support `COLR/CPAL v0` and `COLR/CPAL v1` format.


### COLR/CPAL v0 - Twemoji

- [COLR/CPAL(v0) Font Formats - Can I USe...](https://caniuse.com/colr)
- Basically all browsers and platforms are all supported.


### COLR/CPAL v1 - Noto Color Emoji

- [COLR/CPAL(v1) Font Formats - Can I USe...](https://caniuse.com/colr-v1)
- *Technically* Supported:
  - Chrome 98+
  - Edge 98+
  - FireFox 107+
  - Opera 86+
  - other Chromium-Based browsers...
- Unsupported:
  - Safari
  - Browsers on iPhone and iPad - they are all based on WebKit engine.


## Related Packages and Repo

- [Node.js](https://nodejs.org/)
- [FontKit](https://github.com/foliojs/fontkit)
- [Emoji Mart](https://github.com/missive/emoji-mart)
- [Parcel](https://parceljs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [ChromaCheck](https://github.com/RoelN/ChromaCheck)

## Build

```
# develop on local
npm install
npm start
# at http://localhost:1234

# build a single html page
# if failed or miss files, delete `public` and `.parcel-cache` folder and retry
npm run build
```

## How does it work?

`COLR` (Color) and `CPAL` (Color Palette) are OpenType technologies to enable the use of multi-colored glyphs and emoji in fonts. Designer can create color font that contain multiple layers of color information, allowing for complex and vibrant color rendering. User can change the layer's color by override `@font-palette-values` attribute.

For example:

```
@font-palette-values --overridePalette {
  font-family: "Noto Color Emoji";
  base-palette: 0;
  override-colors:
    0 #00ffbb,
    1 #007744;
}

.class {
  font-palette: --overridePalette;
}
```

`COLR/CPAL v1` is an extended version of `COLR/CPAL v0`, designed to elevate the capabilities of color fonts, particularly in the realm of gradient colors.

Currently, most modern web browsers support `COLR/CPAL v0` font format, however, WebKit, the engine behind Safari and all browsers (including third-party) on iPhone and iPad, does not provide full support for `COLR/CPAL v1` fonts. 

## Copyright

Your creation is based on [Twemoji](https://github.com/twitter/twemoji), license under [MIT](http://opensource.org/licenses/MIT) [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/), and [Noto Color Emoji](https://github.com/googlefonts/noto-emoji),  under the [Apache license](https://www.apache.org/licenses/LICENSE-2.0).

You are free to use it for personal and commercial purposes. For more details and legal advices, please refer to the license of emoji sources.

I don't claim any copyright over your creation.

## See More...

- [COLRv1 Color Gradient Vector Fonts in Chrome 98 - Chrome for Developers Blog](https://developer.chrome.com/blog/colrv1-fonts/)
- [OpenType COLR (Color Table) Spec - Microsoft](https://learn.microsoft.com/en-us/typography/opentype/spec/colr)
- [OpenType CPAL (Color Palette Table) Spec - Microsoft](https://learn.microsoft.com/en-us/typography/opentype/spec/cpal)
- [\[webkit-dev\] Request for Position: COLR v1 Vector Color Fonts](https://lists.webkit.org/pipermail/webkit-dev/2021-May/031839.html)
- [COLR/CPAL(v0) Font Formats - Can I USe...](https://caniuse.com/colr)
- [COLR/CPAL(v1) Font Formats - Can I USe...](https://caniuse.com/colr-v1)
