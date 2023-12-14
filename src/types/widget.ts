import { WidgetType } from "./enums/widget-types";

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
  style: any;
}
