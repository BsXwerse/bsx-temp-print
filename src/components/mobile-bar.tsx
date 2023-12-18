import * as Popover from "@radix-ui/react-popover";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function MobileBar() {
  const navigate = useNavigate();
  return (
    <div className="md:hidden fixed w-full bottom-0 flex items-center justify-between bg-background py-4 px-6 text-xl shadow-md">
      <button onClick={() => navigate("/")}>Home</button>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button>
            <FaBars />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content asChild>
            <div className="bg-slate-700 w-32 h-32 animate-popover outline-none m-3" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
