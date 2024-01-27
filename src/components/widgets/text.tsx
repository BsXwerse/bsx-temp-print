import useStore from "@/store";
import { Widget } from "@/types/widget";
import classnames from "classnames";
import { Sizer } from "../sizer";

export default function Text({ widget }: { widget: Widget }) {
  const activeId = useStore((state) => state.active);
  //TODO 类名清空
  //TODO 阻止事件冒泡
  return (
    <div
      id={widget.id}
      className={classnames(
        "absolute bg-cyan-700 border-[1px] border-solid border-black select-none",
        {
          ["outline outline-1 outline-sky-500"]: widget.id === activeId,
        },
      )}
      style={{
        top: widget.top,
        left: widget.left,
        width: widget.width,
        height: widget.height,
      }}
    >
      <Sizer show={widget.id === activeId} />
      <div className="w-10 h-10 bg-black" />
      {widget.value}
    </div>
  );
}
