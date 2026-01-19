#!/usr/bin/env python3
"""Generate emoji category mapping from emoji-mart data.

This script processes the emoji-mart library's data file to create
a mapping of category names to their contained emoji unicode values.
This mapping is used by the application to load emoji data by category.

Prerequisites:
    - Download emojimart.json from the emoji-mart library
    - Place it in the data directory

Usage:
    python generate_categories.py

Output:
    - emojiCategories.json: Category to emoji unicode mapping
"""

import json
from typing import Any


def load_json_file(filepath: str) -> Any:
    """Load and parse a JSON file.

    Args:
        filepath: Path to the JSON file.

    Returns:
        The parsed JSON data.
    """
    with open(filepath, "r", encoding="utf-8") as file:
        return json.load(file)


def save_json_file(filepath: str, data: Any) -> None:
    """Save data to a JSON file.

    Args:
        filepath: Path to the output JSON file.
        data: The data to serialize to JSON.
    """
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(data, outfile)


def normalize_glyph_name(unified: str) -> str:
    """Convert emoji-mart unified code to glyph name format.

    Args:
        unified: The unified code from emoji-mart (e.g., "1F600" or "1F600-FE0F").

    Returns:
        The glyph name in the format used by SVG files (e.g., "u1f600").

    Example:
        >>> normalize_glyph_name("1F600-FE0F")
        'u1f600'
        >>> normalize_glyph_name("1F468-200D-1F469")
        'u1f468_200d_1f469'
    """
    glyph_name = unified.lower()

    # Remove trailing variation selector for simple emojis
    # (e.g., "1f600-fe0f" -> "1f600")
    if glyph_name.endswith("-fe0f") and len(glyph_name.split("-")) == 2:
        glyph_name = glyph_name[:-5]

    # Replace hyphens with underscores and add 'u' prefix
    return "u" + glyph_name.replace("-", "_")


def main():
    """Main function to generate category mapping."""
    data = load_json_file("data/emojimart.json")

    categories = data.get("categories", [])
    emojis = data.get("emojis", {})

    results = {}

    print(f"{'Category':<15}: Count")
    print("-" * 30)

    for category in categories:
        category_name = category["id"]
        category_emojis = category.get("emojis", [])

        glyph_names = []

        for emoji_id in category_emojis:
            emoji_data = emojis.get(emoji_id)
            if not emoji_data:
                continue

            # Get the unified code from the first (base) skin
            skins = emoji_data.get("skins", [])
            if skins:
                unified = skins[0].get("unified", "")
                glyph_name = normalize_glyph_name(unified)
                glyph_names.append(glyph_name)

        results[category_name] = glyph_names
        print(f"{category_name:<15}: {len(glyph_names)}")

    save_json_file("data/emojiCategories.json", results)

    print("\nOutput: data/emojiCategories.json")
    print(f"Total categories: {len(results)}")


if __name__ == "__main__":
    main()

