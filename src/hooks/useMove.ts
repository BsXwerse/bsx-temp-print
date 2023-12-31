import useStore from "@/store";
import { useEffect } from "react";
import { useMemoizedFn, useEventListener } from "ahooks";

export default function useMove(ref: React.RefObject<HTMLDivElement>) {
  let scale = 1,
    posX = 0,
    posY = 0,
    curEle: HTMLElement;
  const setActive = useStore((state) => state.setActive);

  const handleMouseMove = useMemoizedFn((e: MouseEvent) => {
    if (!curEle) return;
    posX += e.movementX / scale;
    posY += e.movementY / scale;
    requestAnimationFrame(() => {
      curEle.style.top = `${posY}px`;
      curEle.style.left = `${posX}px`;
    });
  });

  const handleMouseDown = useMemoizedFn((e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActive("-1");
    } else {
      document.addEventListener("mousemove", handleMouseMove);
      if (e.currentTarget) {
        const ele = e.currentTarget as HTMLDivElement;
        // eslint-disable-next-line no-useless-escape
        const match = ele.style.transform.match(/scale\(([0-9\.]+)\)/);
        scale = match?.[1] ? Number(match[1]) : 1;
      }
      const t = e.target as HTMLDivElement;
      const ele = document.getElementById(t.id);
      if (ele) {
        setActive(t.id);
        curEle = ele;
        posY = Number(ele.style.top.slice(0, ele.style.top.length - 2));
        posX = Number(ele.style.left.slice(0, ele.style.left.length - 2));
      }
    }
  });

  const handleMouseUp = useMemoizedFn(() => {
    document.removeEventListener("mousemove", handleMouseMove);
  });

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseUp]);

  useEventListener("mousedown", handleMouseDown, { target: ref });
}
