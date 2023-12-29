/* eslint-disable react-hooks/exhaustive-deps */
import { useEventListener, useMemoizedFn } from "ahooks";
import { useEffect } from "react";

export default function useTransform(ref: React.RefObject<HTMLDivElement>) {
  let scale = 1;
  let moveX = 0;
  let moveY = 0;

  const handleWheel = useMemoizedFn((e: WheelEvent) => {
    if (!ref.current) return;
    if (e.deltaY < 0) {
      if (scale < 2.5) scale += 0.1;
    } else {
      if (scale > 0.3) scale -= 0.1;
    }
    ref.current.style.transform = `scale(${scale}) translate(${moveX}px, ${moveY}px)`;
  });

  const handleMouseMove = useMemoizedFn((e: MouseEvent) => {
    if (!ref.current) return;
    moveX += e.movementX / scale;
    moveY += e.movementY / scale;
    ref.current.style.transform = `scale(${scale}) translate(${moveX}px, ${moveY}px)`;
  });

  const handleMouseDown = useMemoizedFn(() =>
    document.addEventListener("mousemove", handleMouseMove),
  );

  const handleMouseUp = useMemoizedFn(() =>
    document.removeEventListener("mousemove", handleMouseMove),
  );

  useEffect(() => {
    const cur = ref.current;
    if (cur) {
      let a = document.documentElement.clientHeight / cur.clientHeight;
      const b = document.documentElement.clientWidth / cur.clientWidth;
      a = Math.max(Math.min(a, b) - 0.1, 0.1);
      if (a < 1) {
        scale = a;
        cur.style.transform = `scale(${a})`;
      }
    }
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [ref.current]);

  useEventListener("wheel", handleWheel, { target: ref });
  useEventListener("mousedown", handleMouseDown, { target: ref });
}
