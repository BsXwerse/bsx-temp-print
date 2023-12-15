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
  for (let i = 0; i < 17; i++) {
    data.push(
      faker.image.url({
        height: i % 2 == 1 ? 320 : 480,
        width: i % 2 == 1 ? 240 : 640,
      }),
    );
  }
  return data;
}
