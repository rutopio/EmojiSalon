# Emoji Salon - Coloring Your Emoji

![](src/image/social.png)

**Emoji Salon** is a project that allows you to customize the colors of emojis, just like dressing them up by various cosmetics or coloring them by different paints.

## Support Browser

- Supported:
  - Chrome 98+
  - Edge 98+
  - FireFox 107+
  - Opera 86+
  - other Chromium-Based browsers...
- Not Supported:
  - Safari
  - Browser on iOS device - they are all based on Safari kernel
- You can use [ChromaCheck](https://pixelambacht.nl/chromacheck/) to see whether your browser support COLRv1 format or not.
- Reference: [Can I Use...](https://caniuse.com/colr-v1)

## Packages

- [Node.js](https://nodejs.org/)
- [FontKit](https://github.com/foliojs/fontkit)
- [Emoji Mart](https://github.com/missive/emoji-mart)
- [parcel](https://parceljs.org/)
- [ChromaCheck](https://github.com/RoelN/ChromaCheck)

## Build

```
# develop on local machine
npm install
npm start

# build a single html page
npm run build
```

## How it works?

Google and Adobe's [Noto Color Emoji](https://fonts.google.com/noto/specimen/Noto+Color+Emoji) is a COLR/CPAL (v1) color font, which allow us to change its layer's color by override `@font-palette-values` attribute.

## See More...

- [Noto Color Emoji - Google Font](https://fonts.google.com/noto/specimen/Noto+Color+Emoji)
- [COLRv1 Color Gradient Vector Fonts in Chrome 98 - Chrome for Developers Blog](https://developer.chrome.com/blog/colrv1-fonts/)
- [OpenType COLR (Color Table) Spec - Microsoft](https://learn.microsoft.com/en-us/typography/opentype/spec/colr)
- [OpenType CPAL (Color Palette Table) Spec - Microsoft](https://learn.microsoft.com/en-us/typography/opentype/spec/cpal)
- [COLR/CPAL(v0) Font Formats - Can I USe...](https://caniuse.com/colr)
- [COLR/CPAL(v1) Font Formats - Can I USe...](https://caniuse.com/colr-v1)
