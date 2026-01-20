# Preprocessing Pipeline

This directory contains scripts and data for preprocessing Twemoji assets into the JSON format used by EmojiSalon.

## Overview

The preprocessing pipeline extracts path data and color information from Twemoji SVG files and COLR font files, then organizes them into category-based JSON files for efficient loading in the application.

## Directory Structure

```
preprocess/
├── data/                    # Intermediate data files
│   ├── emojimart.json       # emoji-mart library data (source)
│   └── ...                  # Generated intermediate files
├── font/                    # Font files
│   ├── Twemoji.Mozilla.ttf  # Mozilla-modified Twemoji font (for Glyphs App)
│   └── twemoji.woff2        # Web font (for palette extraction)
├── scripts/                 # Processing scripts
│   ├── extract_svg_data.py
│   ├── group_by_categories.py
│   ├── generate_ignore_list.js
│   ├── extract_palette_colors.js
│   ├── parse_emoji_mart.py
│   ├── generate_categories.py
│   ├── glyphs_extract_palette_indices.py
│   └── glyphs_extract_paths_deprecated.py
└── README.md
```

## Data Flow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Twemoji SVGs   │────>│ extract_svg_    │────>│ Individual      │
│  (from GitHub)  │     │ data.py         │     │ emoji JSONs     │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
┌─────────────────┐     ┌─────────────────┐              │
│  emoji-mart     │────>│ generate_       │              │
│  data           │     │ categories.py   │              │
└─────────────────┘     └────────┬────────┘              │
                                 │                       │
                                 v                       v
                        ┌─────────────────┐     ┌─────────────────┐
                        │ emojiCategories │────>│ group_by_       │
                        │ .json           │     │ categories.py   │
                        └─────────────────┘     └────────┬────────┘
                                                         │
┌─────────────────┐     ┌─────────────────┐              │
│  Twemoji COLR   │────>│ extract_palette │              │
│  font           │     │ _colors.js      │              │
└─────────────────┘     └────────┬────────┘              │
                                 │                       │
                                 v                       v
                        ┌─────────────────┐     ┌─────────────────┐
                        │ paletteColor    │     │ Category JSONs  │
                        │ Data.json       │     │ (foods, nature) │
                        └─────────────────┘     └─────────────────┘
                                                         │
┌─────────────────┐     ┌─────────────────┐              │
│  Glyphs App     │────>│ glyphs_extract_ │              │
│  + TTF font     │     │ palette_indices │              │
└─────────────────┘     └────────┬────────┘              │
                                 │                       │
                                 v                       v
                        ┌─────────────────┐     ┌─────────────────┐
                        │ emojiPalette    │     │   src/data/     │
                        │ Data.json       │────>│   (final)       │
                        └─────────────────┘     └─────────────────┘
```

## Scripts

### Python Scripts

#### `extract_svg_data.py`

Extracts path and fill color data from Twemoji SVG files.

**Input:** Twemoji SVG files (download from [twitter/twemoji](https://github.com/twitter/twemoji))

**Output:**

- Individual JSON files for each emoji
- `fullPathAndColorData.json` containing all emoji data

**Features:**

- Converts `<circle>` and `<ellipse>` elements to path data
- Preserves `opacity` and `transform` attributes
- Skips emoji with skin tone modifiers (handled separately)

#### `group_by_categories.py`

Groups individual emoji JSON files by category.

**Prerequisites:**

- Run `extract_svg_data.py` first
- `emojiCategories.json` in data directory
- `ignoreEmojiUnicodeList.json` in data directory

**Output:** Category JSON files (e.g., `people.json`, `nature.json`)

#### `generate_categories.py`

Creates category mapping from emoji-mart data.

**Input:** `emojimart.json`

**Output:** `emojiCategories.json`

#### `parse_emoji_mart.py`

Extracts emoji native characters and unicode values from emoji-mart data.

**Input:** `emojimart.json`

**Output:**

- `emojisWithSkinTone.json`
- `emojisWithoutSkinTone.json`
- `unicodeWithSkinTone.json`
- `unicodeWithoutSkinTone.json`

#### `glyphs_extract_palette_indices.py`

Extracts palette color indices from font using Glyphs App.

**Requirements:** Must be run inside [Glyphs App](https://glyphsapp.com/)

**Input:** `Twemoji.Mozilla.ttf` opened in Glyphs App

**Output:** `emojiPaletteData.json`

### JavaScript Scripts

#### `extract_palette_colors.js`

Extracts color palette from Twemoji COLR font.

**Requirements:** `fontkit` npm package

**Input:** Twemoji COLR font (fetched from CDN)

**Output:** `paletteColorData.json`

```bash
npm install fontkit
node extract_palette_colors.js
```

#### `generate_ignore_list.js`

Generates list of emoji to exclude from category files.

**Output:** `ignoreEmojiUnicodeList.json`

```bash
node generate_ignore_list.js
```

## Complete Processing Steps

1. **Download Twemoji SVG files**

   ```bash
   git clone https://github.com/twitter/twemoji
   ```

2. **Download emoji-mart data**
   - Get `data.json` from [emoji-mart](https://github.com/missive/emoji-mart)
   - Rename to `emojimart.json` and place in `data/`

3. **Generate category mapping**

   ```bash
   python scripts/generate_categories.py
   ```

4. **Extract SVG data**

   ```bash
   cd <twemoji-svg-directory>
   python ../scripts/extract_svg_data.py
   ```

5. **Generate ignore list**

   ```bash
   node scripts/generate_ignore_list.js
   ```

6. **Group by categories**

   ```bash
   python scripts/group_by_categories.py
   ```

7. **Extract palette colors**

   ```bash
   node scripts/extract_palette_colors.js
   ```

8. **Extract palette indices (in Glyphs App)**
   - Open `Twemoji.Mozilla.ttf` in Glyphs App
   - Run `glyphs_extract_palette_indices.py` in Macro Panel

9. **Copy final files to application**
   ```bash
   cp data/emojiCategories.json ../src/data/
   cp data/paletteColorData.json ../src/data/
   cp data/emojiPaletteData.json ../src/data/
   cp data/*.json ../src/data/  # Category files
   ```

## Output Files

| File                        | Description                                 |
| --------------------------- | ------------------------------------------- |
| `emojiCategories.json`      | Maps category names to emoji unicode lists  |
| `paletteColorData.json`     | Array of hex color values from CPAL table   |
| `emojiPaletteData.json`     | Maps emoji unicode to palette color indices |
| `defaultEmojisSVGData.json` | Default emojis bundled with the app         |
| `{category}.json`           | Per-category emoji path and color data      |

## Font Files

### `Twemoji.Mozilla.ttf`

Modified Twemoji font from [mozilla/twemoji-colr](https://github.com/mozilla/twemoji-colr).
Used with Glyphs App to extract palette index data.

### `twemoji.woff2`

Web font version of Twemoji COLR font from [CDN](https://cdn.jsdelivr.net/npm/twemoji-colr-font).
Used to extract palette color values.

## Dependencies

### Python

- Python 3.10+
- Standard library only (json, os, xml.etree)

### JavaScript

- Node.js 18+
- `fontkit` package for font parsing

### External Tools

- [Glyphs App](https://glyphsapp.com/) for palette index extraction (macOS only)

## Notes

- Emoji with skin tone modifiers are skipped during SVG extraction (they use the same base paths)
- The `glyphs_extract_paths_deprecated.py` script is kept for reference but should not be used
- Some emoji may require manual verification after processing
