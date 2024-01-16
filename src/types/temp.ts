import { Widget } from "./widget";

export interface Temp {
  id?: number;
  name: string;
  width: number;
  height: number;
  coverUrl?: string;
  coverId: number;
  widgetsId: number;
  widgets?: Widget[];
}
