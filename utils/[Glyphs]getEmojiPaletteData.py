# Glyphs App: https://glyphsapp.com/
# File Source: https://github.com/mozilla/twemoji-colr
# File Name: Twemoji.Mozilla.ttf, modified by mozilla

Glyphs.clearLog()
output = ""

for glyph in Glyphs.font.glyphs:
	colors = []
	if len(glyph.layers) > 1:
		for l in glyph.layers:
			if l.name.startswith("Color"):
				c = (l.name[6:])
				colors.append(c)
	else:
		continue
	colorString = ", ".join(colors)
	output+= f" '{glyph.name}': [{colorString}], "
	
print(f"Finish! There are {len(output)} emojis")

with open(f"data/emojiPaletteData.json", "w") as outfile:
    json.dump(output, outfile)

print("File Saved: emojiPaletteData.json")