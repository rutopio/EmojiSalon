const fontkit = require("fontkit");
var originalPalette = [];
var customizedPalette = [];
var paletteCode = "";
var shareURL = window.location.href;



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


  

// For example, converter rgba(67, 255, 100, 255) to #43ff64
function rgbaToHexColor(rgbaColorArray) {
    return "#" + rgbaColorArray.slice(0, 3)
        .map(ele => ele.toString(16))
        .map(ele => ele.length == 1 ? "0" + ele : ele) //padding zero to two digits
        .join("");
}


function emojiToUnicode(emoji) {
    var comp;
    if (emoji.length === 1) {
        comp = emoji.charCodeAt(0);
    }
    comp = (
        (emoji.charCodeAt(0) - 0xD800) * 0x400 +
        (emoji.charCodeAt(1) - 0xDC00) + 0x10000
    );
    if (comp < 0) {
        comp = emoji.charCodeAt(0);
    }
    return `U+${comp.toString("16").toUpperCase()}`;
}


function unicodeToEmoji(unicode) {
    const codePoint = unicode.replace("U+", "");
    const intCodePoint = parseInt(codePoint, 16);
    const character = String.fromCodePoint(intCodePoint);
    return character
}


// Check if two RGBA colors are equal
function areColorsEqual(rgba1, rgba2) {
    return rgba1.every((component, index) => component === rgba2[index]);
}


function encodeURL(url) {
    return (url.replaceAll(" ", "").replaceAll("rgba", "").replaceAll(",", "*"))
}


function decodeURL(url) {
    return (url.replaceAll("*", ", ").replaceAll("(", " rgba("))
}


// Get the CSS override colors
function getOverrideStyleString() {
    // Format Example:
    // override-colors:
    // 0 rgba(184, 126, 50, 255),
    // 1 rgba(120, 8, 150, 255),
    // ...
    return customizedPalette
        .map((rgbaColorArray, idx) => `${idx} rgba(${rgbaColorArray.join(", ")})`)
        // If customize colors are different from default colors, record them into overrides 
        .filter((_, idx) => !areColorsEqual(customizedPalette[idx], originalPalette[idx]))
        .join(", ");
}



// Update the CSS palette
function setOverridePaletteStyle(overrideColors) {
    document.getElementById("palette-overrides-style").innerHTML = `
		@font-palette-values --palette {
			font-family: "Noto Color Emoji";
			base-palette: 0;
			override-colors: ${overrideColors};
		}
		`;
}


function getRGBAFromPicker(paletteIndex, rgbColor) {
    [0, 1, 2].forEach(idx => {
        customizedPalette[paletteIndex][idx] = parseInt(rgbColor.substring(idx * 2, idx * 2 + 2), 16);
    });
}


// Update a palette from input entry
function updateEmojiAndURL() {
    const overrideColors = getOverrideStyleString()
    const thisEmoji = document.getElementById("customized-emoji").innerHTML;
    setOverridePaletteStyle(overrideColors);
    window.location.hash = `${emojiToUnicode(thisEmoji)}-${encodeURIComponent(encodeURL(overrideColors))}`;
    shareURL = window.location.href
}



async function updateEmoji(thisEmoji, keepPalette) {
    // Fetch Google Font Noto Sans Emoji CSS
    const fontResponse = await fetch("https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&text=" + encodeURIComponent(thisEmoji));
    const fontStyle = await fontResponse.text();

    // Reset CSS style
    document.getElementById("emoji-style").innerHTML = fontStyle;
    document.getElementById("customized-emoji").innerHTML = thisEmoji;
    if (!keepPalette) {
        document.getElementById("palette-overrides-style").innerHTML = "";
    }

    // Get the URL of the woff2 file and convert to binary
    const fontURL = fontStyle.split("\n").filter(ele => ele.indexOf("src:") != -1)[0].match(/src:\s+url\(([^)]+)\)/)[1];
    const fontBinary = await (await fetch(fontURL)).arrayBuffer();
    const fontBuffer = new Buffer.from(fontBinary);
    const thisFont = fontkit.create(fontBuffer);

    // Copy default palette to customized palette
    originalPalette = thisFont.CPAL.colorRecords.slice(
        thisFont.CPAL.colorRecordIndices[0],
        thisFont.CPAL.colorRecordIndices[0] + thisFont.CPAL.numPaletteEntries
    ).map(ele => [ele.red, ele.green, ele.blue, ele.alpha]);
    customizedPalette = originalPalette.map(rgbaColorArray => [...rgbaColorArray]);

    // Reset color color-pickers
    const colorPickers = document.getElementById("color-pickers");
    while (colorPickers.firstChild) {
        colorPickers.removeChild(colorPickers.firstChild);
    }

    // Check if color picker should be override
    var modifiedColorPickers = {}
    if (paletteCode.length !== 0) {
        paletteCode.split("), ").forEach((rgbColor, _) => {
            const match = rgbColor.match(/\d+/g).map((str) => parseInt(str));
            modifiedColorPickers[match[0]] = [match[1], match[2], match[3], match[4]]
        })
    }

    // Add each color picker under color-picker DOM
    customizedPalette.forEach((rgbaColorArray, idx) => {
        const picker = document.createElement("input");
        picker.setAttribute("class", "color-block");
        picker.setAttribute("id", `color-block-${idx}`);
        picker.type = "color";

        if (idx in modifiedColorPickers && keepPalette) {
            picker.value = rgbaToHexColor(modifiedColorPickers[idx])
        } else {
            picker.value = rgbaToHexColor(rgbaColorArray)
        };

        colorPickers.appendChild(picker);
        picker.addEventListener("input", (event) => {
            getRGBAFromPicker(idx, event.target.value.substring(1));
            updateEmojiAndURL()
        });
    });

    const loadPromises = Array.from(document.fonts.values()).map(fontFace => fontFace.load());
    await Promise.all(loadPromises);

    if (!keepPalette) {
        window.location.hash = emojiToUnicode(thisEmoji);
    }
    updateCanvas("reference-canvas", thisEmoji)
}


