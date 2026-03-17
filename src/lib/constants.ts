/**
 * @fileoverview Application-wide constants.
 * Contains UI constants, emoji defaults, and social sharing URLs.
 */

/**
 * Preset colors for the color swatch picker.
 */
export const PRESET_COLORS = [
  "#FF3B30",
  "#FF9500",
  "#A2845E",
  "#FFCC00",
  "#34C759",
  "#00C7BE",
  "#32ADE6",
  "#007AFF",
  "#AF52DE",
  "#FF2D55",
  "#8E8E93",
];

/**
 * Default emojis used for random selection.
 * These are pre-bundled in defaultEmojisSVGData.json for instant loading.
 */
export const DEFAULT_EMOJIS = [
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
 * Canonical site URL for metadata (OG tags, canonical links, etc.).
 * Used at build/SSR time where window.location is unavailable.
 */
export const SITE_URL = "https://emojisalon.pages.dev";

/**
 * Base URL for Twitter/X share intent.
 */
export const TWITTER_SHARE_BASE_URL = "https://twitter.com/intent/tweet";

/**
 * Base URL for Facebook share dialog.
 */
export const FACEBOOK_SHARE_BASE_URL = "https://www.facebook.com/sharer.php";

/**
 * Base URL for GitHub issue submission template.
 */
export const GITHUB_ISSUE_BASE_URL =
  "https://github.com/rutopio/EmojiSalon/issues/new?template=submit-showcase.yml";

/**
 * Base URL for GitHub repository.
 */
export const GITHUB_REPO_URL = "https://github.com/rutopio/EmojiSalon";
