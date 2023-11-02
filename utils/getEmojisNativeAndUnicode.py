from xml.etree import ElementTree
import os
import json

emojiDataPath = "data/emojimart.json"

with open(emojiDataPath, "r") as file:
    data = json.load(file)

categories = data["categories"]
emojis = data["emojis"]

emojisWithSkinTone = {}
emojisWithoutSkinTone = {}

unicodeWithSkinTone = {}
unicodeWithoutSkinTone = {}

print(f"{'{0:<15}'.format('Category Name')}: Number of Emojis")
print("-" * 35)
for category in categories:
    catEmojiWithSkin = []
    catEmojiWithoutSkin = []
    catUnicodeWithSkin = []
    catUnicodeWithoutSkin = []


    thisCategoryName = category["id"]
    thisCategoryEmojis = category["emojis"]
    for emo in thisCategoryEmojis:
        for idx, skin in enumerate(emojis[emo]["skins"]):
            if idx == 0:
                catEmojiWithSkin.append(emojis[emo]["skins"][idx]["native"])
                catUnicodeWithSkin.append(emojis[emo]["skins"][idx]["unified"])

                catEmojiWithoutSkin.append(emojis[emo]["skins"][idx]["native"])
                catUnicodeWithoutSkin.append(emojis[emo]["skins"][idx]["unified"])
            else:
                catEmojiWithSkin.append(emojis[emo]["skins"][idx]["native"])
                catUnicodeWithSkin.append(emojis[emo]["skins"][idx]["unified"])

    emojisWithSkinTone[thisCategoryName] = catEmojiWithSkin
    emojisWithoutSkinTone[thisCategoryName] = catEmojiWithoutSkin
    unicodeWithSkinTone[thisCategoryName] = catUnicodeWithSkin
    unicodeWithoutSkinTone[thisCategoryName] = catUnicodeWithoutSkin
    print(f"{'{0:<15}'.format(thisCategoryName)}: {len(catEmojiWithSkin)} / {len(catEmojiWithoutSkin)}")

with open(f"data/emojisWithSkinTone.json", "w") as outfile:
    json.dump(emojisWithSkinTone, outfile)

with open(f"data/emojisWithoutSkinTone.json", "w") as outfile:
    json.dump(emojisWithoutSkinTone, outfile)

with open(f"data/unicodeWithSkinTone.json", "w") as outfile:
    json.dump(unicodeWithSkinTone, outfile)

with open(f"data/unicodeWithoutSkinTone.json", "w") as outfile:
    json.dump(unicodeWithoutSkinTone, outfile)