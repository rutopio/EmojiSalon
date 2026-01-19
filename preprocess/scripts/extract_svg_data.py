#!/usr/bin/env python3
"""Extract path and color data from Twemoji SVG files.

This script parses SVG files from the Twemoji repository and extracts
the path data (d attribute) and fill colors for each emoji. The extracted
data is saved as JSON files for use in the Emoji Salon application.

SVG Source: https://github.com/twitter/twemoji

Usage:
    1. Download Twemoji SVG files from the repository
    2. Place SVG files in the same directory as this script
    3. Create a 'json' subdirectory for output
    4. Run: python extract_svg_data.py

Output:
    - Individual JSON files for each emoji in the 'json' directory
    - fullPathAndColorData.json containing all emoji data
"""

import json
import os
from typing import Optional
from xml.etree import ElementTree

# SVG namespace used by Twemoji
SVG_NAMESPACE = "{http://www.w3.org/2000/svg}"

# Skin tone modifier unicode values to skip
SKIN_TONE_MODIFIERS = ["1f3fb", "1f3fc", "1f3fd", "1f3fe", "1f3ff"]


def convert_circle_to_path(element: ElementTree.Element) -> str:
    """Convert an SVG circle element to a path data string.

    Args:
        element: An SVG circle element with cx, cy, and r attributes.

    Returns:
        A path data string representing the circle.
    """
    cx = float(element.get("cx", 0))
    cy = float(element.get("cy", 0))
    r = float(element.get("r", 0))
    return (
        f"M {cx - r},{cy} "
        f"A {r},{r} 0 1,0 {cx + r},{cy} "
        f"A {r},{r} 0 1,0 {cx - r},{cy} Z"
    )


def convert_ellipse_to_path(element: ElementTree.Element) -> str:
    """Convert an SVG ellipse element to a path data string.

    Args:
        element: An SVG ellipse element with cx, cy, rx, and ry attributes.

    Returns:
        A path data string representing the ellipse.
    """
    cx = float(element.get("cx", 0))
    cy = float(element.get("cy", 0))
    rx = float(element.get("rx", 0))
    ry = float(element.get("ry", 0))
    return (
        f"M {cx - rx},{cy} "
        f"A {rx},{ry} 0 0,0 {cx + rx},{cy} "
        f"A {rx},{ry} 0 0,0 {cx - rx},{cy} Z"
    )


def get_path_opacity(element: ElementTree.Element) -> str:
    """Extract opacity attribute from an SVG element.

    Args:
        element: An SVG element that may have an opacity attribute.

    Returns:
        An opacity attribute string if present, empty string otherwise.
    """
    opacity = element.get("opacity")
    return f"opacity='{opacity}'" if opacity else ""


def get_path_transform(element: ElementTree.Element) -> str:
    """Extract transform attribute from an SVG element.

    Args:
        element: An SVG element that may have a transform attribute.

    Returns:
        A transform attribute string if present, empty string otherwise.
    """
    transform = element.get("transform")
    return f"transform='{transform}'" if transform else ""


def concat_path_data(path: str, opacity: str, transform: str) -> str:
    """Concatenate path data with optional opacity and transform attributes.

    Args:
        path: The SVG path data string.
        opacity: Optional opacity attribute string.
        transform: Optional transform attribute string.

    Returns:
        The concatenated path data with attributes.
    """
    parts = [path]
    if opacity:
        parts.append(opacity)
    if transform:
        parts.append(transform)
    return "' ".join(parts) if len(parts) > 1 else path


def should_skip_file(filename: str) -> bool:
    """Check if a file should be skipped based on skin tone modifiers.

    Args:
        filename: The name of the SVG file.

    Returns:
        True if the file contains a skin tone modifier, False otherwise.
    """
    return any(modifier in filename for modifier in SKIN_TONE_MODIFIERS)


def extract_element_data(
    element: ElementTree.Element, fill_color: Optional[str] = None
) -> tuple[Optional[str], Optional[str]]:
    """Extract path and color data from an SVG element.

    Args:
        element: An SVG element (path, circle, or ellipse).
        fill_color: Optional fill color from parent group.

    Returns:
        A tuple of (path_data, fill_color) or (None, None) if not applicable.
    """
    tag = element.tag.replace(SVG_NAMESPACE, "")
    opacity = get_path_opacity(element)
    transform = get_path_transform(element)

    if tag == "circle":
        path = convert_circle_to_path(element)
    elif tag == "ellipse":
        path = convert_ellipse_to_path(element)
    elif tag == "path":
        path = element.get("d", "")
    else:
        return None, None

    color = fill_color if fill_color else element.get("fill")
    return concat_path_data(path, opacity, transform), color


def parse_svg_file(filepath: str) -> dict:
    """Parse an SVG file and extract path and color data.

    Args:
        filepath: Path to the SVG file.

    Returns:
        A dictionary with 'd' (path data list) and 'f' (fill colors list).
    """
    path_data = []
    color_data = []

    tree = ElementTree.parse(filepath)
    root = tree.getroot()

    for element in root:
        tag = element.tag.replace(SVG_NAMESPACE, "")

        if tag == "g":
            # Handle grouped elements with shared fill color
            group_fill = element.get("fill")
            for sub_element in element:
                path, color = extract_element_data(sub_element, group_fill)
                if path is not None:
                    path_data.append(path)
                    color_data.append(color)
        else:
            # Handle top-level elements
            path, color = extract_element_data(element)
            if path is not None:
                path_data.append(path)
                color_data.append(color)

    return {"d": path_data, "f": color_data}


def filename_to_unicode(filename: str) -> str:
    """Convert an SVG filename to a unicode identifier.

    Args:
        filename: The SVG filename (e.g., "1f600.svg").

    Returns:
        A unicode identifier (e.g., "u1f600").
    """
    name = filename.replace(".svg", "").replace("-", "_")
    return f"u{name}"


def main():
    """Main function to process all SVG files in the current directory."""
    # Ensure output directory exists
    os.makedirs("json", exist_ok=True)

    all_data = {}
    skip_counter = 0
    use_counter = 0

    for filename in os.listdir("."):
        if not filename.endswith(".svg"):
            continue

        if should_skip_file(filename):
            skip_counter += 1
            continue

        print(f"Processing: {filename}")
        use_counter += 1

        emoji_data = parse_svg_file(filename)
        emoji_name = filename_to_unicode(filename)
        all_data[emoji_name] = emoji_data

        # Save individual emoji JSON
        with open(f"json/{emoji_name}.json", "w") as outfile:
            json.dump(emoji_data, outfile)

    # Save combined JSON
    with open("json/fullPathAndColorData.json", "w") as outfile:
        json.dump(all_data, outfile)

    print(f"\nProcessed: {use_counter} | Skipped: {skip_counter}")
    print(f"Total emojis: {len(all_data)}")
    print("Output: json/fullPathAndColorData.json")


if __name__ == "__main__":
    main()

