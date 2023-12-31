import { Temp } from "@/types/temp";
import { Widget } from "@/types/widget";
import { create } from "zustand";

type State = {
  curTemp?: Temp | null;
  widget: Widget[];
  active: string;
};

type Action = {
  setState: (widget: Widget[]) => void;
  setActive: (id: string) => void;
  setCurTemp: (temp: Temp | undefined) => void;
  reset: () => void;
};

const initValue: State = {
  widget: [],
  curTemp: null,
  active: "-1",
};

const useStore = create<State & Action>()((set) => ({
  ...initValue,
  setState: (widget) => set(() => ({ widget })),
  setActive: (id) => set(() => ({ active: id })),
  setCurTemp: (temp) =>
    set(() => ({ curTemp: temp, widget: temp?.widgets ? temp.widgets : [] })),
  reset: () => set(initValue),
}));

export default useStore;
