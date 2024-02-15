import Style from "@/types/style";
import { Temp } from "@/types/temp";
import { Widget } from "@/types/widget";
import { produce } from "immer";
import { create } from "zustand";

type State = {
  curTemp?: Temp | null;
  widget: Widget[];
  widgetMap: Map<string, number>;
  active: string;
};

type Action = {
  setPos: (left: number, top: number) => void;
  setActive: (id: string) => void;
  setCurTemp: (temp: Temp | undefined) => void;
  addWidget: (widget: Widget) => void;
  changeSizePos: (
    width: number,
    height: number,
    top: number,
    left: number,
  ) => void;
  setStyle: (style: Style) => void;
  reset: () => void;
};

const initValue: State = {
  widget: [],
  curTemp: null,
  widgetMap: new Map(),
  active: "-1",
};

const useStore = create<State & Action>()((set) => ({
  ...initValue,
  setActive: (id) => set(() => ({ active: id })),
  setCurTemp: (temp) =>
    set(() => {
      const ws = temp?.widgets;
      const widgetMap = new Map();
      if (ws) for (let i = 0; i < ws.length; i++) widgetMap.set(ws[i].id, i);
      return {
        curTemp: temp,
        widget: ws ? ws : [],
        widgetMap,
      };
    }),
  setPos(left, top) {
    set(
      produce((state: State) => {
        const idx = state.widgetMap.get(state.active);
        if (typeof idx !== "number") return;
        const w = state.widget[idx];
        if (w) {
          w.left = left;
          w.top = top;
        }
      }),
    );
  },
  addWidget(widget) {
    set(
      produce((state: State) => {
        state.widget.push(widget);
        state.widgetMap.set(widget.id, state.widget.length - 1);
      }),
    );
  },
  changeSizePos(width, height, top, left) {
    set(
      produce((state: State) => {
        const idx = state.widgetMap.get(state.active);
        if (typeof idx !== "number") return;
        const w = state.widget[idx];
        if (w) {
          w.width += width;
          w.height += height;
          w.top += top;
          w.left += left;
        }
      }),
    );
  },
  setStyle(style) {
    set(
      produce((state: State) => {
        const idx = state.widgetMap.get(state.active);
        if (typeof idx !== "number") return;
        const w = state.widget[idx];
        if (w) w.style = { ...w.style, ...style };
      }),
    );
  },
  reset: () => set(initValue),
}));

export default useStore;
