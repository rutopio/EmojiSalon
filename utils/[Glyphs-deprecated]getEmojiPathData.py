# Glyphs App: https://glyphsapp.com/
# File Source: https://github.com/mozilla/twemoji-colr
# File Name: Twemoji.Mozilla.ttf, modified by mozilla
# This method is deprecated since that Glyphs can not transfer quadratic to cubic curve sometimes
# also, it can not save fill color with opacity 

import json
from AppKit import NSSize

GlyphAsImage = NSClassFromString("GlyphAsImage")
useCounter = 0
skipCounter = 0
allData = {}

for l in Glyphs.font.selectedLayers:
	glyph = l.parent
	if "layer" not in glyph.name:
		if "1f3fb" in glyph.name or "1f3fc" in glyph.name or "1f3fd" in glyph.name or "1f3fe" in glyph.name or "1f3ff" in glyph.name:
			skipCounter += 1
			continue
		print(glyph.name)
		emojiData = {}
		pathData = []
		paletteData = []
		for layer in glyph.layers[1:]:
			for path in layer.paths:
				# some path can not convert very well
				path.convertToCubic()		
			layerSize = NSSize(layer.width, layer.ascender)
			svg = GlyphAsImage.svgDataWithLayer_origSize_settings_(layer, layerSize, preset)
			parse = str(svg.decode("utf-8") .split('<path d="')[1].split('"></path>')[0])
			pathData.append(parse)
			paletteData.append(layer.name[6:])

		emojiData["d"] = pathData
		emojiData["f"] = paletteData
		allData[glyph.name] = emojiData
		useCounter += 1

with open(f"fullPathAndColorData.json", "w") as outfile: 
	json.dump(allData, outfile)

		
print(f"Success: {useCounter} | Skip: {skipCounter}")
print(f"Dump finish! There are {len(allData)} emojis")
