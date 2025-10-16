const fs = require("fs");

function emojiToUnicode(thisEmoji) {
  var res = [];
  const subEmojis = [...thisEmoji];
  subEmojis.forEach((ele, _) => {
    if (ele.length === 1) {
      // ZWJ or EMOJI MODIFIER FITZPATRICK
      res.push(ele.charCodeAt(0).toString("16"));
    } else if (ele.length === 2) {
      const comp =
        (ele.charCodeAt(0) - 0xd800) * 0x400 +
        (ele.charCodeAt(1) - 0xdc00) +
        0x10000;
      res.push(comp.toString("16"));
    }
  });

  if (res.length == 2) {
    if (res[res.length - 1] === "fe0f" || res[res.length - 1] === "fe0e") {
      res.pop(); // Remove the last element
    }
  }

  return `u${res.join("_")}`;
}

const defaultEmojis = [
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
var output = [];
defaultEmojis.forEach((e, i) => {
  output.push(emojiToUnicode(e));
});

output = JSON.stringify(output);

fs.writeFile(
  "data/ignoreEmojiUnicodeList.json",
  output,
  "utf8",
  function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("File Saved: ignoreEmojiUnicodeList.json");
  }
);
