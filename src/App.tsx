/* eslint-disable @typescript-eslint/no-explicit-any */
import Widgets from "./components/widgets";
import useWidgetStore from "./store";
import { getTestWidget } from "./utils/testdata";

export default function App() {
  const setState = useWidgetStore((state) => state.setState);
  const setActive = useWidgetStore((state) => state.setActive);
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setActive("-1");
    } else {
      e.currentTarget.addEventListener("mousemove", handleMouseMove);
      const t = e.target as any;
      setActive(t.id);
      const tmp = document as any;
      tmp.curId = t.id;
    }
  };
  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.removeEventListener("mousemove", handleMouseMove);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const doc = document as any;
    const targetElement = document.getElementById(doc.curId);
    if (targetElement) {
      targetElement.style.top = `${targetElement?.offsetTop + e.movementY}px`;
      targetElement.style.left = `${targetElement?.offsetLeft + e.movementX}px`;
    }
  };
  return (
    <div className=" w-screen h-screen flex items-center justify-center bg-slate-700">
      <div
        className=" h-[500px] w-[1000px] bg-white relative"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <Widgets />
      </div>
      <button onClick={() => setState(getTestWidget())}>tets</button>
    </div>
  );
}
