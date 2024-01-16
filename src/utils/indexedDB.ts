/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/lib/db";
import { Cover } from "@/types/cover";
import { Temp } from "@/types/temp";
import { Widget, Widgets } from "@/types/widget";

//TODO 拆分到不同文件
export async function addTemp(temp: Temp) {
  if (temp.coverId === -1) {
    temp.coverId = await addCover("/images/null.png");
  }
  if (temp.widgetsId === -1) {
    temp.widgetsId = await addWidgets([]);
  }
  let id;
  try {
    id = await db.temps.add(temp);
  } catch (e: any) {
    console.error(e.message);
  }
  return id ? Number(id.valueOf()) : -1;
}

export function addTemps(temps: Temp[]) {
  db.temps.bulkAdd(temps);
}

export async function setTemp(temp: Temp) {
  try {
    if (!temp.id) throw new Error("id 不能为空");
    await db.temps.update(temp.id, temp);
  } catch (e: any) {
    console.error(e.message);
  }
}

export async function setWidgets(widgets: Widgets) {
  try {
    if (!widgets.id) throw new Error("id 不能为空");
    await db.widgets.update(widgets.id, widgets);
  } catch (e: any) {
    console.error(e.message);
  }
}

export async function countTemps() {
  let count = 0;
  try {
    count = await db.temps.count();
  } catch (e: any) {
    console.error(e.message);
  }
  return count;
}

export async function getTempWithCover(pageNum: number, pageSize: number) {
  let temps: Temp[] = [];
  try {
    temps = await db.temps
      .offset(pageNum * pageSize)
      .limit(pageSize)
      .toArray();
  } catch (e: any) {
    console.error(e.message);
  }
  for (let i = 0; i < temps.length; i++) {
    let cover;
    try {
      cover = await db.covers.where({ id: temps[i].coverId }).first();
    } catch (e: any) {
      console.error(e.message);
    }
    if (cover) temps[i].coverUrl = cover.url;
    else temps[i].coverUrl = "/images/null.png";
  }
  return temps;
}

export async function getTempWithWidgets(id: number) {
  let temp;
  try {
    temp = await db.temps.where({ id: id }).first();
    if (temp) {
      const w = await db.widgets.where({ id: temp.widgetsId }).first();
      if (w) temp.widgets = w.widgets;
    }
  } catch (e: any) {
    console.error(e.message);
  }
  return temp;
}

export async function addCover(url: string) {
  let id;
  try {
    id = await db.covers.add({ url });
  } catch (e: any) {
    console.error(e.message);
  }
  return id ? Number(id.valueOf()) : -1;
}

export async function setCover(cover: Cover) {
  try {
    if (!cover.id) throw new Error("cover id 不能为空");
    await db.covers.update(cover.id, { url: cover.url });
  } catch (e: any) {
    console.error(e.message);
  }
}

export async function addWidgets(widgets: Widget[]) {
  let id;
  try {
    id = await db.widgets.add({ widgets });
  } catch (e: any) {
    console.error(e.message);
  }
  return id ? Number(id.valueOf()) : -1;
}

export function deleteAll() {
  db.covers.clear();
  db.temps.clear();
  db.widgets.clear();
}
