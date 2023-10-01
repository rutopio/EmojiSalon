const fontkit = require("fontkit");
var originalPalette = [];
var customizedPalette = [];
var originalPaletteIndex = []
var paletteCode = "";
var currentURL = window.location.href;
var emojiStyle = "twemoji";


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
    try {
        const codePoint = unicode.replace("U+", "");
        const intCodePoint = parseInt(codePoint, 16);
        const character = String.fromCodePoint(intCodePoint);
        const emojisRegex = /\p{Extended_Pictographic}/u
        if (emojisRegex.test(character)) {
            return character
        } else {
            throw err;
        }
    } catch (e) {
        throw err;
    }
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
    // If customize colors are different from default colors, record them into overrides 

    if (emojiStyle === "noto") {
        return customizedPalette
            .map((rgbaColorArray, idx) => `${idx} rgba(${rgbaColorArray.join(", ")})`)
            .filter((_, idx) => !areColorsEqual(customizedPalette[idx], originalPalette[idx]))
            .join(", ");
    } else if (emojiStyle === "twemoji") {
        return customizedPalette
            .map((rgbaColorArray, idx) => `${originalPaletteIndex[idx]} rgba(${rgbaColorArray.join(", ")})`)
            .filter((_, idx) => !areColorsEqual(customizedPalette[idx], originalPalette[idx]))
            .join(", ");
    }
}



// Update the CSS palette
function setOverridePaletteStyle(overrideColors) {
    if (emojiStyle === "noto") {
        document.getElementById("palette-overrides-style").innerHTML = `
		@font-palette-values --palette {
			font-family: "Noto Color Emoji";
			base-palette: 0;
			override-colors: ${overrideColors};
		}
		`;
    } else if (emojiStyle === "twemoji") {
        document.getElementById("palette-overrides-style").innerHTML = `
    @font-palette-values --palette {
        font-family: "Twemoji";
        base-palette: 0;
        override-colors: ${overrideColors};
    }
    `;
    }
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
    window.location.hash = `${emojiStyle === "noto"? "n" : "t"}-${emojiToUnicode(thisEmoji)}-${encodeURIComponent(encodeURL(overrideColors))}`;
    currentURL = window.location.href
}



async function updateEmoji(thisEmoji, keepPalette) {
    var fontStyle

    if (emojiStyle === "noto") {
        document.getElementById("customized-emoji").style.fontFamily = "Noto Color Emoji"

        // Fetch Google Font Noto Sans Emoji CSS
        const fontResponse = await fetch("https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&text=" + encodeURIComponent(thisEmoji));
        fontStyle = await fontResponse.text();
        const fontURL = fontStyle.split("\n").filter(ele => ele.indexOf("src:") != -1)[0].match(/src:\s+url\(([^)]+)\)/)[1];
        const fontBinary = await (await fetch(fontURL)).arrayBuffer();
        const fontBuffer = new Buffer.from(fontBinary);
        const thisFont = fontkit.create(fontBuffer);

        originalPalette = thisFont.CPAL.colorRecords.slice(
            thisFont.CPAL.colorRecordIndices[0],
            thisFont.CPAL.colorRecordIndices[0] + thisFont.CPAL.numPaletteEntries
        ).map(ele => [ele.red, ele.green, ele.blue, ele.alpha]);

    } else if (emojiStyle === "twemoji") {
        document.getElementById("customized-emoji").style.fontFamily = "Twemoji"

        fontStyle = `
        @font-face {
            font-family: "Twemoji";
        `
        // fontURL = "https://cdn.jsdelivr.net/npm/twemoji-colr-font@14.1.3/twemoji.woff2"
        originalPaletteIndex = []
        twemojiFont.layout(thisEmoji).glyphs[0].layers.forEach((layer, _) => {
            const thisColor = layer.color
            originalPaletteIndex.push(twemojiFont.CPAL.colorRecords.indexOf(thisColor))
        })
        originalPaletteIndex = [...new Set(originalPaletteIndex)]
        originalPalette = originalPaletteIndex.map(index => twemojiFont.CPAL.colorRecords[index]).map(ele => [ele.red, ele.green, ele.blue, ele.alpha]);
    }

    // Reset CSS style
    document.getElementById("emoji-style").innerHTML = fontStyle;
    document.getElementById("customized-emoji").innerHTML = thisEmoji;
    if (!keepPalette) {
        document.getElementById("palette-overrides-style").innerHTML = "";
    }


    // Copy default palette to customized palette
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
        window.location.hash = `${emojiStyle === "noto" ? "n" : "t"}-${emojiToUnicode(thisEmoji)}`;
    }
    updateCanvas("reference-canvas", thisEmoji)
}


