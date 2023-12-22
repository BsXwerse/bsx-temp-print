import { Widget } from "./widget";

export interface Temp {
  id: string;
  name: string;
  width: number;
  height: number;
  coverUrl?: string;
  coverId: string;
  widgets?: Widget[];
  widgetsId: string;
}
