import { MdFormatColorText } from "react-icons/md";
import * as Toolbar from "@radix-ui/react-toolbar";
import { HexColorPicker } from "react-colorful";
import {
  RxUnderline,
  RxFontItalic,
  RxFontBold,
  RxTextAlignCenter,
  RxTextAlignLeft,
  RxTextAlignRight,
  RxStrikethrough,
  RxBorderAll,
} from "react-icons/rx";
import Selector from "./common/selector";
import { getSizeList } from "@/utils/font-size";
import { getFontFamilyList } from "@/utils/font-family";
import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";

export default function TopPanel() {
  const [color, setColor] = useState("#000000");

  return (
    <div className="fixed top-0 w-full flex items-center justify-center bg-transparent z-10 text-black">
      <Toolbar.Root className="bg-white p-2 flex rounded shadow-md">
        <Toolbar.ToggleGroup type="multiple" className="space-x-2">
          <Toolbar.ToggleItem value="bold">
            <RxFontBold />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="bold">
            <RxFontItalic />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="bold">
            <Popover.Root>
              <Popover.Trigger asChild>
                <button style={{ color }}>
                  <MdFormatColorText />
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content asChild>
                  <div className="animate-popover m-5">
                    <HexColorPicker color={color} onChange={setColor} />
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="bold">
            <RxBorderAll />
          </Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
        <Toolbar.Separator className="w-[1px] mx-2 bg-black/20" />
        <Toolbar.ToggleGroup
          type="single"
          defaultValue="left"
          className="space-x-2"
        >
          <Toolbar.ToggleItem value="left">
            <RxTextAlignLeft />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="center">
            <RxTextAlignCenter />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="right">
            <RxTextAlignRight />
          </Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
        <Toolbar.Separator className="w-[1px] mx-2 bg-black/20" />
        <Toolbar.ToggleGroup type="single" className="space-x-2">
          <Toolbar.ToggleItem value="bold">
            <RxUnderline />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="bold">
            <RxStrikethrough />
          </Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
        <Toolbar.Separator className="w-[1px] mx-2 bg-black/20" />
        <Toolbar.ToggleGroup type="single">
          <Toolbar.ToggleItem value="bold">
            <Selector
              className="bg-white text-black"
              items={getSizeList()}
              onValueChange={() => {}}
              defaultValue="小四"
            />
          </Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
        <Toolbar.Separator className="w-[1px] mx-2 bg-black/20" />
        <Toolbar.ToggleGroup type="single">
          <Toolbar.ToggleItem value="bold">
            <Selector
              className="bg-white text-black"
              items={getFontFamilyList()}
              onValueChange={() => {}}
              defaultValue="微软雅黑"
            />
          </Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar.Root>
    </div>
  );
}
