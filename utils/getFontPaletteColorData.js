const fontkit = require("fontkit");
const fs = require("fs")
fontURL = "https://cdn.jsdelivr.net/npm/twemoji-colr-font@14.1.3/twemoji.woff2"

function rgbaToHexColor(rgbaColorArray) {
    return rgbaColorArray.slice(0, 3)
        .map(ele => ele.toString(16))
        .map(ele => ele.length == 1 ? "0" + ele : ele) // Padding zero to two digits
        .join("");
}

async function prepareFont(fontPath) {
    const response = await fetch(fontPath);
    const arrayBuffer = await response.arrayBuffer();
    const buf = new Buffer(arrayBuffer);
    const font = fontkit.create(buf)

    const originalPalette = font.CPAL.colorRecords.slice(
        font.CPAL.colorRecordIndices[0],
        font.CPAL.colorRecordIndices[0] + font.CPAL.numPaletteEntries
    ).map(ele => rgbaToHexColor([ele.red, ele.green, ele.blue, ele.alpha]));

    console.log(originalPalette)

    fs.writeFile("data/paletteColorData.json", originalPalette, 'utf8', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("File Saved: paletteColorData.json");
    });
}

prepareFont(fontURL);
