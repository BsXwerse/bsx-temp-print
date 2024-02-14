import useStore from "@/store";
import { Widget } from "@/types/widget";
import classnames from "classnames";
import { Sizer } from "../sizer";
import getStyleObject from "@/utils/style";

export default function Text({ widget }: { widget: Widget }) {
  const activeId = useStore((state) => state.active);
  //TODO 类名清空
  //TODO 阻止事件冒泡
  return (
    <div
      id={widget.id}
      className={classnames("absolute select-none text-black", {
        ["outline outline-1 outline-sky-500"]: widget.id === activeId,
      })}
      style={{
        top: widget.top,
        left: widget.left,
        width: widget.width,
        height: widget.height,
        ...getStyleObject(widget.style),
      }}
    >
      <Sizer show={widget.id === activeId} />
      {widget.value}
    </div>
  );
}
