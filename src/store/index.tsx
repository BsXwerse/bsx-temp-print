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
  setPos: (id: string, left: number, top: number) => void;
  setActive: (id: string) => void;
  setCurTemp: (temp: Temp | undefined) => void;
  addWidget: (widget: Widget) => void;
  reset: () => void;
};

const initValue: State = {
  widget: [],
  curTemp: null,
  active: "-1",
};

const useStore = create<State & Action>()((set) => ({
  ...initValue,
  setActive: (id) => set(() => ({ active: id })),
  setCurTemp: (temp) =>
    set(() => ({ curTemp: temp, widget: temp?.widgets ? temp.widgets : [] })),
  setPos(id, left, top) {
    set(
      produce((state: State) => {
        const w = state.widget.find((x) => x.id === id);
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
  reset: () => set(initValue),
}));

export default useStore;
