const fontkit = require("fontkit");
var originalPalette = [];
var customizedPalette = [];
var originalPaletteIndex = []
var paletteCode = "";
var currentURL = window.location.href;


var twemojiFontURL, twemojiFontBinary, twemojiFontBuffer, twemojiFont

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})




// For example, converter rgba(67, 255, 100, 255) to #43ff64
function rgbaToHexColor(rgbaColorArray) {
    return "#" + rgbaColorArray.slice(0, 3)
        .map(ele => ele.toString(16))
        .map(ele => ele.length == 1 ? "0" + ele : ele) // Padding zero to two digits
        .join("");
}


function emojiToUnicode(thisEmoji) {
    var res = []
    const subEmojis = [...thisEmoji]
    subEmojis.forEach((ele, _) => {
        if (ele.length === 1) { // ZWJ or EMOJI MODIFIER FITZPATRICK
            res.push(ele.charCodeAt(0).toString("16").toUpperCase())
        } else if (ele.length === 2) {
            const comp = (
                (ele.charCodeAt(0) - 0xD800) * 0x400 +
                (ele.charCodeAt(1) - 0xDC00) + 0x10000
            );
            res.push(comp.toString("16").toUpperCase())
        }
    })
    return `U+${res.join("+")}`
}


function unicodeToEmoji(urlCode) {
    try {
        var fin = []
        const codes = urlCode.replace("U+", "").split("+");
        codes.forEach((code, _) => {
            const intCodePoint = parseInt(code, 16);
            const character = String.fromCodePoint(intCodePoint);
            fin.push(character)
        })
        var character = fin.join("")
        // check is an emoji
        const emojisRegex = /^(\p{Extended_Pictographic}|\p{Emoji_Component}|\p{Emoji})+$/u;
        if (emojisRegex.test(character)) {
            return character
        } else {
            throw err;
        }
    } catch (err) {
        throw err;
    }
}


// Check if two RGBA colors are equal
function areColorsEqual(rgba1, rgba2) {
    return rgba1 === rgba2 
}


function encodeURL(url) {
    return url.replaceAll(" ", "").replaceAll("#", "(").replaceAll(",", ")") + ")"
}


function decodeURL(url) {
    return url.substring(0, url.length-1).replaceAll(")", ", ").replaceAll("(", " #")
}


// Get the CSS override colors
function getOverrideStyleString() {
    // Format Example:
    // override-colors:
    // 0 #FFFFFF
    // 1 #123456
    // ...
    // If customize colors are different from default colors, record them into overrides 
    return customizedPalette
            .map((rgbaColorArray, idx) => `${originalPaletteIndex[idx]} ${rgbaColorArray}`)
            .filter((_, idx) => !areColorsEqual(customizedPalette[idx], rgbaToHexColor(originalPalette[idx])))
            .join(", ");
}



// Update the CSS palette
function setOverridePaletteStyle(overrideColors) {
        document.getElementById("palette-overrides-style").innerHTML = `
    @font-palette-values --palette {
        font-family: "Twemoji";
        base-palette: 0;
        override-colors: ${overrideColors};
    }
    `;
}


function getHexColorFromPicker(paletteIndex, hexColor) {
    customizedPalette[paletteIndex] = hexColor
}


// Update a palette from input entry
function updateEmojiAndURL() {
    const overrideColors = getOverrideStyleString()
    const thisEmoji = document.getElementById("customized-emoji").innerHTML;
    setOverridePaletteStyle(overrideColors);
    window.location.hash = `${emojiToUnicode(thisEmoji)}-${encodeURIComponent(encodeURL(overrideColors))}`;
    currentURL = window.location.href
}



