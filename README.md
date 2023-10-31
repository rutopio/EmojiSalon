<div align="center">

<h1>🪄 Emoji Salon - Coloring Your Emoji</h1>

🔗 https://emojisalon.art 🔗

[![Netlify Status](https://api.netlify.com/api/v1/badges/875f191b-0b50-46c8-966a-49fa4f20b6fe/deploy-status)](https://app.netlify.com/sites/elegant-mccarthy-ce9195/deploys)

![](src/image/social.png)

**Emoji Salon** allows you to customize the colors of emojis,<br> just like dressing them up by various cosmetics or coloring them by different paints.

</div>

## About Branch

Because of some [known issues](#issues), in this branch, we will be using the SVG approach instead of the COLR/CPAL color font approach. While COLR/CPAL is more elegant and lightweight for demonstrating the potential of color fonts, the SVG approach offers better compatibility.

## Emoji

- [Twemoji-colr / Created by Twitter & Modified by Mozilla](https://github.com/mozilla/twemoji-colr): `COLR/CPAL v0`

## Browser Compatibility

- Mainstream browsers universally support displaying the `<svg>` tag.
- However, if you intend to use `COLR/CPAL` webfont, the compatibility may vary depending on different browsers:

|         | Chrome | Edge  | FireFox | Safari |  Brave   |
| ------: | :----: | :---: | :-----: | :----: | :------: |
| Version | 117.0  | 117.0 | 117.0.1 |  16.0  | 1.58.131 |
| Twemoji |   ✅   |  ✅   |  🟠 \*  |   ✅   |    ✅    |

|         |    Safari on iOS     |  Chrome on iOS\*\*\*  | Chrome on Android  |
| ------: | :------------------: | :-------------------: | :----------------: |
| Version | 16.5 / iOS 16.5 \*\* | 100.0 / iOS 16.5 \*\* | 104.0 / Android 12 |
| Twemoji |          ✅          |          ✅           |         ✅         |

- `*`: In Firefox, both rendering and coloring functions are available. However, the result can not be rendered into an image. When you try to download the creation, it will be the original version and not the color overridden one.
- `**`: iOS versions below 17 offer support for this feature, but iOS 17 does not.
- `***`: All third-party browsers on iOS are based on the same WebKit kernel as Safari.
- You can use [ChromaCheck (@RoelN)](https://pixelambacht.nl/chromacheck/) or [Color fonts live examples (@yoksel)](https://yoksel.github.io/color-fonts-demo/) to see whether your browser support `COLR/CPAL v0` and `COLR/CPAL v1` format.

## Related Packages and Repo

- [Node.js](https://nodejs.org/)
- [FontKit](https://github.com/foliojs/fontkit)
- [Emoji Mart](https://github.com/missive/emoji-mart)
- [Coloris](https://github.com/mdbassit/Coloris)
- [Parcel](https://parceljs.org/)
- [Bootstrap](https://getbootstrap.com/)

## Build

```
# develop on local
npm install
npm start

# build a single html page
# if fail, remove `public` and `.parcel-cache` folders and retry
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

## Issues

**Currently, iOS below 17 are support `COLR/CPAL v0` color font, however, ios 17 does not support anymore.**

This issue has been reported on the WebKit forum. Given that many users have updated their iPhone and iPad devices to version 17, this repository now use the SVG approach instead of the COLR/CPAL format for better compatibility.

See the report for details:

- [Bug 262223 - COLR support vanished between Safari 16 and 17 / 2023-09-27](https://bugs.webkit.org/show_bug.cgi?id=262223)

## Copyright

<div align="center">
<img src=https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png style="width: 100pt;">
</div>

Your creation is based on [Twemoji](https://github.com/twitter/twemoji), license under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) (graphic).

This license enables reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use.

I don't claim any copyright over your creation.

## See More...

- [OpenType COLR (Color Table) Spec - Microsoft](https://learn.microsoft.com/en-us/typography/opentype/spec/colr)
- [OpenType CPAL (Color Palette Table) Spec - Microsoft](https://learn.microsoft.com/en-us/typography/opentype/spec/cpal)
- [COLR/CPAL(v0) Font Formats - Can I USe...](https://caniuse.com/colr)