function updateCanvas(domIdName, thisEmoji) {
    console.log(`→ ${thisEmoji}`)
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

    if (emojiStyle === "noto") {
        ctx.font = `${realFontSizeEm}em "Noto Color Emoji"`;
    } else if (emojiStyle === "twemoji") {
        ctx.font = `${realFontSizeEm}em "Twemoji"`;
    }

    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    if (domIdName == "result-canvas") {
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
        customizedPalette[idx] = [getRandomColor(), getRandomColor(), getRandomColor(), 255]
        document.getElementById(`color-block-${idx}`).value = rgbaToHexColor(customizedPalette[idx])
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
    var emojiPickerOptions
    if (emojiStyle === "twemoji") {
        emojiPickerOptions = {
            onEmojiSelect: (res, _) => selectedFromPicker(res["native"]),
            set: "twitter",
            emojiSize: 36,
            perLine: 8,
            theme: "light",
            maxFrequentRows: 1,
        };
    } else if (emojiStyle === "noto") {
        emojiPickerOptions = {
            onEmojiSelect: (res, _) => selectedFromPicker(res["native"]),
            set: "google",
            emojiSize: 36,
            perLine: 8,
            theme: "light",
            maxFrequentRows: 1,
        };
    }

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
            console.log("→ Restore Palette 🪄")
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

function showSupportIssueModal() {
    const modal = document.getElementById("supportIssue");
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




document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById("emojiStyleSwitch");

    toggleSwitch.addEventListener("change", function() {
        if (!toggleSwitch.checked) {
            emojiStyle = "twemoji"
            console.log("→ Emoji Style Change to Twemoji 👀");
            document.getElementById("noto-emoji-share-notice").classList.remove("d-block")
            document.getElementById("noto-emoji-share-notice").classList.add("d-none");
            loadEmojiPicker()

        } else {
            emojiStyle = "noto"
            console.log("→ Emoji Style Change to Noto Color Emoji 👀");
            document.getElementById("noto-emoji-share-notice").classList.remove("d-none")
            document.getElementById("noto-emoji-share-notice").classList.add("d-block");

            loadEmojiPicker()
        }
    });
});


// Default Emoji List
function getRandomEmoji() {
    const defaultEmojis = ["😀", "😙", "😎", "😪", "🤤", "😴", "😰", "🫁", "🦷", "🦴", "👀", "🚀", "👍", "🤟", "🤘", "🤙", "🧚‍♀️", "🧚", "🧚‍♂️", "🧑‍⚕️", "👨‍⚕️", "👩‍⚕️", "🧑‍🎓", "👨‍🎓", "👩‍🎓", "🧑‍🏫", "👨‍🏫", "👩‍🏫", "🧑‍⚖️", "👨‍⚖️", "👩‍⚖️", "🌟", "🧤", "🍣", "🍤", "🍥", "🥮", "🍡", "🥟", "🍔", "🐈", "🐈‍⬛", "🐟", "🍕", "🎉", "🐓", "🐱", "🌺", "🍎", "🏛", "🐭", "🐮", "🐯", "🐰", "🐲", "🐍", "🐴", "🐏", "🐵", "🐔", "🐶", "🐷", "🐕", "🐑", "🐤", "🦕", "🦖", "🐳", "🐋", "🐬", "🦋", "🍀", "🍒", "🌭", "🍩", "🏅", "🚂", "🚗", "🥻", "🧥", "👜", "👢", "📱", "🧮", "🩴", "🎮", "🎠", "🛝", "🎡", "🎢", "💈", "🎪", "🍭", "🦄", "🎨"];
    const randomIndex = Math.floor(Math.random() * defaultEmojis.length);
    return defaultEmojis[randomIndex];
}


// Reference: https://github.com/RoelN/ChromaCheck
function checkColorFontSupport() {
    console.log("→ Checking compatibility about color font of your browser 🕵️")
    var root = document.getElementById("opentype-support-detector"),
        cls = 'chromacheck-',
        runs = 20,
        loop;

    // Stick SVG on canvas and check control glyph to see if font rendered
    function checkFontLoad() {
        context.drawImage(img, 0, 0);

        // Check Control glyph.
        if (context.getImageData(10, 110, 1, 1).data[1] === 0) {
            clearInterval(loop);
            colorGlyphTest();
            return true;
        } else if (--runs <= 0) {
            clearInterval(loop);
            checkFailed();
        }
    }

    // Canvas has been drawn, check for which color glyphs we see
    function colorGlyphTest() {
        var res = {};
        res.cbdt = context.getImageData(10, 10, 1, 1).data[0] === 100; // CBDT/CBLC
        res.colr = context.getImageData(10, 30, 1, 1).data[0] === 200; // COLR
        res.sbix = context.getImageData(10, 50, 1, 1).data[0] === 150; // SBIX
        res.svg = context.getImageData(10, 70, 1, 1).data[0] === 50; // OpenType-SVG
        res.colrv1 = context.getImageData(10, 90, 1, 1).data[0] === 250; // COLRv1

        // Add class to HTML tag for each supported color format
        for (var key in res) {
            if (res.hasOwnProperty(key)) {
                if (res[key]) {
                    root.className += ' ' + cls + key // success
                } else {
                    root.className += ' ' + cls + key + "-failed" //failed   
                }
            }
        }
    }

    // Font, SVG, or canvas failed
    function checkFailed() {
        root.className += ' ' + cls + 'failed';
    }

    // Draw color glyphs to a canvas through SVG
    try {
        var canvas = document.createElement('canvas'),
            context = canvas.getContext('2d'),
            img = new Image(),
            fontCBDT = 'd09GRgABAAAAAALkAAwAAAAAAxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDQkRUAAACVAAAAGAAAABlKWauy0NCTEMAAAK0AAAALQAAAFDwVcDTT1MvMgAAAYAAAAA6AAAAYBf0J01jbWFwAAABxAAAACcAAAAsAAzpNmdseWYAAAH0AAAAGgAAABoNIh0kaGVhZAAAARwAAAAvAAAANgxLx0hoaGVhAAABTAAAABUAAAAkCAEEAmhtdHgAAAG8AAAABgAAAAYEAAAAbG9jYQAAAewAAAAGAAAABgANAABtYXhwAAABZAAAABsAAAAgAg4AHW5hbWUAAAIQAAAAOAAAAD4C3AsWcG9zdAAAAkgAAAAMAAAAIAADAAB4AWNgZGAA4bSjsh/j+W2+MkizMIDApQVMAiD6Wm2DNYhmYQCLczAwgSgAAJIHngB4AWNgZGBgYQACOAkUQQWMAAGRABAAAAB4AWNgZGBgYGJgAdMMUJILJMQgAWICAAH3AC4AeAFjYGFhYJzAwMrAwDST6QwDA0M/hGZ8zWDMyMmAChgFkDgKQMBw4CXzS2YWMB9IogMFBgYAAI4IegAABAAAAAAAAAB4AWNgYGBkYAZiBgYeBhYGBSDNAoRA/kvm//8hpNg/sDwDAFyDBygAAAAAAAANAAAAAQAAAAAEAAQAAAMAABEhESEEAPwABAD8AAAAeAFjYGBgYpBjYGZgZOFkYGRQAPIhbCYw25khg6GIIZ8hlyERzE5lSGbIZlAAsp0YXBhCAHWIBft4AWNgZsALAAB9AAR4AWNgYmAICAAhBoaIzgA/d14uKS4gm9fTwyUISAeAMCMzkNxyP+EdkGIO8AlxTWFgeLEkTg3IFfB0cQypYExeIC3BujhBBChfwMB4Z+L7yQxA4Onq57LOKaEJAK3VFft4AWNgYgABRiC2AGIJKJshAAhhAMEGyzIGBCgASbA6DiApCKRZoLKJAGrOAtkAAAA=',
            fontCOLR = 'd09GRgABAAAAAAKAAAwAAAAAAowAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDT0xSAAACVAAAABYAAAAYAAIAJUNQQUwAAAJsAAAAEgAAABLJAAAQT1MvMgAAAYAAAAA6AAAAYBfxJ0pjbWFwAAABxAAAACcAAAAsAAzpM2dseWYAAAH0AAAAGgAAABoNIh0kaGVhZAAAARwAAAAvAAAANgxLumdoaGVhAAABTAAAABUAAAAkCAEEAmhtdHgAAAG8AAAABgAAAAYEAAAAbG9jYQAAAewAAAAGAAAABgANAABtYXhwAAABZAAAABsAAAAgAg4AHW5hbWUAAAIQAAAAOAAAAD4C5wsecG9zdAAAAkgAAAAMAAAAIAADAAB4AWNgZGAAYQ5+qdB4fpuvDNIsDCBwaQGTAIi+VlscBaJZGMDiHAxMIAoAtjIF/QB4AWNgZGBgYQACOAkUQQWMAAGRABAAAAB4AWNgZGBgYGJgAdMMUJILJMQgAWICAAH3AC4AeAFjYGFhYJzAwMrAwDST6QwDA0M/hGZ8zWDMyMmAChgFkDgKQMBw4CXDSwYWEBdIYgAFBgYA/8sIdAAABAAAAAAAAAB4AWNgYGBkYAZiBgYeBhYGBSDNAoRA/kuG//8hpDgjWJ4BAFVMBiYAAAAAAAANAAAAAQAAAAAEAAQAAAMAABEhESEEAPwABAD8AAAAeAEtxgUNgAAAAMHHIQTShTlOAty9/4bf7AARCwlBNhBw4L/43qXjYGUmf19TMuLcj/BJL3XfBg54AWNgZsALAAB9AAR4AWNgYGAEYj4gFgGygGwICQACOwAoAAAAAAABAAEAAQAAAA4AAAAAyP8AAA==',
            fontSBIX = 'd09GRgABAAAAAALkAAsAAAAAA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABbAAAADoAAABgFxIli2NtYXAAAAGwAAAAJwAAACwADOk0Z2x5ZgAAAeAAAAAWAAAAFjdEBkBoZWFkAAABCAAAADAAAAA2C6KlkGhoZWEAAAE4AAAAFgAAACQGQQMiaG10eAAAAagAAAAGAAAABgMgAABsb2NhAAAB2AAAAAYAAAAGAAsAAG1heHAAAAFQAAAAGgAAACACDwAbbmFtZQAAAfgAAABDAAAATgSgDQdwb3N0AAACPAAAAAwAAAAgAAMAAHNiaXgAAAJIAAAAnAAAAQQlRrDFeAFjYGRgAGHhBIvaeH6brwzSzAoMQHBpAZMAiL62JcEZRDMrgMU5GJhAPADavQcJeAFjYGRgYFZgYECQQBFUwAgACqMAbQAAeAFjYGRgYGACQxBgBJNcDCCuBIgJAAHcAC0AAHgBY2BhVmCcwMDKwMA0k+kMAwNDP4RmfM1gzMjJgAoYBZA4CkDAcOAl40tGZgUQH0iiA6AIABEmCNMAAAMgAAAAAAAAeAFjYGBgZGAGYgYGHgYWBgUgzQKEQP5Lxv//IaQ4SA0QAABVYQYnAAAAAAAACwAAAAIAAAAAAyADIAAAAAEAADEBAyADIAAAeAEtxlUBgwAAQME3Q0IgEYiAFCAC7u7t0X3dAW9UPry+Mi8M+P993yVnI6bCoibAJyRjQsc5HWip8e/HhJQHAIYJsAB4AWNgZsALAAB9AAR4AWNgBEIGMOZh1GHwANICUPyDAQgK8tIVOgP83Hm5pLiAXF5PD5cgoHIdEOZgBor4La5zB1KSJa4RJcH5aSXliUWpDI4p+UmpCp65iempQamJKZWFJ1NtgIrYAnxCXKcxgEBehM9EkPGeLo4hFbfeHGQEuaBJ4f/6PA8HIJMW4EMeEw9DwmkGRotpVSIgAU9XP5d1TglNADtgJsU=',
            fontSVG = 'd09GRgABAAAAAALoAAsAAAAAAxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABcAAAADoAAABgF/MnTlNWRyAAAAJQAAAAlwAAAKrSQDCHY21hcAAAAbQAAAAtAAAANOkY6T1nbHlmAAAB7AAAAB4AAAA0KkgqRmhlYWQAAAEIAAAALwAAADYMS9SPaGhlYQAAATgAAAAVAAAAJAgBBAJobXR4AAABrAAAAAgAAAAIBAAAAGxvY2EAAAHkAAAACAAAAAgADQAabWF4cAAAAVAAAAAdAAAAIAIPAB1uYW1lAAACDAAAADcAAAA8ApwLJXBvc3QAAAJEAAAADAAAACAAAwAAeAFjYGRgAGFZjs2Z8fw2XxmkWRhA4NICJgEQfa22twlEszCAxTkYmEAUANtlBvoAeAFjYGRgYGEAAjgJFEEFjAABkQAQAAAAeAFjYGRgYGBmYAHTDFCSi4GBiYFBAsQEAAISAC8AAAB4AWNgYWFgnMDAysDANJPpDAMDQz+EZnzNYMzIyYAKGAWQOApAwHDgJdNLoAkgACTRgQIDAwAAjAh6AAAEAAAAAAAAAHgBJcU5AYBADACw3NeJuRrw76oi+MkSNEPDZtoRpqZXr3ld/OeVpwbcs+wKIQAAAAAAAAAADQAaeAFjYGQAAhYgZGBmYBBUFFRkYfjDAMK4ZQBZhAThAAB4AWNgYGBikGNgZmBk4WRgBLIYoGwmMNuZIYOhiCGfIZchEcxOZUhmyGZQYAhmCGNwBwBp2QXKAHgBY2BmwAsAAH0ABHgBHUw1dsRQDHTK4Bn+U1qzHdwP1WaDVaA2M7N9jFzYNGJpRtyGiz2f7cZxN2v8YzakCercqg7zjIAiyoDczM6dMPMJ/P68CI/AKK47H63ErCYQNE3xLEl934u9JuaVL6myLEsrA1DoEPCTsQgUoLgwmwB5YZIQuNU2zvp6vX/JgiKrerClP/lV7vZxAoni7QldAG/3K6oA',
            fontCOLRv1 = 'd09GRgABAAAAAAKMAAwAAAAAArAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDT0xSAAACWAAAAB8AAAA3CmUCEUNQQUwAAAJ4AAAAEgAAABL7AAAQT1MvMgAAAYAAAAA6AAAAYBf2J09jbWFwAAABxAAAACcAAAAsAAzpOGdseWYAAAH0AAAAGgAAABoNIh0kaGVhZAAAARwAAAAvAAAANhOUtHxoaGVhAAABTAAAABUAAAAkCAEEAmhtdHgAAAG8AAAABgAAAAYEAAAAbG9jYQAAAewAAAAGAAAABgANAABtYXhwAAABZAAAABsAAAAgAg4AHW5hbWUAAAIQAAAAPAAAAEIDGAuccG9zdAAAAkwAAAAMAAAAIAADAAB4AWNgZGAA4QZvhS/x/DZfGaRZGEDg0gImARB991huPohmYQCLczAwgSgA+bkHtQB4AWNgZGBgYQACOAkUQQWMAAGRABAAAAB4AWNgZGBgYGJgAdMMUJILJMQgAWICAAH3AC4AeAFjYGFhYJzAwMrAwDST6QwDA0M/hGZ8zWDMyMmAChgFkDgKQMBw4CXrS1YWMB9IogMFBgYAAQYIfgAABAAAAAAAAAB4AWNgYGBkYAZiBgYeBhYGBSDNAoRA/kvW//8hpNgfsDwDAFytByoAAAAAAAANAAAAAQAAAAAEAAQAAAMAABEhESEEAPwABAD8AAAAeAFjYGBgYpBjYGZgZOFkYGRQAfIhbCYw25khg6GIIZ8hlyERzE5lSGbIZlAAsv0ZfBiCGMoYDAGREga9eAFjYGbACwAAfQAEeAFjYGRABUoMmIARrIqLi4GBjYGRiYHBgQEAB0EAgwAAAAABAAEAAQAAAA4AAAAA+v8AAA==',
            svg = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="120" style="background:#fff;fill:#000;">' +
            '<style type="text/css">' +
            '@font-face{font-family:"chromacheck-cbdt";src:url(data:application/x-font-woff;base64,' + fontCBDT + ') format("woff");}' +
            '@font-face{font-family:"chromacheck-colr";src:url(data:application/x-font-woff;base64,' + fontCOLR + ') format("woff");}' +
            '@font-face{font-family:"chromacheck-sbix";src:url(data:application/x-font-woff;base64,' + fontSBIX + ') format("woff");}' +
            '@font-face{font-family:"chromacheck-svg";src:url(data:application/x-font-woff;base64,' + fontSVG + ') format("woff");}' +
            '@font-face{font-family:"chromacheck-colrv1";src:url(data:application/x-font-woff;base64,' + fontCOLRv1 + ') format("woff");}' +
            '</style>' +
            '<text x="0" y="0" font-size="20">' +
            '<tspan font-family="chromacheck-cbdt" x="0" dy="20">&#xe903;</tspan>' + // CBDT/CBLC
            '<tspan font-family="chromacheck-colr" x="0" dy="20">&#xe900;</tspan>' + // COLR
            '<tspan font-family="chromacheck-sbix" x="0" dy="20">&#xe901;</tspan>' + // SBIX
            '<tspan font-family="chromacheck-svg" x="0" dy="20">&#xe902;</tspan>' + // SVG
            '<tspan font-family="chromacheck-colrv1" x="0" dy="20">&#xe905;</tspan>' + // COLRv1
            '<tspan font-family="chromacheck-svg" x="0" dy="20">&#xe904;</tspan>' + // Control
            '</text>' +
            '</svg>';
        canvas.width = 20;
        canvas.height = 120;

        img.onload = function() {
            if (!checkFontLoad()) {
                // Repeat the test to give Safari time to load the font
                loop = window.setInterval(checkFontLoad, 1);
            }
        }

        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    } catch (ex) {
        checkFailed();
    }
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
            // If url has Emoji info, use it
            if (parts[0] == "n") {
                emojiStyle = "noto"
                document.getElementById("noto-emoji-share-notice").classList.add("d-block");

                document.getElementById("emojiStyleSwitch").checked = true
            } else if (parts[0] == "t") {
                emojiStyle = "twemoji"
                document.getElementById("noto-emoji-share-notice").classList.add("d-none");

            }
            thisEmoji = unicodeToEmoji(parts[1])

            document.getElementById("customized-emoji").innerHTML = thisEmoji
            updateEmoji(thisEmoji, true);
            console.log(`→ Url Info: ${thisEmoji} with ${emojiStyle} 🔗`)

            // If url has palette info, use it
            if (parts.length > 2) {
                paletteCode = decodeURIComponent(decodeURL(parts[2]));
                setOverridePaletteStyle(paletteCode)
            }
        } catch (e) {
            console.log("→ Get invalid url ❓")
            document.getElementById("noto-emoji-share-notice").classList.add("d-none");
            console.log("→ Random select an emoji 🎰")
            thisEmoji = getRandomEmoji()
            updateEmoji(thisEmoji, true);
            window.location.hash = `${emojiStyle === "noto" ? "n" : "t"}-${emojiToUnicode(thisEmoji)}`;
        }
    } else {
        console.log("→ Get home url 🏚")
        document.getElementById("noto-emoji-share-notice").classList.add("d-none");
        console.log("→ Random select an emoji 🎰")
        thisEmoji = getRandomEmoji()
        updateEmoji(thisEmoji, true);
        window.location.hash = `${emojiStyle === "noto" ? "n" : "t"}-${emojiToUnicode(thisEmoji)}`;
    }
    loadEmojiPicker()
    updateCanvas("reference-canvas", thisEmoji)

}


