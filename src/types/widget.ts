import { WidgetType } from "./enums/widget-types";
import Style from "./style";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Widget {
  id: string;
  type: WidgetType;
  width: number;
  height: number;
  left: number;
  top: number;
  name: string;
  value: any;
  style: Style;
}

export interface Widgets {
  id?: number;
  widgets: Widget[];
}
