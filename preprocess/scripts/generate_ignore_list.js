#!/usr/bin/env node
/**
 * @fileoverview Generate a list of emoji unicode values to exclude from category files.
 *
 * This script converts a predefined list of "default" emojis (used for random selection
 * in the application) to their unicode representations. These emojis are included in
 * the main defaultEmojisSVGData.json file, so they should be excluded from the
 * category-based JSON files to avoid duplication.
 *
 * @example
 * // Run the script
 * node generate_ignore_list.js
 *
 * @output data/ignoreEmojiUnicodeList.json
 */

const fs = require("fs");

/**
 * Convert an emoji character to its unicode representation.
 *
 * This function handles:
 * - Basic emojis (single code point)
 * - Compound emojis with ZWJ (Zero Width Joiner)
 * - Emojis with variation selectors (FE0F/FE0E)
 *
 * @param {string} emoji - The emoji character(s) to convert.
 * @returns {string} The unicode representation (e.g., "u1f600").
 */
function emojiToUnicode(emoji) {
  const result = [];
  const characters = [...emoji];

  characters.forEach((char) => {
    if (char.length === 1) {
      // Single byte character (ZWJ or emoji modifier)
      result.push(char.charCodeAt(0).toString(16));
    } else if (char.length === 2) {
      // Surrogate pair - calculate actual code point
      const highSurrogate = char.charCodeAt(0);
      const lowSurrogate = char.charCodeAt(1);
      const codePoint =
        (highSurrogate - 0xd800) * 0x400 + (lowSurrogate - 0xdc00) + 0x10000;
      result.push(codePoint.toString(16));
    }
  });

  // Remove trailing variation selector (FE0F or FE0E) for simple emojis
  if (result.length === 2) {
    const lastElement = result[result.length - 1];
    if (lastElement === "fe0f" || lastElement === "fe0e") {
      result.pop();
    }
  }

  return `u${result.join("_")}`;
}

/**
 * Default emojis used for random selection in the application.
 * These emojis are bundled in defaultEmojisSVGData.json.
 * @type {string[]}
 */
const DEFAULT_EMOJIS = [
  "😀",
  "😙",
  "😎",
  "😪",
  "🤤",
  "😴",
  "😰",
  "🦓",
  "🥵",
  "🦴",
  "👀",
  "🚀",
  "👍",
  "🪩",
  "🧚‍♀️",
  "🧚",
  "🧚‍♂️",
  "🌟",
  "🧤",
  "🍣",
  "🍤",
  "🍥",
  "🥮",
  "🍡",
  "🥟",
  "🍔",
  "🐈",
  "🐈‍⬛",
  "🐟",
  "🍕",
  "🎉",
  "🐓",
  "🐱",
  "🌺",
  "🍎",
  "🏛",
  "🐭",
  "🐮",
  "🐯",
  "🐰",
  "🐲",
  "🐍",
  "🐴",
  "🐏",
  "🐵",
  "🐔",
  "🐶",
  "🐷",
  "🐕",
  "🐑",
  "🐤",
  "🦕",
  "🦖",
  "🐳",
  "🐋",
  "🐬",
  "🦋",
  "☕️",
  "🍒",
  "🌭",
  "🍩",
  "🏅",
  "🚂",
  "🚗",
  "🥻",
  "🧥",
  "👜",
  "👢",
  "📱",
  "🧮",
  "🩴",
  "🎮",
  "🎠",
  "🛝",
  "🎡",
  "🎢",
  "💈",
  "🎪",
  "🍭",
  "🦄",
  "🎨",
];

/**
 * Main function to generate the ignore list.
 */
function main() {
  const unicodeList = DEFAULT_EMOJIS.map((emoji) => emojiToUnicode(emoji));

  const output = JSON.stringify(unicodeList, null, 2);

  fs.writeFile("data/ignoreEmojiUnicodeList.json", output, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      process.exit(1);
    }
    console.log(`Generated ignore list with ${unicodeList.length} emojis`);
    console.log("Output: data/ignoreEmojiUnicodeList.json");
  });
}

main();
