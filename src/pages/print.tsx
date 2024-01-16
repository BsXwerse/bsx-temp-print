import { dataDelete, genTestData } from "@/utils/testdata";
import html2canvas from "html2canvas";

export default function Print() {
  const testCanvas = () => {
    html2canvas(document.getElementById("abc") as HTMLDivElement).then(
      function (canvas) {
        document.body.appendChild(canvas);
      },
    );
  };

  return (
    <div>
      <div
        id="abc"
        className="bg-slate-700 w-52 h-60 flex items-center justify-center"
      >
        <div className=" bg-sky-800 w-28 h-32 font-semibold text-2xl">
          Hello
        </div>
      </div>
      <button onClick={testCanvas} className="p-5 m-4 bg-violet-600">
        html2canvas test
      </button>
      <button onClick={genTestData} className="p-5 m-4 bg-violet-600">
        生成测试数据
      </button>
      <button onClick={dataDelete} className="p-5 m-4 bg-violet-600">
        delete indexedDB
      </button>
    </div>
  );
}
