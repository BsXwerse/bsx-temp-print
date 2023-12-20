export function getTempCover(pageNum: number, pageSize: number) {
  const offset = pageNum * pageSize;
  const data = [];
  for (let i = offset; i < offset + pageSize; i++) {
    const d = localStorage.getItem("url" + i);
    if (d) {
      data.push(d);
    }
  }
  return data;
}
