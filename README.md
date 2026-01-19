<div align="center">

# Emoji Salon - Coloring Your Emoji

https://emojisalon.pages.dev

![](public/social.png)

**Emoji Salon** allows you to customize the colors of emojis, just like dressing them up with various cosmetics or coloring them with different paints.

</div>

## Introduction

Emoji Salon uses [Twemoji](https://github.com/twitter/twemoji) SVG data for emoji rendering. You can select any emoji, customize its colors, and download your creation as SVG or PNG for personal or commercial use.

## Usage

### Extend Emoji & For Fun

Create unique emoji variations by changing colors to match your style or brand.

![](public/images/sample_customize1.png)

![](public/images/sample_customize2.png)

![](public/images/sample_customize4.png)

### Cross-cultural Design

Adapt emojis for different cultural contexts or create region-specific variations.

![](public/images/sample_customize3.png)

### Accessibility

For people with color vision deficiencies or color blindness, identifying certain emojis can be challenging when colors are too similar or overly vibrant.

For example, distinguishing between:

- Italy and Ireland
- Romania and Chad
- Latvia and Austria
- Monaco and Indonesia

Most current emoji designs do not consider accessibility needs. Emoji Salon provides a way to create easily distinguishable emojis for such individuals.

See more:

- [Emoji And Low Vision - Veronica With Four Eyes](https://veroniiiica.com/emoji-and-low-vision/)
- [Are you emoji colour blind? - Colour Blind Vision](https://www.facebook.com/ColourBlindVision/posts/are-you-emoji-colour-blinda-strange-concept-to-say-nevertheless-how-many-times-h/678523570194699/)

## Tech Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/)
- [TanStack Start](https://tanstack.com/start/latest) + [TanStack Router](https://tanstack.com/router/latest)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Vite](https://vite.dev/)
- [Frimousse](https://frimousse.liveblocks.io/) - Lightweight, unstyled emoji picker
- [Coloris](https://github.com/mdbassit/Coloris) - Color picker component

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/rutopio/EmojiSalon.git
   cd EmojiSalon
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

   The development server should now be running at [http://localhost:3000](http://localhost:3000).

## Building for Production

```bash
pnpm build
```

Refer to the [TanStack Start hosting docs](https://tanstack.com/start/latest/docs/framework/react/guide/hosting) for deploying to various platforms.

## Data Preprocessing

The emoji SVG data used in this application is preprocessed from [Twemoji](https://github.com/twitter/twemoji) source files. If you need to regenerate or update the emoji data, refer to the [`preprocess/`](./preprocess/) directory.

The preprocessing pipeline includes:

1. **SVG Data Extraction** - Extract path and fill color data from Twemoji SVG files
2. **Category Organization** - Group emojis by category for efficient loading
3. **Palette Extraction** - Extract color palette from Twemoji COLR font
4. **Palette Index Mapping** - Map each emoji layer to palette color indices

See [`preprocess/README.md`](./preprocess/README.md) for detailed instructions on running the preprocessing scripts.

## Copyright

<div align="center">
<img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png" style="width: 100pt;">
</div>

Your creation is based on [Twemoji](https://github.com/twitter/twemoji), licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) (graphic).

This license enables reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use.

The author does not own any copyright to your work.

## Special Thanks

- [justfont](https://justfont.com/)