// Listen opentype color font format support detector
checkColorFontSupport()
const targetElement = document.getElementById("opentype-support-detector");
const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
            if (targetElement.classList.contains("chromacheck-colrv1-failed")) {
                // hide the Twemoji and Noto Color Emoji selector
                document.getElementById("emojiStyleSwitchArea").classList.remove("d-flex")
                document.getElementById("emojiStyleSwitchArea").classList.add("d-none");

                if (window.location.hash.substring(1).split("-")[0] == "n") {
                    emojiStyle = "twemoji"
                    const checkbox = document.getElementById("emojiStyleSwitch");
                    checkbox.checked = false;
                    showSupportIssueModal();

                    console.log("→ Oops, your browser seems to not support OpenType COLR/CPAL v1 font, you can only use Twemoji.\n → If you want to use Noto Color Emoji, please change another browser such as Desktop Chrome or FireFox.")
                    document.getElementById("noto-emoji-share-notice").classList.add("d-none");


                    try {
                        updateEmoji(window.location.hash.substring(1).split("-")[1], true)
                        window.location.hash = `${emojiStyle === "noto" ? "n" : "t"}-${emojiToUnicode(unicodeToEmoji(window.location.hash.substring(1).split("-")[1]))}`;

                    } catch (e) {
                        console.log("→ Random select an emoji 🎰")
                        const rndEmoji = getRandomEmoji()
                        updateEmoji(rndEmoji, true);
                        window.location.hash = `${emojiStyle === "noto" ? "n" : "t"}-${emojiToUnicode(rndEmoji)}`;
                    }
                    updateCanvas("reference-canvas", thisEmoji)
                    observer.disconnect();
                }
            }
        }
    }

});
observer.observe(targetElement, {
    attributes: true
});

main()
