import { Widget } from "@/types/widget";

export default function Text({ widget }: { widget: Widget }) {
  return (
    <div
      id={widget.id}
      className=" absolute flex items-center justify-center bg-red-500 border-[1px] border-solid border-black select-none"
      style={{
        top: widget.top,
        left: widget.left,
        width: widget.width,
        height: widget.height,
      }}
    >
      {widget.value}
    </div>
  );
}
