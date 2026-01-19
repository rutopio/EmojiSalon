/**
 * @fileoverview Color picker popover component using react-aria-components.
 *
 * This component provides a color picker in a popover that allows users to
 * select colors using a color area and hue slider.
 */

import { parseColor, type Color } from "react-aria-components";

import {
  ColorArea,
  ColorPicker,
  ColorSlider,
  ColorSwatch,
  ColorThumb,
  SliderTrack,
} from "~/components/color";
import { Button } from "~/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

interface ColorPickerPopoverProps {
  /** The current color value (hex string). */
  color: string;
  /** Callback invoked when the color changes. */
  onColorChange: (color: string) => void;
  /** Optional index for identification. */
  index?: number;
}

/**
 * A popover-based color picker that displays a color swatch button which,
 * when clicked, opens a color picker with an area selector and hue slider.
 */
export function ColorPickerPopover({
  color,
  onColorChange,
}: ColorPickerPopoverProps) {
  // Parse the hex color to a Color object
  const colorValue = parseColor(color).toFormat("hsb");

  const handleColorChange = (newColor: Color) => {
    onColorChange(newColor.toString("hex"));
  };

  return (
    <ColorPicker value={colorValue} onChange={handleColorChange}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="h-12 w-12 cursor-pointer rounded-lg border border-black p-0"
            style={{ backgroundColor: color }}
          >
            <ColorSwatch className="h-full w-full rounded-md" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-3" align="center" sideOffset={8}>
          <div className="flex flex-col gap-3">
            {/* Color Area for saturation and brightness */}
            <ColorArea
              xChannel="saturation"
              yChannel="brightness"
              className="h-40 w-40 rounded-md border shadow-md"
            >
              <ColorThumb />
            </ColorArea>

            {/* Hue Slider */}
            <ColorSlider channel="hue">
              <SliderTrack
                className="h-6 w-40 rounded-md"
                style={{
                  background:
                    "linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)",
                }}
              >
                <ColorThumb className="top-1/2 -translate-y-1/2" />
              </SliderTrack>
            </ColorSlider>

            {/* Display current color hex value */}
            <div className="text-center text-sm font-medium">{color}</div>
          </div>
        </PopoverContent>
      </Popover>
    </ColorPicker>
  );
}

