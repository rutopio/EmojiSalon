/**
 * @fileoverview Color picker popover component using react-aria-components.
 *
 * This component provides a color picker in a popover that allows users to
 * select colors using a color area, hue slider, and hex input.
 */

import { use } from "react";
import {
  Button as AriaButton,
  Input as AriaInput,
  ColorPickerStateContext,
  Dialog,
  DialogTrigger,
  parseColor,
  Popover,
} from "react-aria-components";
import {
  ColorArea,
  ColorField,
  ColorPicker,
  ColorSlider,
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem,
  ColorThumb,
  SliderTrack,
} from "@/components/color";
import { useEmoji } from "@/contexts/emoji-context";
import { Pipette } from "lucide-react";

import type { Color } from "react-aria-components";

/** Preset colors for the swatch picker - add more colors here as needed */
const PRESET_COLORS = [
  "#FF3B30",
  "#FF9500",
  "#A2845E",
  "#FFCC00",
  "#34C759",
  "#00C7BE",
  "#32ADE6",
  "#007AFF",
  "#AF52DE",
  "#FF2D55",
  "#8E8E93",
];

/**
 * EyeDropper button component that uses the browser's EyeDropper API
 * to pick colors from anywhere on the screen.
 */
function EyeDropperButton() {
  const state = use(ColorPickerStateContext)!;

  // Check browser support.
  // @ts-expect-error - EyeDropper API may not be available
  if (typeof EyeDropper === "undefined") {
    return null;
  }

  return (
    <AriaButton
      aria-label="Eye dropper"
      className="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-8 items-center justify-center rounded-md border text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      onPress={() => {
        // @ts-expect-error - EyeDropper API may not be available
        new EyeDropper()
          .open()
          .then((result: { sRGBHex: string }) =>
            state.setColor(parseColor(result.sRGBHex))
          );
      }}
    >
      <Pipette className="h-4 w-4" />
    </AriaButton>
  );
}

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
 * when clicked, opens a color picker with an area selector, hue slider,
 * and hex input field.
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
      <DialogTrigger>
        <AriaButton
          className="size-12 cursor-pointer rounded-lg border-2 p-0 outline-none focus:ring-2 focus:ring-offset-2"
          style={{ backgroundColor: color }}
        >
          <ColorSwatch className="h-full w-full rounded-md" />
        </AriaButton>
        <Popover placement="bottom" className="w-fit">
          <Dialog className="flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-lg outline-none">
            {/* Color Area for saturation and brightness */}
            <div>
              <ColorArea
                colorSpace="hsb"
                xChannel="saturation"
                yChannel="brightness"
                className="h-48 w-full rounded-b-none border-b-0"
              >
                <ColorThumb className="z-50" />
              </ColorArea>
              {/* Hue Slider */}
              <ColorSlider colorSpace="hsb" channel="hue">
                <SliderTrack className="w-full rounded-t-none border-t-0">
                  <ColorThumb className="top-1/2" />
                </SliderTrack>
              </ColorSlider>
            </div>

            {/* Hex Input Field */}
            <ColorField colorSpace="hsb" className="flex w-full flex-col gap-1">
              {/* <Label className="text-sm font-medium"></Label> */}
              <AriaInput
                className="border-input focus-visible:border-ring focus-visible:ring-ring/50 h-9 w-full rounded-md border bg-transparent px-2.5 py-1 font-mono text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
                placeholder="Hex"
              />
            </ColorField>

            {/* Color Swatch Picker */}
            <div className="grid grid-cols-6 gap-2">
              <EyeDropperButton />
              {PRESET_COLORS.map((presetColor) => (
                <ColorSwatchPicker key={presetColor}>
                  <ColorSwatchPickerItem color={presetColor}>
                    <ColorSwatch />
                  </ColorSwatchPickerItem>
                </ColorSwatchPicker>
              ))}
            </div>
          </Dialog>
        </Popover>
      </DialogTrigger>
    </ColorPicker>
  );
}

/**
 * A component that displays multiple color pickers for editing a color palette.
 * Uses EmojiContext for colors and useEmojiActions for color change handling.
 */
export default function ColorPalettePicker() {
  const { customizedPaletteColors, handleColorChange } = useEmoji();

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {customizedPaletteColors.map((color, idx) => (
          <ColorPickerPopover
            key={`color-${color}-${idx}`}
            color={color}
            onColorChange={(newColor) => handleColorChange(idx, newColor)}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}
