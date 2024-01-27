import { Temp } from "@/types/temp";
import { Widget } from "@/types/widget";
import { produce } from "immer";
import { create } from "zustand";

type State = {
  curTemp?: Temp | null;
  widget: Widget[];
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
  reset: () => void;
};

const initValue: State = {
  widget: [],
  curTemp: null,
  active: "-1",
};

//TODO 不传id，用active
//TODO 优化cur widget
const useStore = create<State & Action>()((set) => ({
  ...initValue,
  setActive: (id) => set(() => ({ active: id })),
  setCurTemp: (temp) =>
    set(() => ({ curTemp: temp, widget: temp?.widgets ? temp.widgets : [] })),
  setPos(left, top) {
    set(
      produce((state: State) => {
        const w = state.widget.find((x) => x.id === state.active);
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
      }),
    );
  },
  changeSizePos(width, height, top, left) {
    set(
      produce((state: State) => {
        const w = state.widget.find((x) => x.id === state.active);
        if (w) {
          w.width += width;
          w.height += height;
          w.top += top;
          w.left += left;
        }
      }),
    );
  },
  reset: () => set(initValue),
}));

export default useStore;
