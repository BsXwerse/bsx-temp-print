import { useRef } from "react";
import useTransform from "./useTransform";

export default function useMouse() {
  const ref = useRef<HTMLDivElement>(null);
  useTransform(ref);
  return ref;
}
