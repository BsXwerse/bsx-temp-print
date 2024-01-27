import useStore from "@/store";
import { useEventListener, useMemoizedFn } from "ahooks";
import { useEffect } from "react";

enum Direction {
  Top = 1,
  Bottom,
  Left,
  Right,
}

export default function useSize(ref: React.RefObject<HTMLDivElement>) {
  let scale = 1;
  let direction: Direction | null = null;
  const changeSizePos = useStore((state) => state.changeSizePos);

  const handleMouseMove = (e: MouseEvent) => {
    if (!direction) return;
    switch (direction) {
      case Direction.Top:
        changeSizePos(0, -e.movementY * scale, e.movementY * scale, 0);
        break;
      case Direction.Bottom:
        changeSizePos(0, e.movementY * scale, 0, 0);
        break;
      case Direction.Left:
        changeSizePos(-e.movementX * scale, 0, 0, e.movementX * scale);
        break;
      case Direction.Right:
        changeSizePos(e.movementX * scale, 0, 0, 0);
        break;
    }
  };

  const handleMouseDown = useMemoizedFn(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLDivElement;
      switch (target.id) {
        case "top-sizer":
          direction = Direction.Top;
          break;
        case "bottom-sizer":
          direction = Direction.Bottom;
          break;
        case "left-sizer":
          direction = Direction.Left;
          break;
        case "right-sizer":
          direction = Direction.Right;
          break;
        default:
          direction = null;
          return;
      }
      if (target.id.endsWith("-sizer"))
        document.addEventListener("mousemove", handleMouseMove);
      if (e.currentTarget) {
        const ele = e.currentTarget as HTMLDivElement;
        // eslint-disable-next-line no-useless-escape
        const match = ele.style.transform.match(/scale\(([0-9\.]+)\)/);
        const tmp = match?.[1] ? Number(match[1]) : 1;
        scale = 1 / tmp;
      }
    },
  );

  const handleMouseUp = useMemoizedFn(() => {
    document.removeEventListener("mousemove", handleMouseMove);
  });

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseUp]);

  useEventListener("mousedown", handleMouseDown, { target: ref });
}
