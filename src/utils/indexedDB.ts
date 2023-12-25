/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/lib/db";
import { Temp } from "@/types/temp";

export function addTemp(temp: Temp) {
  try {
    db.temps.add(temp);
  } catch (e: any) {
    console.error(e.message);
  }
}

export function addTemps(temps: Temp[]) {
  db.temps.bulkAdd(temps);
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

export async function getTemp(id: number) {
  let temp;
  try {
    temp = await db.temps.where({ id: id }).first();
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
    console.log(e.message);
  }
  return id ? Number(id.valueOf()) : -1;
}

export function deleteAll() {
  db.covers.clear();
  db.temps.clear();
  db.widgets.clear();
}