function updateCanvas(domIdName, thisEmoji) {
    const canvas = document.getElementById(domIdName);
    const ctx = canvas.getContext("2d")
    const scaleProp = 10
    if (domIdName == "result-canvas") {
        canvas.width = document.getElementById("customized-emoji").clientWidth * scaleProp;
        canvas.height = document.getElementById("customized-emoji").clientHeight * scaleProp;
        ctx.scale(scaleProp, scaleProp);
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Get font size from px to em
    const childFontSizePx = parseFloat(window.getComputedStyle(document.getElementById("customized-emoji")).getPropertyValue("font-size"));
    const parentFontSizePx = parseFloat(window.getComputedStyle(document.getElementById("customized-emoji").parentElement).getPropertyValue("font-size"))
    const realFontSizeEm = childFontSizePx / parentFontSizePx

    // Set canvas
    ctx.font = `${realFontSizeEm}em "Noto Color Emoji"`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    if (domIdName == "result-canvas") {
        ctx.fillText(thisEmoji, canvas.width / (2 * scaleProp), canvas.height / (2 * scaleProp));
    } else {
        ctx.fillText(thisEmoji, canvas.width / 2, canvas.height / 2);
    }
}


function getRandomColor() {
    const minVal = 0
    const maxVal = 255
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}


function selectRandomColor() {
    numPicker = document.querySelectorAll(".color-block").length;
    customizedPalette.forEach((_, idx) => {
        customizedPalette[idx] = [getRandomColor(), getRandomColor(), getRandomColor(), 255]
        document.getElementById(`color-block-${idx}`).value = rgbaToHexColor(customizedPalette[idx])
    })
    updateEmojiAndURL()
}


function selectedFromPicker(thisEmoji) {
    const emojiPickerContainer = document.getElementById("emoji-picker-container");
    if (emojiPickerContainer.style.display === "none") {
        emojiPickerContainer.style.display = "block";
    } else {
        emojiPickerContainer.style.display = "none";
    }
    updateEmoji(thisEmoji, false)
}


// See https://github.com/missive/emoji-mart for more info and settings
document.addEventListener("DOMContentLoaded", function() {
    const emojiPickerOptionsDesktop = {
        onEmojiSelect: (res, _) => selectedFromPicker(res["native"]),
        set: "google",
        emojiSize: 36,
        perLine: 8,
    };
    const emojiPickerDesktop = new EmojiMart.Picker(emojiPickerOptionsDesktop);
    document.getElementById("emoji-picker").appendChild(emojiPickerDesktop);

    // RWD
    const emojiPickerButton = document.getElementById("emoji-picker-button");
    const emojiPickerContainer = document.getElementById("emoji-picker-container");
    const emojiPickerOptionsMobile = {
        onEmojiSelect: (res, _) => selectedFromPicker(res["native"]),
        set: "google",
        emojiSize: 36,
        perLine: 8,
    };
    const emojiPickerMobile = new EmojiMart.Picker(emojiPickerOptionsMobile);
    emojiPickerContainer.appendChild(emojiPickerMobile);

    emojiPickerButton.addEventListener("click", function() {
        if (emojiPickerContainer.style.display === "none") {
            emojiPickerContainer.style.display = "block";
        } else {
            emojiPickerContainer.style.display = "none";
        }
    });
});


Array.from(document.getElementsByClassName("random-emoji-button"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            console.log("...🎲 Random Select an Emoji 🎲...")
            updateEmoji(getRandomEmoji(), false);
        });
    });

