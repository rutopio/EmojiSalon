#!/usr/bin/env python3
"""Extract emoji palette indices from Glyphs App font file.

IMPORTANT: This script is designed to run inside Glyphs App's Python environment.
It cannot be run as a standalone Python script.

Glyphs App: https://glyphsapp.com/
Font Source: https://github.com/mozilla/twemoji-colr
Font File: Twemoji.Mozilla.ttf (modified by Mozilla)

This script extracts the color palette index for each layer of each emoji
glyph in the font. The output maps each emoji's unicode name to an array
of palette indices representing the colors used in each layer.

Usage (inside Glyphs App):
    1. Open Twemoji.Mozilla.ttf in Glyphs App
    2. Open Macro Panel (Window > Macro Panel)
    3. Paste and run this script

Output:
    - emojiPaletteData.json: Mapping of emoji unicode to palette indices

Format:
    {
        "u1f600": [3, 5, 7, 12],  // Grinning face uses palette colors 3, 5, 7, 12
        "u1f601": [3, 5, 7, 12, 15],
        ...
    }
"""

import json

# This variable is available in Glyphs App's Python environment
# Glyphs = <reference to the Glyphs application>


def extract_palette_indices():
    """Extract palette indices from all glyphs in the current font.
    
    Returns:
        dict: Mapping of glyph names to lists of palette color indices.
    """
    results = {}
    
    for glyph in Glyphs.font.glyphs:
        # Skip glyphs without color layers
        if len(glyph.layers) <= 1:
            continue
            
        color_indices = []
        
        for layer in glyph.layers:
            # Color layers are named like "Color 0", "Color 1", etc.
            if layer.name.startswith("Color"):
                # Extract the color index number
                color_index = int(layer.name[6:])
                color_indices.append(color_index)
        
        if color_indices:
            results[glyph.name] = color_indices
    
    return results


def main():
    """Main function to extract and save palette data."""
    # Clear the log for clean output
    Glyphs.clearLog()
    
    print("Extracting palette indices from font...")
    
    palette_data = extract_palette_indices()
    
    print(f"Processed {len(palette_data)} emojis")
    
    # Save to JSON file
    output_path = "data/emojiPaletteData.json"
    with open(output_path, "w", encoding="utf-8") as outfile:
        json.dump(palette_data, outfile)
    
    print(f"Output: {output_path}")


# Run when executed in Glyphs App
if __name__ == "__main__":
    main()

