from xml.etree import ElementTree
import os
import json


def convertCirclePath(ele):
    cx = float(ele.get("cx"))
    cy = float(ele.get("cy"))
    r = float(ele.get("r"))
    return (
        f"M {cx - r},{cy} A {r},{r} 0 1,0 {cx + r},{cy} A {r},{r} 0 1,0 {cx - r},{cy} Z"
    )


def convertEllipsePath(ele):
    cx = float(ele.get("cx"))
    cy = float(ele.get("cy"))
    rx = float(ele.get("rx"))
    ry = float(ele.get("ry"))
    return f"M {cx - rx},{cy} A {rx},{ry} 0 0,0 {cx + rx},{cy} A {rx},{ry} 0 0,0 {cx - rx},{cy} Z"


def getPathOpacity(ele):
    if ele.get("opacity"):
        return f"opacity='{ele.get('opacity')}'"
    else:
        return ""


def getPathTransform(ele):
    if ele.get("transform"):
        return f"transform='{ele.get('transform')}'"
    else:
        return ""


def concatPathData(path, opacity, transform):
    if opacity:
        if transform:
            return path + "' " + opacity + " " + transform
        else:
            return path + "' " + opacity
    else:
        if transform:
            return path + "' " + transform
        else:
            return path


# SVG Source can be found in https://github.com/twitter/twemoji
fileNames = os.listdir(".")

allData = {}

skipCounter = 0
useCounter = 0
for fileName in fileNames:
    # ignore emoji with skin indicator
    if (
        "1f3fb" in fileName
        or "1f3fc" in fileName
        or "1f3fd" in fileName
        or "1f3fe" in fileName
        or "1f3ff" in fileName
    ):
        skipCounter += 1
        continue
    if fileName.endswith(".svg"):
        print(fileName)
        useCounter += 1
        emojiData = {}

        pathData = []
        colorData = []

        tree = ElementTree.parse(fileName)
        root = tree.getroot()

        for element in root:
            if element.tag == "{http://www.w3.org/2000/svg}g":
                thisColor = element.get("fill")
                for subElement in element:
                    if subElement.tag == "{http://www.w3.org/2000/svg}circle":
                        p = concatPathData(
                            convertCirclePath(subElement),
                            getPathOpacity(subElement),
                            getPathTransform(subElement),
                        )
                        pathData.append(p)
                        colorData.append(thisColor)
                    elif subElement.tag == "{http://www.w3.org/2000/svg}ellipse":
                        p = concatPathData(
                            convertEllipsePath(subElement),
                            getPathOpacity(subElement),
                            getPathTransform(subElement),
                        )
                        pathData.append(p)
                        colorData.append(thisColor)
                    elif subElement.tag == "{http://www.w3.org/2000/svg}path":
                        p = concatPathData(
                            subElement.get("d"),
                            getPathOpacity(subElement),
                            getPathTransform(subElement),
                        )
                        pathData.append(p)
                        colorData.append(thisColor)

            if element.tag == "{http://www.w3.org/2000/svg}circle":
                p = concatPathData(
                    convertCirclePath(element),
                    getPathOpacity(element),
                    getPathTransform(element),
                )
                pathData.append(p)
                colorData.append(element.get("fill"))
            elif element.tag == "{http://www.w3.org/2000/svg}ellipse":
                p = concatPathData(
                    convertEllipsePath(element),
                    getPathOpacity(element),
                    getPathTransform(element),
                )
                pathData.append(p)
                colorData.append(element.get("fill"))
            elif element.tag == "{http://www.w3.org/2000/svg}path":
                p = concatPathData(
                    element.get("d"), getPathOpacity(element), getPathTransform(element)
                )
                pathData.append(p)
                colorData.append(element.get("fill"))

        emojiData["d"] = pathData
        emojiData["f"] = colorData
        emojiName = "u" + fileName.split(".svg")[0].replace("-", "_")
        allData[emojiName] = emojiData

        with open(f"json/{emojiName}.json", "w") as outfile:
            json.dump(emojiData, outfile)

with open(f"json/fullPathAndColorData.json", "w") as outfile:
    json.dump(allData, outfile)

print(f"Success: {useCounter} | Skip: {skipCounter}")
print(f"Dump finish! There are {len(allData)} emojis")
