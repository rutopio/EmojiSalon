var originalPalette = [];
var customizedPalette = [];
var originalPaletteIndex = []
var pathArray = []
var paletteArray = []
var paletteCode = "";
var currentURL = window.location.href;
import emojiData from "./emojiData.json"
import paletteData from "./paletteData.json"

console.log(`Loading palette data: ${paletteData.length}`)
console.log(`Loading Emoji data: ${Object.keys(emojiData).length}`)

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
            res.push(ele.charCodeAt(0).toString("16"))
        } else if (ele.length === 2) {
            const comp = (
                (ele.charCodeAt(0) - 0xD800) * 0x400 +
                (ele.charCodeAt(1) - 0xDC00) + 0x10000
            );
            res.push(comp.toString("16"))
        }
    })

    if (res.length == 2){
        if (res[res.length - 1] === "fe0f" || res[res.length - 1] === "fe0e") {
            res.pop(); // Remove the last element
        }
    }

    return `u${res.join("_")}`
}

function unicodeToEmoji(urlCode) {
    try {
        var fin = []
        const codes = urlCode.replace("u", "").split("_");
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

function areColorsEqual(rgba1, rgba2) {
    return rgba1 === rgba2
}

function encodeURL(url) {
    return url.replaceAll(" ", "").replaceAll("#", "(").replaceAll(",", ")") + ")"
}

function decodeURL(url) {
    return url.substring(0, url.length - 1).replaceAll(")", ", ").replaceAll("(", " #")
}

function getOverrideStyleString() {
    return customizedPalette
        .map((rgbaColorArray, idx) => `${originalPaletteIndex[idx]} ${rgbaColorArray}`)
        .filter((_, idx) => !areColorsEqual(customizedPalette[idx], originalPalette[idx]))
        .join(", ");
}

function getHexColorFromPicker(paletteIndex, hexColor) {
    customizedPalette[paletteIndex] = hexColor
}

function updateEmojiAndURL() {
    const overrideColors = getOverrideStyleString()
    const thisEmoji = document.getElementById("customized-emoji").innerHTML;
    setCustomizedEmojiSVG(pathArray, paletteArray)
    window.location.hash = `${emojiToUnicode(thisEmoji)}-${encodeURIComponent(encodeURL(overrideColors))}`;
    currentURL = window.location.href
}

async function updateEmoji(thisEmoji, keepPalette) {
    document.getElementById("customized-emoji").innerHTML = thisEmoji;

    pathArray = {}
    paletteArray = {}
    const glyphId = emojiToUnicode(thisEmoji).toLowerCase()
    fetchEmojiData(thisEmoji).then(data => {
        pathArray = data.d;
        paletteArray = data.f.map(color => color === null ? '#000000' : color)
            .map(color => color.match(/^#([0-9a-fA-F]{3})$/) ? color.replace(/^#([0-9a-fA-F]{3})$/, '#$1$1') : color ).map(color => color.toLowerCase());
        // console.log(pathArray, paletteArray)
        setCustomizedEmojiSVG(pathArray, paletteArray);
    }).catch(error => {
        console.error("An error occurred during fetching:", error);
    });

    if (!keepPalette) {
        paletteCode = "";
        window.location.hash = `${emojiToUnicode(thisEmoji)}`;
        setCustomizedEmojiSVG(pathArray, paletteArray)
    }
    setColorPickers(glyphId, keepPalette)
    
}

function setColorPickers(glyphId, keepPalette) {

    originalPaletteIndex = [...new Set(emojiData[glyphId])]
    originalPalette = originalPaletteIndex
        .map(index => paletteData[index]);
    
    customizedPalette = [... originalPalette]
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

    customizedPalette.forEach((hexColor, idx) => {
        const pickerSpan = document.createElement("div");
        pickerSpan.setAttribute("class", "clr-component");
        const clrFieldDiv = document.createElement("div");
        clrFieldDiv.setAttribute("class", "clr-field");
        clrFieldDiv.setAttribute("id", `color-field-${idx}`);
        const picker_des = document.createElement("input");
        picker_des.setAttribute("id", `color-block-${idx}`);
        picker_des.setAttribute("aria-label", `color block of layer ${idx}`);
        picker_des.setAttribute("class", "desktop-picker-input");
        picker_des.setAttribute("data-coloris", "");
        picker_des.type = "text";
        if (idx in modifiedColorPickers && keepPalette) {
            picker_des.value = modifiedColorPickers[idx]
            clrFieldDiv.style.color = modifiedColorPickers[idx]
        } else {
            picker_des.value = hexColor
            clrFieldDiv.style.color = hexColor
        };
        const colorButton = document.createElement("button");
        colorButton.type = "button";
        colorButton.setAttribute("aria-labelledby", "clr-open-label");
        clrFieldDiv.appendChild(colorButton);
        clrFieldDiv.appendChild(picker_des);
        pickerSpan.appendChild(clrFieldDiv);
        colorPickers.appendChild(pickerSpan);
        Coloris({
            onChange: () => {
                const colorPickers = document.getElementById("color-pickers");
                const clrFields = colorPickers.querySelectorAll(".clr-field");
                clrFields.forEach((clrField, index) => {
                    const style = window.getComputedStyle(clrField);
                    const color = style.getPropertyValue("color");
                    const rgbArray = color.match(/\d+/g).map(Number);
                    getHexColorFromPicker(index, rgbaToHexColor(rgbArray))
                });
                updateEmojiAndURL();
            }
        });
    });
}

async function updateCanvas(mission) {
    const svg = document.getElementById('customized-emoji-svg-data');
    const canvas = document.getElementById('customized-emoji-canvas');
    const ctx = canvas.getContext('2d');

    const scaleProp = 10
    canvas.width = svg.clientWidth * scaleProp;
    canvas.height = svg.clientHeight * scaleProp;
    ctx.scale(scaleProp, scaleProp);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const svgData = new XMLSerializer().serializeToString(svg);

    const img = new Image();
    img.onload = async function() {
        ctx.drawImage(img, 0, 0, img.width, img.height);
        if (mission == 1) {
            triggerDownload(canvas.toDataURL('image/png'), `${emojiToUnicode(document.getElementById("customized-emoji").innerHTML)}-EmojiSalon.png`)
        } else if (mission == 2) {
            canvas.toBlob(blob => navigator.clipboard.write([new ClipboardItem({
                'image/png': blob
            })]))
        } else if (mission == 3) {
            const dataUrl = canvas.toDataURL();
            const blob = await (await fetch(dataUrl)).blob();
            const filesArray = [
                new File(
                    [blob],
                    `${document.getElementById("customized-emoji").innerHTML}.png`, {
                        type: "image/png",
                        lastModified: new Date().getTime()
                    }
                )
            ];
            const shareData = {
                files: filesArray,
            };
            navigator.share(shareData);
        } else if (mission == 4) {
            document.getElementById("result-image").src = canvas.toDataURL("image/png");
        }
    };
    img.src = 'data:image/svg+xml,' + encodeURIComponent(svgData);
}

function selectRandomColor() {
    function getRandomColor() {
        const minVal = 0
        const maxVal = 255
        return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    }
    customizedPalette.forEach((_, idx) => {
        const hexRndColor = rgbaToHexColor([getRandomColor(), getRandomColor(), getRandomColor(), 255])
        customizedPalette[idx] = hexRndColor
        if (document.getElementById(`color-field-${idx}`) !== null) {
            document.getElementById(`color-field-${idx}`).style.color = hexRndColor
        }
        document.getElementById(`color-block-${idx}`).value = hexRndColor
    })
    updateEmojiAndURL()
}

function selectedFromPicker(thisEmoji) {
    document.getElementById("emojiBoard").style.display = "none";
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
        skinTonePosition: "none",
        exceptEmojis: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero", "keycap_star", "hash"],
    };
    const emojiPickerDesktopContainer = document.getElementById("emoji-picker-desktop");
    const emojiPickerMobileContainer = document.getElementById("emoji-picker-mobile");
    // Desktop Size
    const emojiPickerDesktop = new EmojiMart.Picker(emojiPickerOptions);
    emojiPickerDesktopContainer.appendChild(emojiPickerDesktop);
    // Mobile size
    const emojiPickerMobile = new EmojiMart.Picker(emojiPickerOptions);
    emojiPickerMobileContainer.appendChild(emojiPickerMobile);
}

function changeDownloadButtonIcon() {
    Array.from(document.getElementsByClassName("download-image")).forEach(function(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        element.insertAdjacentHTML("afterbegin", `
        <svg class="btn-icon" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" /></svg>
`)
    })

    Array.from(document.getElementsByClassName("copy-image")).forEach(function(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        element.insertAdjacentHTML("afterbegin", `
        <svg class="btn-icon" viewBox="0 0 16 16"> <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" />
        <path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        <path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5V14zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4z" />

</svg> 
`)
    })
}


function triggerDownload(imgURI, fileName) {
    let a = document.createElement('a')
    a.setAttribute('download', fileName)
    a.setAttribute('href', imgURI)
    a.setAttribute('target', '_blank')
    a.click()
}

document.addEventListener("DOMContentLoaded", function() {
    const emojiPickerButton = document.getElementById("emoji-picker-button");
    emojiPickerButton.addEventListener("click", function() {
        showEmojiModal()
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

Array.from(document.getElementsByClassName("download-image"))
    .forEach(function(element) {
        element.addEventListener("click", async () => {
            updateCanvas(1)
        });
    });

Array.from(document.getElementsByClassName("share-button"))
    .forEach(function(element) {
        element.addEventListener("click", async () => {
            updateCanvas(4);
            changeDownloadButtonIcon()
            if (navigator.share && window.innerWidth < 768) {

                const shareData = {
                    title: "Collaborate & Share With Friends!",
                    text: "#EmojiSalon",
                    url: window.location.href,
                };
                await navigator.share(shareData);
            } else {
                Array.from(document.getElementsByClassName("copy-link")).forEach(function(element) {
                    while (element.firstChild) {
                        element.removeChild(element.firstChild);
                    }
                    element.insertAdjacentHTML("afterbegin", `<svg class="btn-icon" viewBox="0 0 16 16"> <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
             </svg>`)
                })
                Array.from(document.getElementsByClassName("copy-image")).forEach(function(element) {
                    while (element.firstChild) {
                        element.removeChild(element.firstChild);
                    }
                    element.insertAdjacentHTML("afterbegin", `<svg class="btn-icon" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z" />
                    </svg>`)
                })
                document.getElementById("code-area-html").innerHTML = `&lt;span class="mod-emoji"&gt; ${document.getElementById("customized-emoji").innerHTML} &lt;/span&gt;`
                try {
                    document.getElementById("code-area-css").innerHTML = `@font-face { 
    font-family: Twemoji;
    src: url("https://cdn.jsdelivr.net/npm/twemoji-colr-font@14.1.3/twemoji.woff2") format("woff2");
}

.mod-emoji {
    font-family: Twemoji;
    font-palette: --mod-palette;
}

@font-palette-values --mod-palette {
    font-family: Twemoji;
    base-palette: 0;
    override-colors: ${decodeURL(window.location.hash.substring(1).split("-")[1])}
}`
                } catch (e) {
                    document.getElementById("code-area-css").innerHTML = `@font-face { 
    font-family: Twemoji;
    src: url("https://cdn.jsdelivr.net/npm/twemoji-colr-font@14.1.3/twemoji.woff2") format("woff2");
}

.mod-emoji {
    font-family: Twemoji;
    font-palette: --mod-palette;
}

@font-palette-values --mod-palette {
    font-family: Twemoji;
    base-palette: 0;
}`
                }
                showShareModal()
            }
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

Array.from(document.getElementsByClassName("download-svg"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            const svgData = document.getElementById("customized-emoji-svg-data")
            const data = (new XMLSerializer()).serializeToString(svgData)
            const svgBlob = new Blob([data], {
                type: 'image/svg+xml;charset=utf-8'
            })
            const url = URL.createObjectURL(svgBlob)
            triggerDownload(url, `${emojiToUnicode(document.getElementById("customized-emoji").innerHTML)}-EmojiSalon.svg`)
        });
    });


Array.from(document.getElementsByClassName("copy-image"))
    .forEach(function(element) {
        element.addEventListener("click", function() {
            if (navigator.canShare) {
                updateCanvas(3)
            } else {
                updateCanvas(2);
                // change icon
                while (element.firstChild) {
                    element.removeChild(element.firstChild);
                }
                element.insertAdjacentHTML("afterbegin", `<svg class="btn-icon" viewBox="0 0 16 16"> <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" />
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
  </svg>`);
            }
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
            element.insertAdjacentHTML("afterbegin", `<svg class="btn-icon" viewBox="0 0 16 16">            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>`);
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

function showEmojiModal() {
    const modal = document.getElementById("emojiBoard");
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

function getRandomEmoji() {
    const defaultEmojis = ["😀", "😙", "😎", "😪", "🤤", "😴", "😰", "🦓", "🥵", "🦴", "👀", "🚀", "👍", "🪩", "🧚‍♀️", "🧚", "🧚‍♂️", "🌟", "🧤", "🍣", "🍤", "🍥", "🥮", "🍡", "🥟", "🍔", "🐈", "🐈‍⬛", "🐟", "🍕", "🎉", "🐓", "🐱", "🌺", "🍎", "🏛", "🐭", "🐮", "🐯", "🐰", "🐲", "🐍", "🐴", "🐏", "🐵", "🐔", "🐶", "🐷", "🐕", "🐑", "🐤", "🦕", "🦖", "🐳", "🐋", "🐬", "🦋", "☕️", "🍒", "🌭", "🍩", "🏅", "🚂", "🚗", "🥻", "🧥", "👜", "👢", "📱", "🧮", "🩴", "🎮", "🎠", "🛝", "🎡", "🎢", "💈", "🎪", "🍭", "🦄", "🎨"];
    const randomIndex = Math.floor(Math.random() * defaultEmojis.length);
    return defaultEmojis[randomIndex];
}

async function main() {

    var thisEmoji = ""
    if (window.location.hash) {
        try {
            const inputString = window.location.hash.substring(1)
            const parts = inputString.split("-");
            // If url has palette info, use it
            if (parts.length > 1) {
                paletteCode = decodeURIComponent(decodeURL(parts[1]));
            }
            thisEmoji = unicodeToEmoji(parts[0])
            document.getElementById("customized-emoji").innerHTML = thisEmoji
            updateEmoji(thisEmoji, true);
            console.log(`→ Url Get: ${thisEmoji}`)
        } catch (e) {
            console.log("→ Get Invalid Url ❓", e)
            console.log("→ Random Select an Emoji 🎰")
            thisEmoji = getRandomEmoji()
            updateEmoji(thisEmoji, true);
            window.location.hash = `${emojiToUnicode(thisEmoji)}`;
        }
    } else {
        console.log("→ Get Home URL 🏚")
        console.log("→ Random Select an Emoji 🎰")
        thisEmoji = getRandomEmoji()
        updateEmoji(thisEmoji, true);
        window.location.hash = `${emojiToUnicode(thisEmoji)}`;
    }
}

async function fetchEmojiData(thisEmoji) {
    console.log(`fetch: https://raw.githubusercontent.com/rutopio/EmojiSalon/svgProcess/src/data/${emojiToUnicode(thisEmoji)}.json`)
    const response = await fetch(`https://raw.githubusercontent.com/rutopio/EmojiSalon/svgProcess/src/data/${emojiToUnicode(thisEmoji)}.json`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json()
    return data
}

// async function fetchAllData() {
//     const response = await fetch(`https://raw.githubusercontent.com/rutopio/EmojiSalon/svgProcess/src/allData.json`);
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     const data = await response.json()
//     return data
// }

async function setCustomizedEmojiSVG(pathArrayLocal, paletteArrayLocal) {

    if (Array.isArray(pathArrayLocal) && Array.isArray(paletteArrayLocal)) {
        setReferenceEmojiSVG(pathArrayLocal, paletteArrayLocal)
        var svgData = []

        if (getOverrideStyleString().length > 0) {
            getOverrideStyleString().split(', ').forEach(pair => {
                const [key, value] = pair.split(' ');
                customizedPalette[originalPaletteIndex.indexOf(parseInt(key))] = value
            });
        } else if (paletteCode.length > 0) {
            paletteCode.split(', ').forEach(pair => {
                const [key, value] = pair.split(' ');
                customizedPalette[originalPaletteIndex.indexOf(parseInt(key))] = value
            });
        }

        pathArrayLocal.forEach((d, index) => {
            svgData.push(`<path fill="${customizedPalette[originalPalette.indexOf(paletteArrayLocal[index])]}" fill-opacity="${1}" d="${d}" />`)
        })
        const svg = `
<svg id="customized-emoji-svg-data" xmlns="http://www.w3.org/2000/svg" width="16em" height="16em" viewBox="0 0 36 36">
<g transform="translate(0,0) scale(1,1)">
${svgData.join(`\n`)}
</g>
</svg>
    `;
        showSVG(svg, "customized-emoji-svg")

    } else {
        console.log("Waiting for fetching...")
    }
}

function showSVG(svg, canvasName) {
    document.getElementById(canvasName).innerHTML = svg
}

function setReferenceEmojiSVG(pathArrayLocal, paletteArrayLocal) {
    var svgData = []
    pathArrayLocal.forEach((d, index) => {
        svgData.push(`<path fill="${paletteArrayLocal[index]}" fill-opacity="${1}" d="${d}" />`)
    })
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="16em" height="16em" viewBox="0 0 36 36">
<g transform="translate(0,0) scale(1,1)">
${svgData.join(`\n`)}
</g>
</svg>
`;
    showSVG(svg, "reference-emoji-svg")

}

main()
loadEmojiPicker()
