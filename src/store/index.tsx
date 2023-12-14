import { Widget } from "@/types/widget";
import { create } from "zustand";

type State = {
  widget: Widget[];
  active: string;
  setState: (widget: Widget[]) => void;
  setActive: (id: string) => void;
};

const useWidgetStore = create<State>()((set) => ({
  widget: [],
  active: "-1",
  setState: (widget) => set(() => ({ widget })),
  setActive: (id) => set(() => ({ active: id })),
}));

export default useWidgetStore;
