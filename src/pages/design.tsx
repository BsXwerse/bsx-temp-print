import useStore from "@/store";
import { useMount, useUnmount } from "ahooks";
import { Link, useParams } from "react-router-dom";
import Null from "@/assets/images/null.png";
import TopPanel from "@/components/top-panel";
import { getTempWithWidgets } from "@/utils/indexedDB";
import useMouse from "@/hooks/useMouse";
import Widgets from "@/components/widgets";
import LeftPanel from "@/components/left-panel";

const OFFSET = 3.8;

export default function Design() {
  const { tempId } = useParams();
  const setCurTemp = useStore((state) => state.setCurTemp);
  const reset = useStore((state) => state.reset);
  const curTemp = useStore((state) => state.curTemp);
  const ref = useMouse();

  useMount(async () => setCurTemp(await getTempWithWidgets(Number(tempId))));
  useUnmount(() => reset());

  //TODO 背景修改
  if (curTemp) {
    return (
      <div className="flex flex-col">
        <TopPanel />
        <LeftPanel />
        <div className="w-full h-screen overflow-hidden flex items-center justify-center">
          <div
            id="design-canvas"
            className=" bg-white text-foreground relative shrink-0"
            style={{
              width: curTemp.width * OFFSET,
              height: curTemp.height * OFFSET,
            }}
            ref={ref}
          >
            <Widgets />
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
