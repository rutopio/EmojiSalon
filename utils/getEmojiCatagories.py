from xml.etree import ElementTree
import os
import json

emojiDataPath = "emojimart.json"

with open(emojiDataPath, "r") as file:
    data = json.load(file)

categories = data["categories"]
emojis = data["emojis"]
results = {}

print(f"{'{0:<15}'.format('Category Name')}: Number of Emojis")
print("-" * 35)
for category in categories:
    glyphs = []
    thisCategoryName = category["id"]
    thisCategoryEmojis = category["emojis"]
    for emo in thisCategoryEmojis:
        glyphName = emojis[emo]["skins"][0]["unified"]
        if glyphName[-5:] == "-fe0f" and len(glyphName.split("-")) == 2:
            glyphName = glyphName[:-5]

        glyphs.append("u" + glyphName.replace("-", "_"))
    results[thisCategoryName] = glyphs
    print(f"{'{0:<15}'.format(thisCategoryName)}: {len(glyphs)}")

with open(f"emojiCategories.json", "w") as outfile:
    json.dump(results, outfile)
