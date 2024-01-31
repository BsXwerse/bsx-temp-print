import { useRef } from "react";
import useTransform from "./useTransform";
import useMove from "./useMove";
import useSize from "./useSize";

export default function useMouse() {
  const ref = useRef<HTMLDivElement>(null);
  useTransform(ref);
  useMove(ref);
  useSize(ref);
  return ref;
}
