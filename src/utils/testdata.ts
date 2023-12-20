import { WidgetType } from "@/types/enums/widget-types";
import { Widget } from "@/types/widget";
import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

export function getTestWidget() {
  const data: Widget[] = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      id: uuidv4(),
      type: WidgetType.TEXT,
      width: Math.random() * 150,
      height: Math.random() * 150,
      top: Math.random() * 400,
      left: Math.random() * 900,
      name: faker.lorem.word({ length: { max: 10, min: 5 } }),
      value: faker.lorem.word({ length: { max: 10, min: 5 } }),
      style: {},
    });
  }
  return data;
}

export function getTestData() {
  const data: string[] = [];
  for (let i = 0; i < 31; i++) {
    convertImageToBase64(
      faker.image.url({
        height: i % 2 == 1 ? 320 : 480,
        width: i % 2 == 1 ? 240 : 640,
      }),
      (url) => {
        data.push(url);
        if (data.length == 31) {
          for (let i = 0; i < 31; i++) {
            localStorage.setItem("url" + i, data[i]);
          }
          localStorage.setItem("temp-count", String(31));
          alert("ok");
        }
      },
    );
  }
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
