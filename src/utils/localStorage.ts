import { Temp } from "@/types/temp";

export function getTempIds(): string[] {
  const ids = localStorage.getItem("tempIds");
  if (!ids) return [];
  const res = JSON.parse(ids);
  return res;
}

export function getTempWithCover(
  ids: string[],
  pageNum: number,
  pageSize: number,
) {
  const offset = pageNum * pageSize;
  const data: Temp[] = [];
  for (let i = offset; i < ids.length && i < offset + pageSize; i++) {
    const tempStr = localStorage.getItem(ids[i]);
    if (!tempStr) {
      console.error("获取模板数据失败，id：" + ids[i]);
      continue;
    }
    const temp: Temp = JSON.parse(tempStr);
    let coverUrl = localStorage.getItem(temp.coverId);
    if (!coverUrl) {
      console.error("获取模板封面失败，id：" + ids[i]);
      coverUrl = "/images/null.png";
    }
    temp.coverUrl = coverUrl;
    data.push(temp);
  }
  return data;
}
