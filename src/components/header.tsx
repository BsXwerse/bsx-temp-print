import { FaMoon } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

export default function Header() {
  return (
    <div className="hidden mx-auto max-w-6xl md:flex items-center justify-between p-5">
      <IoMdHome />
      <FaMoon />
    </div>
  );
}
