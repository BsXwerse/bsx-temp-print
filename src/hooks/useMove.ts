import useStore from "@/store";
import { useEffect } from "react";
import { useMemoizedFn, useEventListener } from "ahooks";

export default function useMove(ref: React.RefObject<HTMLDivElement>) {
  let scale = 1,
    posX = 0,
    posY = 0,
    curEle: HTMLElement,
    activeId = "-1";
  const setActive = useStore((state) => state.setActive);
  const setPos = useStore((state) => state.setPos);

  const handleMouseMove = useMemoizedFn((e: MouseEvent) => {
    if (!curEle) return;
    posX += e.movementX * scale;
    posY += e.movementY * scale;
    requestAnimationFrame(() => {
      curEle.style.top = `${posY}px`;
      curEle.style.left = `${posX}px`;
    });
  });

  const handleMouseDown = useMemoizedFn((e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      activeId = "-1";
      setActive("-1");
    } else {
      let target = e.target as HTMLElement | null;
      if (target?.id.endsWith("-sizer")) {
        activeId = "-1";
        return;
      }
      while (!target?.id.startsWith("widget-")) {
        if (!target || target === e.currentTarget) return;
        target = target.parentElement;
      }
      document.addEventListener("mousemove", handleMouseMove);
      if (e.currentTarget) {
        const ele = e.currentTarget as HTMLDivElement;
        // eslint-disable-next-line no-useless-escape
        const match = ele.style.transform.match(/scale\(([0-9\.]+)\)/);
        const tmp = match?.[1] ? Number(match[1]) : 1;
        scale = 1 / tmp;
      }
      setActive(target.id);
      activeId = target.id;
      curEle = target;
      posY = Number(target.style.top.slice(0, target.style.top.length - 2));
      posX = Number(target.style.left.slice(0, target.style.left.length - 2));
    }
  });

  const handleMouseUp = useMemoizedFn(() => {
    document.removeEventListener("mousemove", handleMouseMove);
    activeId !== "-1" && setPos(posX, posY);
  });

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseUp]);

  useEventListener("mousedown", handleMouseDown, { target: ref });
}