async function updateEmoji(thisEmoji, keepPalette) {
    var fontStyle

    document.getElementById("customized-emoji").style.fontFamily = "Twemoji"

    fontStyle = `
    @font-face {
        font-family: "Twemoji";
    `
    // fontURL = "https://cdn.jsdelivr.net/npm/twemoji-colr-font@14.1.3/twemoji.woff2"
    originalPaletteIndex = []
    
    console.log(twemojiFont.layout(thisEmoji).glyphs)

    twemojiFont.layout(thisEmoji).glyphs[0].layers.forEach((layer, _) => {
        const hexColor = layer.color
        originalPaletteIndex.push(twemojiFont.CPAL.colorRecords.indexOf(hexColor))
    })
    originalPaletteIndex = [...new Set(originalPaletteIndex)]
    originalPalette = originalPaletteIndex.map(index => twemojiFont.CPAL.colorRecords[index]).map(ele => [ele.red, ele.green, ele.blue, ele.alpha]);

    // Reset CSS style
    document.getElementById("emoji-style").innerHTML = fontStyle;
    document.getElementById("customized-emoji").innerHTML = thisEmoji;
    if (!keepPalette) {
        document.getElementById("palette-overrides-style").innerHTML = "";
    }

    console.log(twemojiFont.CPAL.colorRecords[79], twemojiFont.CPAL.colorRecords[32])

    // Copy default palette to customized palette
    customizedPalette = []
    originalPalette.forEach((rbgaColor, _) =>{
        customizedPalette.push(rgbaToHexColor(rbgaColor));
    })

    // console.log(customizedPalette[79], customizedPalette[32])


    
    // Reset color color-pickers
    const colorPickers = document.getElementById("color-pickers");
    while (colorPickers.firstChild) {
        colorPickers.removeChild(colorPickers.firstChild);
    }

    // Check if color picker should be override
    var modifiedColorPickers = {}
    if (paletteCode.length !== 0) {
        paletteCode.split(", ").forEach((hexColorPair, _) => {
            const colorIdx = parseInt(hexColorPair.split("#")[0])
            const hexColor = "#" + hexColorPair.split("#")[1]
            modifiedColorPickers[originalPaletteIndex.indexOf(colorIdx)] = hexColor
        })
    }

    // Add each color picker under color-picker DOM
    customizedPalette.forEach((hexColor, idx) => {
        const picker = document.createElement("input");
        picker.setAttribute("class", "color-block");
        picker.setAttribute("id", `color-block-${idx}`);
        picker.type = "color";

        if (idx in modifiedColorPickers && keepPalette) {
            picker.value = modifiedColorPickers[idx]
        } else {
            picker.value = hexColor
        };

        colorPickers.appendChild(picker);
        picker.addEventListener("input", (event) => {
            getHexColorFromPicker(idx, event.target.value);
            updateEmojiAndURL()
        });
    });

    const loadPromises = Array.from(document.fonts.values()).map(fontFace => fontFace.load());
    await Promise.all(loadPromises);

    if (!keepPalette) {
        window.location.hash = `${emojiToUnicode(thisEmoji)}`;
    }
    updateCanvas("reference-canvas", thisEmoji)
}


