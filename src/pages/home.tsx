import { Link } from "react-router-dom";
import Example from "@/assets/images/example.png";
import { SiGithub } from "react-icons/si";

export default function Home() {
  return (
    <div className="text-foreground w-screen h-screen flex items-center justify-center flex-col md:flex-row p-8 gap-20">
      <div>
        <h1 className="text-4xl font-semibold mb-10">
          基于Lodop的模板打印系统
        </h1>
        <p className="max-w-xs mb-10">
          可通过鼠标拖拽的方式设计模板，支持模板导出导出，模板预览与打印
        </p>
        <div className="flex items-center">
          <Link
            to="/list"
            className=" bg-cyan-700 rounded px-5 py-3 font-semibold shrink-0 text-white dark:text-white/90 hover:bg-cyan-600"
          >
            开始使用
          </Link>
          <Link
            to="https://github.com/BsXwerse/bsx-temp-print"
            target="_blank"
            className="font-semibold bg-black/90 px-5 py-3 rounded mx-10 inline-flex items-center gap-3 text-white/90 hover:bg-white/5"
          >
            <SiGithub />
            GitHub
          </Link>
        </div>
      </div>
      <img src={Example} className="w-[500px] aspect-video rounded shadow" />
    </div>
  );
}
