/* eslint-disable react-hooks/exhaustive-deps */
import { useEventListener, useMemoizedFn } from "ahooks";
import { useEffect } from "react";

export default function useTransform(ref: React.RefObject<HTMLDivElement>) {
  let scale = 1;
  let moveX = 0;
  let moveY = 0;

  const handleWheel = useMemoizedFn((e: WheelEvent) => {
    if (!ref.current) return;
    if (e.deltaY < 0) scale += 0.1 * scale;
    else scale -= 0.1 * scale;
    ref.current.style.transform = `scale(${scale}) translate(${moveX}px, ${moveY}px)`;
  });

  const handleMouseMove = useMemoizedFn((e: MouseEvent) => {
    if (!ref.current) return;
    moveX += e.movementX / scale;
    moveY += e.movementY / scale;
    ref.current.style.transform = `scale(${scale}) translate(${moveX}px, ${moveY}px)`;
  });

  const handleMouseDown = useMemoizedFn((e: MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    document.addEventListener("mousemove", handleMouseMove);
  });

  const handleMouseUp = useMemoizedFn(() =>
    document.removeEventListener("mousemove", handleMouseMove),
  );

  useEffect(() => {
    const cur = ref.current;
    if (cur) {
      let a = (document.documentElement.clientHeight * 0.9) / cur.clientHeight;
      const b = (document.documentElement.clientWidth * 0.9) / cur.clientWidth;
      a = Math.abs(a - 1) < Math.abs(b - 1) ? a : b;
      scale = a;
      cur.style.transform = `scale(${a})`;
    }
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [ref.current]);

  useEventListener("wheel", handleWheel, { target: ref });
  useEventListener("mousedown", handleMouseDown, { target: ref });
}
