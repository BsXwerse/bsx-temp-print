import { LeftLink } from "@/types/link";
import { IoMdHome } from "react-icons/io";
import { FaListUl, FaPrint } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";

export const leftLinks: LeftLink[] = [
  {
    href: "/",
    name: "首页",
    icon: <IoMdHome />,
  },
  {
    href: "/list",
    name: "模板列表",
    icon: <FaListUl />,
  },
  {
    href: "/print",
    name: "数据打印",
    icon: <FaPrint />,
  },
  {
    href: "/about",
    name: "关于",
    icon: <SiAboutdotme />,
  },
];
