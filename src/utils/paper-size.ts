const pagers = new Map([
  ["A4", [210, 297]],
  ["A5", [148, 210]],
  ["A3", [297, 420]],
  ["A2", [420, 594]],
  ["A1", [594, 841]],
  ["A0", [841, 1189]],
  ["Letter", [216, 279]],
  ["Legal", [279, 432]],
  ["A6", [105, 148]],
  ["A7", [74, 105]],
  ["A8", [52, 74]],
  ["A9", [37, 52]],
  ["A10", [26, 37]],
  ["B7", [100, 148]],
  ["B5", [141, 200]],
  ["B4", [200, 283]],
  ["B3", [283, 400]],
  ["B2", [400, 566]],
  ["B1", [566, 800]],
  ["B0", [800, 1132]],
  ["Foolscap", [216, 356]],
]);

export function getPagerSize(type: string) {
  if (!pagers.has(type)) {
    console.error("不存在该尺寸：" + type);
    return getPagerSize("A4");
  }
  const size = pagers.get(type);
  if (size) return size;
  else return getPagerSize("A4");
}

export function getTypeList() {
  return Array.from(pagers.keys());
}