function updateCanvas(canvasId, thisEmoji) {
    console.log(`→ Render ${thisEmoji}`)
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d")
    const scaleProp = 10
    if (canvasId == "result-canvas") {
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
    ctx.font = `${realFontSizeEm}em "Twemoji"`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    if (canvasId == "result-canvas") {
        ctx.fillText(thisEmoji, canvas.width / (2 * scaleProp), canvas.height / (2 * scaleProp));
    } else {
        ctx.fillText(thisEmoji, canvas.width / 2, canvas.height / 2);
    }
}




function selectRandomColor() {

    function getRandomColor() {
        const minVal = 0
        const maxVal = 255
        return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    }

    // const numPicker = document.querySelectorAll(".color-block").length;
    customizedPalette.forEach((_, idx) => {
        const hexRndColor = rgbaToHexColor([getRandomColor(), getRandomColor(), getRandomColor(), 255])
        customizedPalette[idx] = hexRndColor
        document.getElementById(`color-block-${idx}`).value = hexRndColor
    })
    updateEmojiAndURL()
}


function selectedFromPicker(thisEmoji) {
    const emojiPickerContainer = document.getElementById("emoji-picker-mobile");
    if (emojiPickerContainer.style.display === "none") {
        emojiPickerContainer.style.display = "block";
    } else {
        emojiPickerContainer.style.display = "none";
    }
    updateEmoji(thisEmoji, false)
}


// See https://github.com/missive/emoji-mart for more info and settings
function loadEmojiPicker() {
    const emojiPickerOptions = {
            onEmojiSelect: (res, _) => selectedFromPicker(res["native"]),
            set: "twitter",
            emojiSize: 36,
            perLine: 8,
            theme: "light",
            maxFrequentRows: 1,
            exceptEmojis: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero", "keycap_star", "hash"],
        };


    const emojiPickerDesktopContainer = document.getElementById("emoji-picker-desktop");
    const emojiPickerMobileContainer = document.getElementById("emoji-picker-mobile");

    while (emojiPickerDesktopContainer.firstChild) {
        emojiPickerDesktopContainer.removeChild(emojiPickerDesktopContainer.firstChild);
    }

    while (emojiPickerMobileContainer.firstChild) {
        emojiPickerMobileContainer.removeChild(emojiPickerMobileContainer.firstChild);
    }

    // Desktop Size
    const emojiPickerDesktop = new EmojiMart.Picker(emojiPickerOptions);
    emojiPickerDesktopContainer.appendChild(emojiPickerDesktop);

    // Mobile size
    const emojiPickerMobile = new EmojiMart.Picker(emojiPickerOptions);
    emojiPickerMobileContainer.appendChild(emojiPickerMobile);
}


function changeDownloadButtonIcon() {
    Array.from(document.getElementsByClassName("download-button")).forEach(function(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        element.insertAdjacentHTML("afterbegin", `
        <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
        </svg>
`)
    })
}

document.addEventListener("DOMContentLoaded", function() {
    const emojiPickerButton = document.getElementById("emoji-picker-button");
    const emojiPickerMobileContainer = document.getElementById("emoji-picker-mobile");

    emojiPickerButton.addEventListener("click", function() {
        if (emojiPickerMobileContainer.style.display === "none") {
            emojiPickerMobileContainer.style.display = "block";
        } else {
            emojiPickerMobileContainer.style.display = "none";
        }
    });
})


Array.from(document.getElementsByClassName("random-emoji-button"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            console.log("→ Random Select an Emoji 🎲")
            updateEmoji(getRandomEmoji(), false);
            changeDownloadButtonIcon()
        });
    });

Array.from(document.getElementsByClassName("random-color-button"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            console.log("→ Random Set Colors 🎨")
            selectRandomColor();
            changeDownloadButtonIcon()
        });
    });

Array.from(document.getElementsByClassName("reset-button"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            console.log("→ Reset Palette 🪄")
            const thisEmoji = document.getElementById("customized-emoji").innerHTML;
            updateEmoji(thisEmoji, false)
            changeDownloadButtonIcon()
        });
    });

Array.from(document.getElementsByClassName("download-button"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            const resultCanvas = document.getElementById("result-canvas")
            updateCanvas("result-canvas", document.getElementById("customized-emoji").innerHTML);
            const dataURL = resultCanvas.toDataURL("image/png");

            // Create dummy element to trigger the download
            const downloadLink = document.createElement("a");
            console.log(`→ Downloading Your ${document.getElementById("customized-emoji").innerHTML} 💾`)
            downloadLink.href = dataURL;
            downloadLink.download = `${emojiToUnicode(document.getElementById("customized-emoji").innerHTML)}-EmojiSalon.png`;
            downloadLink.click();

            // change icon
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            element.insertAdjacentHTML("afterbegin", `
                <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm1.354 4.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                </svg>
                `);
        });
    });


Array.from(document.getElementsByClassName("share-button"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            updateCanvas("result-canvas", document.getElementById("customized-emoji").innerHTML);
            document.getElementById("result-image").src = document.getElementById("result-canvas").toDataURL("image/png");
            changeDownloadButtonIcon()

            Array.from(document.getElementsByClassName("copy-link")).forEach(function(element) {
                while (element.firstChild) {
                    element.removeChild(element.firstChild);
                }
                element.insertAdjacentHTML("afterbegin", `
                <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                </svg>
        `)
            })
            showShareModal()
        });
    });


Array.from(document.getElementsByClassName("share-facebook"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            const facebookShareURL = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(currentURL)}`;
            window.open(facebookShareURL, "_blank");
        });
    });

Array.from(document.getElementsByClassName("share-twitter"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            const message = `#EmojiSalon ${currentURL}`
            const twitterShareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
            window.open(twitterShareURL, "_blank");
        });
    });


Array.from(document.getElementsByClassName("share-line"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            const lineShareURL = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(currentURL)}`;
            window.open(lineShareURL, "_blank");
        });
    });


Array.from(document.getElementsByClassName("share-linkedin"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            const lineShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentURL)}`;
            window.open(lineShareURL, "_blank");
        });
    });


