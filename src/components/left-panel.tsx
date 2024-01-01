import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import useStore from "@/store";
import { setCover } from "@/utils/indexedDB";

export default function LeftPanel() {
  const curTemp = useStore((state) => state.curTemp);

  const handleSave = () => {
    if (!curTemp) return;
    const ele = document.getElementById("design-canvas");
    if (!ele) return;
    html2canvas(ele as HTMLDivElement).then((canvas) =>
      setCover({ id: curTemp.coverId, url: canvas.toDataURL() }),
    );
  };

  return (
    <div className="min-h-screen bg-slate-700">
      <div className="w-32 flex flex-col gap-10">
        <Link to="/list">返回</Link>
        <button onClick={handleSave}>保存</button>
      </div>
    </div>
  );
}
