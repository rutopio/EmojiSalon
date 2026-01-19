#!/usr/bin/env python3
"""Parse emoji-mart data to extract emoji information.

This script processes the emoji-mart library's data file to extract
emoji information including native characters and their unicode
representations, organized by category.

The emoji-mart library (https://github.com/missive/emoji-mart) provides
comprehensive emoji data that includes skin tone variants and category
information.

Prerequisites:
    - Download emojimart.json from the emoji-mart library
    - Place it in the data directory

Usage:
    python parse_emoji_mart.py

Output:
    - emojisWithSkinTone.json: Emojis including skin tone variants
    - emojisWithoutSkinTone.json: Base emojis without skin tone variants
    - unicodeWithSkinTone.json: Unicode values with skin tone variants
    - unicodeWithoutSkinTone.json: Unicode values without skin tone variants
"""

import json
from typing import Any


def load_emoji_mart_data(filepath: str) -> dict[str, Any]:
    """Load emoji-mart data from JSON file.

    Args:
        filepath: Path to the emojimart.json file.

    Returns:
        The parsed emoji-mart data containing categories and emojis.
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


def process_category(
    category: dict[str, Any],
    emojis: dict[str, Any]
) -> tuple[list[str], list[str], list[str], list[str]]:
    """Process a single category to extract emoji and unicode data.

    Args:
        category: Category data containing category ID and emoji list.
        emojis: Dictionary of all emoji data keyed by emoji ID.

    Returns:
        A tuple containing:
        - emojis_with_skin: Native emoji characters including skin tones
        - emojis_without_skin: Native emoji characters (base only)
        - unicode_with_skin: Unicode values including skin tones
        - unicode_without_skin: Unicode values (base only)
    """
    emojis_with_skin = []
    emojis_without_skin = []
    unicode_with_skin = []
    unicode_without_skin = []

    for emoji_id in category["emojis"]:
        emoji_data = emojis.get(emoji_id)
        if not emoji_data:
            continue

        skins = emoji_data.get("skins", [])

        for index, skin in enumerate(skins):
            native_char = skin.get("native", "")
            unified_code = skin.get("unified", "")

            if index == 0:
                # Base emoji (no skin tone modifier)
                emojis_with_skin.append(native_char)
                unicode_with_skin.append(unified_code)
                emojis_without_skin.append(native_char)
                unicode_without_skin.append(unified_code)
            else:
                # Skin tone variant
                emojis_with_skin.append(native_char)
                unicode_with_skin.append(unified_code)

    return emojis_with_skin, emojis_without_skin, unicode_with_skin, unicode_without_skin


def main():
    """Main function to parse emoji-mart data."""
    data = load_emoji_mart_data("data/emojimart.json")

    categories = data.get("categories", [])
    emojis = data.get("emojis", {})

    # Results organized by category
    emojis_with_skin_tone = {}
    emojis_without_skin_tone = {}
    unicode_with_skin_tone = {}
    unicode_without_skin_tone = {}

    print(f"{'Category':<15}: Emojis (with skin / without skin)")
    print("-" * 50)

    for category in categories:
        category_name = category["id"]

        (
            cat_emojis_with,
            cat_emojis_without,
            cat_unicode_with,
            cat_unicode_without
        ) = process_category(category, emojis)

        emojis_with_skin_tone[category_name] = cat_emojis_with
        emojis_without_skin_tone[category_name] = cat_emojis_without
        unicode_with_skin_tone[category_name] = cat_unicode_with
        unicode_without_skin_tone[category_name] = cat_unicode_without

        print(f"{category_name:<15}: {len(cat_emojis_with)} / {len(cat_emojis_without)}")

    # Save output files
    save_json_file("data/emojisWithSkinTone.json", emojis_with_skin_tone)
    save_json_file("data/emojisWithoutSkinTone.json", emojis_without_skin_tone)
    save_json_file("data/unicodeWithSkinTone.json", unicode_with_skin_tone)
    save_json_file("data/unicodeWithoutSkinTone.json", unicode_without_skin_tone)

    print("\nOutput files:")
    print("  - data/emojisWithSkinTone.json")
    print("  - data/emojisWithoutSkinTone.json")
    print("  - data/unicodeWithSkinTone.json")
    print("  - data/unicodeWithoutSkinTone.json")


if __name__ == "__main__":
    main()