Array.from(document.getElementsByClassName("copy-link"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            var dummy = document.createElement("input");
            document.body.appendChild(dummy);
            dummy.value = window.location.href;
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);

            // change icon
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            element.insertAdjacentHTML("afterbegin", `
            <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/>
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/>
            </svg>
    `);

        });
    });


function showShareModal() {
    const modal = document.getElementById("shareBoard");
    const closeButton = modal.querySelector(".close");

    modal.style.display = "block";

    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}





// Default Emoji List
function getRandomEmoji() {
    const defaultEmojis = ["😀", "😙", "😎", "😪", "🤤", "😴", "😰", "🫁", "🦷", "🦴", "👀", "🚀", "👍", "🤟", "🤘", "🤙", "🧚‍♀️", "🧚", "🧚‍♂️", "🧑‍⚕️", "👨‍⚕️", "👩‍⚕️", "🧑‍🎓", "👨‍🎓", "👩‍🎓", "🧑‍🏫", "👨‍🏫", "👩‍🏫", "🧑‍⚖️", "👨‍⚖️", "👩‍⚖️", "🌟", "🧤", "🍣", "🍤", "🍥", "🥮", "🍡", "🥟", "🍔", "🐈", "🐈‍⬛", "🐟", "🍕", "🎉", "🐓", "🐱", "🌺", "🍎", "🏛", "🐭", "🐮", "🐯", "🐰", "🐲", "🐍", "🐴", "🐏", "🐵", "🐔", "🐶", "🐷", "🐕", "🐑", "🐤", "🦕", "🦖", "🐳", "🐋", "🐬", "🦋", "☕️", "🍒", "🌭", "🍩", "🏅", "🚂", "🚗", "🥻", "🧥", "👜", "👢", "📱", "🧮", "🩴", "🎮", "🎠", "🛝", "🎡", "🎢", "💈", "🎪", "🍭", "🦄", "🎨"];
    const randomIndex = Math.floor(Math.random() * defaultEmojis.length);
    return defaultEmojis[randomIndex];
}



async function main() {

    // loadTwemoji
    twemojiFontURL = "https://cdn.jsdelivr.net/npm/twemoji-colr-font@14.1.3/twemoji.woff2";
    twemojiFontBinary = await (await fetch(twemojiFontURL)).arrayBuffer();
    twemojiFontBuffer = new Buffer.from(twemojiFontBinary);
    twemojiFont = fontkit.create(twemojiFontBuffer);


    // Set canvas dimensions based on customized-emoji size
    const originalCanvas = document.getElementById("reference-canvas");
    originalCanvas.width = document.getElementById("customized-emoji").clientWidth;
    originalCanvas.height = document.getElementById("customized-emoji").clientHeight;
    var thisEmoji = ""

    if (window.location.hash) {
        try {
            const inputString = window.location.hash.substring(1)
            const parts = inputString.split("-");

            document.getElementById("noto-emoji-share-notice").classList.add("d-none");

            // If url has palette info, use it
            if (parts.length > 1) {
                paletteCode = decodeURIComponent(decodeURL(parts[1]));
                setOverridePaletteStyle(paletteCode)
            }

            thisEmoji = unicodeToEmoji(parts[0])
            document.getElementById("customized-emoji").innerHTML = thisEmoji
            updateEmoji(thisEmoji, true);
            console.log(`→ Url Info: ${thisEmoji} 🔗`)


        } catch (e) {
            console.log("→ Get invalid url ❓", e)
            document.getElementById("noto-emoji-share-notice").classList.add("d-none");
            console.log("→ Random select an emoji 🎰")
            thisEmoji = getRandomEmoji()
            updateEmoji(thisEmoji, true);
            window.location.hash = `${emojiToUnicode(thisEmoji)}`;
        }
    } else {
        console.log("→ Get home url 🏚")
        document.getElementById("noto-emoji-share-notice").classList.add("d-none");
        console.log("→ Random select an emoji 🎰")
        thisEmoji = getRandomEmoji()
        updateEmoji(thisEmoji, true);
        window.location.hash = `${emojiToUnicode(thisEmoji)}`;
    }
    loadEmojiPicker()
}


main()
