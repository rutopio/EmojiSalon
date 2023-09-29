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




function selectRandomColor() {

    function getRandomColor() {
        const minVal = 0
        const maxVal = 255
        return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    }

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

    // Mobile size
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
            downloadLink.download = `${emojiToUnicode(document.getElementById("customized-emoji").innerHTML)}-EmojiSalon.png`;
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
    const defaultEmojis = ["😀", "😙", "😎", "😪", "🤤", "😴", "😰", "🫁", "🦷", "🦴", "👀", "🚀", "👍", "🤟", "🤘", "🤙", "🧚‍♀️", "🧚", "🧚‍♂️", "🧑‍⚕️", "👨‍⚕️", "👩‍⚕️", "🧑‍🎓", "👨‍🎓", "👩‍🎓", "🧑‍🏫", "👨‍🏫", "👩‍🏫", "🧑‍⚖️", "👨‍⚖️", "👩‍⚖️", "🌟", "🧤", "🍣", "🍤", "🍥", "🥮", "🍡", "🥟", "🍔", "🐈", "🐈‍⬛", "🐟", "🍕", "🎉", "🐓", "🐱", "🌺", "🍎", "🏛", "🐭", "🐮", "🐯", "🐰", "🐲", "🐍", "🐴", "🐏", "🐵", "🐔", "🐶", "🐷", "🐕", "🐑", "🐤", "🦕", "🦖", "🐳", "🐋", "🐬", "🦋", "🍀", "🍒", "🌭", "🍩", "🏅", "🚂", "🚗", "🏍️", "🛳️", "☃️", "🥻", "🧥", "👜", "👢", "📱", "🧮", "🗃️", "🛋️", "🩴", "🎮", "🎠", "🛝", "🎡", "🎢", "💈", "🎪"];
    const randomIndex = Math.floor(Math.random() * defaultEmojis.length);
    return defaultEmojis[randomIndex];
}


// Reference: https://github.com/RoelN/ChromaCheck
function checkColorFontSupport() {
    console.log("...🕵️ Check the compatibility of your browser 🕵️...")
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
    // Listen opentype color font format support detector
    checkColorFontSupport()
    const targetElement = document.getElementById("opentype-support-detector");
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
                if (targetElement.classList.contains("chromacheck-colrv1-failed")) {
                    showSupportIssueModal();
                    console.log("Oops, your browser seems to not support OpenType COLR/CPALv1 font, please change another browser such as Desktop Chrome or FireFox.")
                    observer.disconnect();
                }
            }
        }
    });
    observer.observe(targetElement, {
        attributes: true
    });

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

        // If url has palette info, use it
        if (parts.length > 1) {
            paletteCode = decodeURIComponent(decodeURL(parts[1]));
            setOverridePaletteStyle(paletteCode)
        }
    } else {
        updateEmoji(getRandomEmoji(), true);
    }
}

main()
