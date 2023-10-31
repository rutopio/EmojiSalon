import os
import json

with open(f"emojiCategories.json", "r") as file:
    categoryData = json.load(file)

with open(f"ignoreEmojiUnicodeList.json", "r") as file:
    ignoreEmojis = json.load(file)

skipCounter = 0
useCounter = 0
err = []

for _, (categoryName, emojiList) in enumerate(categoryData.items()):
    categoryData = {}
    for emo in emojiList:
        if emo in ignoreEmojis:
            print(f"Skip: {emo}")
            skipCounter += 1
        else:
            useCounter += 1
            if emo[-5:] == "_fe0f" and len(emo.split("_")) == 2:
                print(f"Remove fe0f in tail: {emo}")
                name = emo[:-5]
            else:
                name = emo

            try:
                with open(f"json/{name}.json", "r") as file:
                    data = json.load(file)
                categoryData[name] = data
            except:
                err.append(emo)

    print(f"{categoryName}: {len(categoryData)}")
    with open(f"json/{categoryName}.json", "w") as outfile:
        json.dump(categoryData, outfile)

nl = "\n"
print("-" * 50)
print(f"Success: {useCounter} | Skip: {skipCounter} | Error: {len(err)}")
print("-" * 50)
print(f"Error ({len(err)}): {nl.join(err)}")
