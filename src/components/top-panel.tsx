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
import { getFontSize, getSizeFont, getSizeList } from "@/utils/font-size";
import { getFontFamilyList } from "@/utils/font-family";
import * as Popover from "@radix-ui/react-popover";
import Style from "@/types/style";
import useStore from "@/store";
import { TextAlign, TextDecoration } from "@/types/enums/style";

export default function TopPanel() {
  const setStyle = useStore((state) => state.setStyle);
  const style: Style | null = useStore((state) => {
    const idx = state.widgetMap.get(state.active);
    if (typeof idx !== "number" || !state.widget[idx]) return null;
    else return state.widget[idx].style;
  });

  return (
    style && (
      <div className="fixed top-0 w-full flex items-center justify-center bg-transparent z-10 text-black">
        <Toolbar.Root className="bg-white p-2 flex rounded shadow-md">
          <Toolbar.ToggleGroup
            type="multiple"
            className="space-x-2"
            value={[
              style.isBold ? "bold" : "",
              style.isItalic ? "italic" : "",
              style.hasBorder ? "border" : "",
            ].filter(Boolean)}
            onValueChange={(e) =>
              setStyle({
                isBold: e.includes("bold"),
                isItalic: e.includes("italic"),
                hasBorder: e.includes("border"),
              })
            }
          >
            <Toolbar.ToggleItem value="bold" className="tb-toggle">
              <RxFontBold />
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="italic" className="tb-toggle">
              <RxFontItalic />
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="color">
              <Popover.Root>
                <Popover.Trigger asChild>
                  <button
                    style={{ color: style.textColor ?? "#000000" }}
                    className="p-1"
                  >
                    <MdFormatColorText />
                  </button>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content asChild>
                    <div className="animate-popover m-5">
                      <HexColorPicker
                        onChange={(e) => setStyle({ textColor: e })}
                      />
                    </div>
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="border" className="tb-toggle">
              <RxBorderAll />
            </Toolbar.ToggleItem>
          </Toolbar.ToggleGroup>
          <Toolbar.Separator className="w-[1px] mx-2 bg-black/20" />
          <Toolbar.ToggleGroup
            type="single"
            className="space-x-2"
            value={style.textAlign ?? ""}
            onValueChange={(e) =>
              setStyle({
                textAlign: (e as TextAlign) || TextAlign.Left,
              })
            }
          >
            <Toolbar.ToggleItem value={TextAlign.Left} className="tb-toggle">
              <RxTextAlignLeft />
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem value={TextAlign.Center} className="tb-toggle">
              <RxTextAlignCenter />
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem value={TextAlign.Right} className="tb-toggle">
              <RxTextAlignRight />
            </Toolbar.ToggleItem>
          </Toolbar.ToggleGroup>
          <Toolbar.Separator className="w-[1px] mx-2 bg-black/20" />
          <Toolbar.ToggleGroup
            type="single"
            className="space-x-2"
            onValueChange={(e) =>
              setStyle({
                textDecoration: (e as TextDecoration) || TextDecoration.None,
              })
            }
            value={style.textDecoration ?? ""}
          >
            <Toolbar.ToggleItem
              value={TextDecoration.Underline}
              className="tb-toggle"
            >
              <RxUnderline />
            </Toolbar.ToggleItem>
            <Toolbar.ToggleItem
              value={TextDecoration.LineThrough}
              className="tb-toggle"
            >
              <RxStrikethrough />
            </Toolbar.ToggleItem>
          </Toolbar.ToggleGroup>
          <Toolbar.Separator className="w-[1px] mx-2 bg-black/20" />
          <Selector
            className="bg-white text-black"
            items={getSizeList()}
            onValueChange={(e) => setStyle({ fontSize: getFontSize(e) })}
            value={getSizeFont(style.fontSize ?? 12)}
          />
          <Toolbar.Separator className="w-[1px] mx-2 bg-black/20" />
          <Selector
            className="bg-white text-black"
            items={getFontFamilyList()}
            onValueChange={(e) => setStyle({ fontFamily: e })}
            value={style.fontFamily ?? "微软雅黑"}
          />
        </Toolbar.Root>
      </div>
    )
  );
}
