import { Temp } from "@/types/temp";
import { Widget } from "@/types/widget";
import { getTemp, getTempIds } from "@/utils/localStorage";
import { create } from "zustand";

type State = {
  tempIds: string[];
  curTemp: Temp | null;
  widget: Widget[];
  active: string;
};

type Action = {
  setState: (widget: Widget[]) => void;
  setActive: (id: string) => void;
  setCurTemp: (id: string) => void;
  reset: () => void;
};

const initValue: State = {
  tempIds: getTempIds(),
  widget: [],
  curTemp: null,
  active: "-1",
};

//更新tempIds需要同时更新localstorage
const useStore = create<State & Action>()((set) => ({
  ...initValue,
  setState: (widget) => set(() => ({ widget })),
  setActive: (id) => set(() => ({ active: id })),
  setCurTemp: (id) => set(() => ({ curTemp: getTemp(id) })),
  reset: () => set(initValue),
}));

export default useStore;
