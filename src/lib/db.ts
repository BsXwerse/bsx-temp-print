import { Cover } from "@/types/cover";
import { Temp } from "@/types/temp";
import { Widgets } from "@/types/widget";
import Dexie, { Table } from "dexie";

export class MyDexie extends Dexie {
  temps!: Table<Temp>;
  widgets!: Table<Widgets>;
  covers!: Table<Cover>;

  constructor() {
    super("bsx-print");
    this.version(1).stores({
      temps: "++id",
      covers: "++id",
      widgets: "++id",
    });
  }
}

export const db = new MyDexie();
