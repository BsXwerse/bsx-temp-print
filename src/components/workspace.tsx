/* eslint-disable @typescript-eslint/no-explicit-any */
import Widgets from "@/components/widgets";
import useWidgetStore from "@/store";
import { getTestWidget } from "@/utils/testdata";
import useMove from "@/hooks/useMove";

export default function Workspcace() {
  const setState = useWidgetStore((state) => state.setState);
  const ref = useMove();

  return (
    <div className=" w-screen h-screen flex items-center justify-center bg-slate-700">
      <div className=" h-[500px] w-[1000px] bg-white relative" ref={ref}>
        <Widgets />
      </div>
      <button onClick={() => setState(getTestWidget())}>tets</button>
    </div>
  );
}
