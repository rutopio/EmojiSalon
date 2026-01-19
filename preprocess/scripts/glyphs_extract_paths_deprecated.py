#!/usr/bin/env python3
"""[DEPRECATED] Extract emoji path data from Glyphs App font file.

WARNING: This script is deprecated and should not be used.
Use extract_svg_data.py instead, which processes Twemoji SVG files directly.

Deprecation reasons:
    1. Glyphs App cannot always correctly convert quadratic curves to cubic curves
    2. Fill colors with opacity are not preserved during export
    3. SVG extraction from the font is less reliable than processing SVG files directly

This script is kept for historical reference only.

Original purpose:
    Extract SVG path data and palette indices from Twemoji font glyphs
    using Glyphs App's Python environment.

Glyphs App: https://glyphsapp.com/
Font Source: https://github.com/mozilla/twemoji-colr
Font File: Twemoji.Mozilla.ttf (modified by Mozilla)
"""

import json

# These are only available in Glyphs App's Python environment
# from AppKit import NSSize
# GlyphAsImage = NSClassFromString("GlyphAsImage")

# Skin tone modifier code points to skip
SKIN_TONE_MODIFIERS = ["1f3fb", "1f3fc", "1f3fd", "1f3fe", "1f3ff"]


def should_skip_glyph(glyph_name: str) -> bool:
    """Check if a glyph should be skipped based on skin tone modifiers.
    
    Args:
        glyph_name: The name of the glyph.
        
    Returns:
        True if the glyph contains a skin tone modifier.
    """
    return any(modifier in glyph_name for modifier in SKIN_TONE_MODIFIERS)


def extract_glyph_data_deprecated():
    """Extract path and palette data from selected glyphs.
    
    WARNING: This function is deprecated. The curve conversion
    in Glyphs App is unreliable for some emoji glyphs.
    
    Returns:
        dict: Mapping of glyph names to path and palette data.
    """
    results = {}
    use_counter = 0
    skip_counter = 0
    
    for layer in Glyphs.font.selectedLayers:
        glyph = layer.parent
        
        # Skip layer glyphs and skin tone variants
        if "layer" in glyph.name:
            continue
            
        if should_skip_glyph(glyph.name):
            skip_counter += 1
            continue
            
        print(f"Processing: {glyph.name}")
        
        path_data = []
        palette_data = []
        
        # Process each color layer (skip the first master layer)
        for color_layer in glyph.layers[1:]:
            # Convert quadratic curves to cubic (may not work correctly)
            for path in color_layer.paths:
                path.convertToCubic()
            
            # Export layer as SVG
            layer_size = NSSize(color_layer.width, color_layer.ascender)
            svg_data = GlyphAsImage.svgDataWithLayer_origSize_settings_(
                color_layer, layer_size, preset
            )
            
            # Parse SVG to extract path data
            svg_string = svg_data.decode("utf-8")
            path_d = svg_string.split('<path d="')[1].split('"></path>')[0]
            
            path_data.append(path_d)
            palette_data.append(color_layer.name[6:])  # Extract color index
        
        results[glyph.name] = {
            "d": path_data,
            "f": palette_data
        }
        use_counter += 1
    
    print(f"\nProcessed: {use_counter} | Skipped: {skip_counter}")
    return results


def main():
    """Main function - DO NOT USE, this script is deprecated."""
    print("=" * 60)
    print("WARNING: This script is deprecated!")
    print("Use extract_svg_data.py instead for reliable SVG extraction.")
    print("=" * 60)
    
    # Uncomment below to run the deprecated extraction
    # results = extract_glyph_data_deprecated()
    # with open("data/fullPathAndColorData.json", "w") as outfile:
    #     json.dump(results, outfile)


if __name__ == "__main__":
    main()

