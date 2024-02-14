const fontSize = new Map([
  ["初号", 42],
  ["小初", 36],
  ["一号", 26],
  ["小一", 24],
  ["二号", 22],
  ["小二", 18],
  ["三号", 16],
  ["小三", 15],
  ["四号", 14],
  ["小四", 12],
  ["五号", 10.5],
  ["小五", 9],
  ["六号", 7.5],
  ["小六", 6.5],
  ["七号", 5.5],
  ["八号", 5],
]);

export function getFontSize(type: string) {
  if (!fontSize.has(type)) console.error(`没有 ${type} 类型的字号`);
  return fontSize.get(type) ?? 12;
}

export function getSizeList() {
  return Array.from(fontSize.keys());
}