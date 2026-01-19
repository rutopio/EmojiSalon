#!/usr/bin/env python3
"""Group emoji SVG data by categories.

This script reads individual emoji JSON files and groups them by
category based on the emojiCategories.json mapping. It also filters
out emojis specified in the ignore list.

Prerequisites:
    - Run extract_svg_data.py first to generate individual emoji JSON files
    - emojiCategories.json must exist in the data directory
    - ignoreEmojiUnicodeList.json must exist in the data directory

Usage:
    python group_by_categories.py

Output:
    - Category JSON files (e.g., people.json, nature.json) in the data directory
"""

import json
import os
from typing import Any


def load_json_file(filepath: str) -> Any:
    """Load and parse a JSON file.

    Args:
        filepath: Path to the JSON file.

    Returns:
        The parsed JSON data.

    Raises:
        FileNotFoundError: If the file does not exist.
        json.JSONDecodeError: If the file contains invalid JSON.
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


def normalize_emoji_name(name: str) -> str:
    """Normalize emoji name by removing trailing variation selector.

    Some emoji names end with '_fe0f' (variation selector-16) which
    may not be present in the SVG filenames.

    Args:
        name: The emoji unicode name (e.g., "u1f600_fe0f").

    Returns:
        The normalized name without trailing variation selector.
    """
    # Remove trailing _fe0f if it's a simple two-part name
    if name.endswith("_fe0f") and len(name.split("_")) == 2:
        return name[:-5]
    return name


def main():
    """Main function to group emoji data by categories."""
    # Load category mapping and ignore list
    category_data = load_json_file("data/emojiCategories.json")
    ignore_emojis = load_json_file("data/ignoreEmojiUnicodeList.json")

    skip_counter = 0
    use_counter = 0
    errors = []

    for category_name, emoji_list in category_data.items():
        category_emojis = {}

        for emoji_unicode in emoji_list:
            # Skip emojis in the ignore list
            if emoji_unicode in ignore_emojis:
                print(f"Skipping: {emoji_unicode}")
                skip_counter += 1
                continue

            use_counter += 1
            normalized_name = normalize_emoji_name(emoji_unicode)

            if normalized_name != emoji_unicode:
                print(f"Normalized: {emoji_unicode} -> {normalized_name}")

            # Try to load the individual emoji JSON
            try:
                emoji_data = load_json_file(f"json/{normalized_name}.json")
                category_emojis[normalized_name] = emoji_data
            except FileNotFoundError:
                errors.append(emoji_unicode)
                print(f"Error: File not found for {emoji_unicode}")

        # Save category file
        print(f"{category_name}: {len(category_emojis)} emojis")
        save_json_file(f"data/{category_name}.json", category_emojis)

    # Print summary
    print(f"\nProcessed: {use_counter} | Skipped: {skip_counter} | Errors: {len(errors)}")

    if errors:
        print("\nMissing files:")
        for error in errors:
            print(f"  - {error}")


if __name__ == "__main__":
    main()

