import useStore from "@/store";
import { useMount, useUnmount } from "ahooks";
import { Link, useParams } from "react-router-dom";
import Null from "@/assets/images/null.png";
import LeftPanel from "@/components/left-panel";
import { getTemp } from "@/utils/indexedDB";
import useMouse from "@/hooks/useMouse";

export default function Design() {
  const { tempId } = useParams();
  const setCurTemp = useStore((state) => state.setCurTemp);
  const reset = useStore((state) => state.reset);
  const curTemp = useStore((state) => state.curTemp);

  useMount(async () => setCurTemp(await getTemp(Number(tempId))));
  useUnmount(() => reset());
  const ref = useMouse();

  if (curTemp) {
    return (
      <div className="flex">
        <LeftPanel />
        <div className="w-full h-screen overflow-hidden flex items-center justify-center">
          <div
            className="bg-white/50 flex items-center justify-center text-foreground"
            style={{ width: curTemp.width, height: curTemp.height }}
            ref={ref}
          >
            {curTemp.name}
            width:
            {curTemp.width}
            height:
            {curTemp.height}
          </div>
        </div>
      </div>
    );
  } else if (curTemp === undefined) {
    return (
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
        <h1 className="text-center mb-12 text-2xl text-[#b3be91]">
          模板加载失败，
          <Link
            to="/list"
            className=" underline underline-offset-4 hover:text-orange-300 "
          >
            返回
          </Link>
        </h1>
        <img src={Null} alt="模板加载失败" />
      </div>
    );
  }
}
