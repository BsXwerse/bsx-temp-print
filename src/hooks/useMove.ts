/* eslint-disable @typescript-eslint/no-explicit-any */
import useWidgetStore from "@/store";
import { useEffect, useRef } from "react";
import { elementCache } from "@/utils/cache";
import { useMemoizedFn, useEventListener } from "ahooks";

export default function useMouse() {
  const ref = useRef<HTMLDivElement>(null);
  const setActive = useWidgetStore((state) => state.setActive);

  const handleMouseMove = useMemoizedFn((e: MouseEvent) => {
    const doc = document as any;
    let targetElement = elementCache.get(doc.curId);
    if (!targetElement) {
      targetElement = document.getElementById(doc.curId);
      elementCache.set(doc.curId, targetElement);
    }
    if (targetElement) {
      targetElement.style.top = `${targetElement?.offsetTop + e.movementY}px`;
      targetElement.style.left = `${targetElement?.offsetLeft + e.movementX}px`;
    }
  });

  const handleMouseDown = useMemoizedFn((e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActive("-1");
    } else {
      document.addEventListener("mousemove", handleMouseMove);
      const t = e.target as any;
      setActive(t.id);
      const tmp = document as any;
      tmp.curId = t.id;
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

  return ref;
}
