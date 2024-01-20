import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import useStore from "@/store";
import { setCover, setTemp, setWidgets } from "@/utils/indexedDB";
import { useMount } from "ahooks";
import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";
import { WidgetType } from "@/types/enums/widget-types";

export default function LeftPanel() {
  const curTemp = useStore((state) => state.curTemp);
  const widgets = useStore((state) => state.widget);
  const addWidget = useStore((state) => state.addWidget);

  const saveCover = () => {
    if (!curTemp) return;
    const ele = document.getElementById("design-canvas");
    if (!ele) return;
    html2canvas(ele as HTMLDivElement).then((canvas) =>
      setCover({ id: curTemp.coverId, url: canvas.toDataURL() }),
    );
  };

  const handleSave = () => {
    if (curTemp) {
      setTemp(curTemp);
      setWidgets({ id: curTemp.widgetsId, widgets });
      saveCover();
    }
  };

  const add = () => {
    addWidget({
      id: uuidv4(),
      type: WidgetType.TEXT,
      width: Math.random() * 90 + 50,
      height: Math.random() * 90 + 50,
      top: Math.random() * 190,
      left: Math.random() * 150,
      name: faker.lorem.word({ length: { max: 10, min: 5 } }),
      value: faker.lorem.word({ length: { max: 10, min: 5 } }),
      style: {},
    });
  };

  useMount(saveCover);

  return (
    <div className="min-h-screen bg-slate-700">
      <div className="w-32 flex flex-col gap-10">
        <Link to="/list">返回</Link>
        <button onClick={handleSave}>保存</button>
        <button onClick={add}>添加组件</button>
      </div>
    </div>
  );
}
