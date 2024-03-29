import { WidgetType } from "@/types/enums/widget-types";
import { Widget } from "@/types/widget";
import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";
import { Temp } from "@/types/temp";
import { addCover, addTemps, addWidgets, deleteAll } from "./indexedDB";

export function getTestWidget() {
  const data: Widget[] = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      id: uuidv4(),
      type: WidgetType.TEXT,
      width: Math.random() * 100 + 50,
      height: Math.random() * 100 + 50,
      top: Math.random() * 550,
      left: Math.random() * 450,
      name: faker.lorem.word({ length: { max: 10, min: 5 } }),
      value: faker.lorem.word({ length: { max: 10, min: 5 } }),
      style: {},
    });
  }
  return data;
}

export function convertImageToBase64(
  imgUrl: string,
  callback: (url: string) => void,
) {
  const image = new Image();
  image.crossOrigin = "anonymous";
  image.onload = () => {
    const canvas = document.createElement("canvas");
    let h = image.naturalHeight,
      w = image.naturalWidth;
    if (image.naturalHeight >= 150) {
      h *= 150 / image.naturalHeight;
      w *= 150 / image.naturalHeight;
    }
    canvas.height = h;
    canvas.width = w;
    canvas.getContext("2d")?.drawImage(image, 0, 0, w, h);
    const dataUrl = canvas.toDataURL();
    callback && callback(dataUrl);
  };
  image.src = imgUrl;
}

export function genTestData() {
  const data: Temp[] = [];
  for (let i = 0; i < 50; i++) {
    convertImageToBase64(
      faker.image.url({
        height: i % 2 == 1 ? 320 : 480,
        width: i % 2 == 1 ? 240 : 640,
      }),
      async (url) => {
        const coverId = await addCover(url);
        const widgetsId = await addWidgets(getTestWidget());
        data.push({
          name: faker.lorem.word({
            length: { min: 5, max: 7 },
            strategy: "fail",
          }),
          width: Math.random() * 300 + 500,
          height: Math.random() * 300 + 700,
          coverId: coverId,
          widgetsId: widgetsId,
        });
        if (data.length == 50) {
          addTemps(data);
          alert("ok");
        }
      },
    );
  }
}

export function dataDelete() {
  deleteAll();
}
