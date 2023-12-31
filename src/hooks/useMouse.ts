import { useRef } from "react";
import useTransform from "./useTransform";
import useMove from "./useMove";

export default function useMouse() {
  const ref = useRef<HTMLDivElement>(null);
  useTransform(ref);
  useMove(ref);
  return ref;
}