Array.from(document.getElementsByClassName("random-color-button"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            console.log("...🎨 Random Set Colors 🎨...")
            selectRandomColor();
        });
    });

Array.from(document.getElementsByClassName("reset-button"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            console.log("...🪄 Restore Palette 🪄...")
            const thisEmoji = document.getElementById("customized-emoji").innerHTML;
            updateEmoji(thisEmoji, false)
        });
    });

Array.from(document.getElementsByClassName("download-button"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            const resultCanvas = document.getElementById("result-canvas")
            updateCanvas("result-canvas", document.getElementById("customized-emoji").innerHTML);
            const dataURL = resultCanvas.toDataURL("image/png");

            // Create an anchor element to trigger the download
            const downloadLink = document.createElement("a");
            console.log(`...💾 Now Downloading Your ${document.getElementById("customized-emoji").innerHTML} 💾 ...`)
            downloadLink.href = dataURL;
            downloadLink.download = `${emojiToUnicode(document.getElementById("customized-emoji").innerHTML)}-EmojiOOTD.png`;
            downloadLink.click();
        });
    });


Array.from(document.getElementsByClassName("share-facebook"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}`;
            window.open(facebookShareURL, "_blank");
        });
    });

Array.from(document.getElementsByClassName("share-twitter"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            const message = `#EmojiSalon ${shareURL}`
            const twitterShareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
            window.open(twitterShareURL, "_blank");
        });
    });


Array.from(document.getElementsByClassName("share-line"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            const lineShareURL = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareURL)}`;
            window.open(lineShareURL, "_blank");
        });
    });

function showSupportIssueModal() {
    const modal = document.getElementById("supportIssue");
    const closeButton = modal.querySelector(".close");
  
    modal.style.display = "block";
  
    closeButton.onclick = function () {
      modal.style.display = "none";
    };
  
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
  

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari){
    showSupportIssueModal(); 
    console.log("Oops, your browser seems to not support OpenType COLR/CPALv1 font, please change another browser such as Desktop Chrome or FireFox.")        
} else{
    console.log("Great, your browser support OpenType COLR/CPALv1 font!")
}


// default Emoji
function getRandomEmoji() {
    const defaultEmojis = ["😀", "😙", "😎", "😪", "🤤", "😴", "😰", "🫁", "🦷", "🦴", "👀", "🚀", "👍", "🤟", "🤘", "🤙", "🧚‍♀️", "🧚", "🧚‍♂️", "🧑‍⚕️", "👨‍⚕️", "👩‍⚕️", "🧑‍🎓", "👨‍🎓", "👩‍🎓", "🧑‍🏫", "👨‍🏫", "👩‍🏫", "🧑‍⚖️", "👨‍⚖️", "👩‍⚖️", "🌟", "🧤", "🍣", "🍤", "🍥", "🥮", "🍡", "🥟", "🍔", "🐈", "🐈‍⬛", "🐟", "🍕", "🎉", "🐓", "🐱", "🌺", "🍎", "🏛", "🐭", "🐮", "🐯", "🐰", "🐲", "🐍", "🐴", "🐏", "🐵", "🐔", "🐶", "🐷", "🐕", "🐑", "🐤", "🦕", "🦖", "🐳", "🐋", "🐬", "🦋", "🍀", "🍒", "🌭", "🍩", "🏅", "🚂", "🚗", "🏍️", "🛳️", "☃️", "🥻", "🧥", "👜", "👢", "📱", "🧮", "🗃️", "🛋️", "🩴", "🎮", "🎠", "🛝", "🎡", "🎢", "💈", "🎪"];
    const randomIndex = Math.floor(Math.random() * defaultEmojis.length);
    return defaultEmojis[randomIndex];
}


// Set canvas dimensions based on customized-emoji size
const originalCanvas = document.getElementById("reference-canvas");
originalCanvas.width = document.getElementById("customized-emoji").clientWidth;
originalCanvas.height = document.getElementById("customized-emoji").clientHeight;


if (window.location.hash) {
    inputString = window.location.hash.substring(1)
    const parts = inputString.split("-");
    // If url has Emoji info, use it
    document.getElementById("customized-emoji").innerHTML = unicodeToEmoji(parts[0])
    updateEmoji(unicodeToEmoji(parts[0]), true);

    // If irl has palette info, use it
    if (parts.length > 1) {
        paletteCode = decodeURIComponent(decodeURL(parts[1]));
        setOverridePaletteStyle(paletteCode)
    }
} else {
    updateEmoji(getRandomEmoji(), true);
}







  