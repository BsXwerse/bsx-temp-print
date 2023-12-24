import { FaPlus } from "react-icons/fa";
import * as Popover from "@radix-ui/react-popover";
export default function TempAddButton() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="fixed right-10 lg:right-28 bottom-20 lg:bottom-40 p-4 rounded-full bg-violet-500 text-purple-200 hover:bg-violet-400">
          <FaPlus />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content asChild sideOffset={10} side="top">
          <div className="bg-background text-foreground rounded-lg font-semibold p-3 animate-popover flex flex-col gap-1 shadow-lg lg:outline outline-muted">
            <button className="hover:bg-muted p-2 rounded">新增</button>
            <button className="hover:bg-muted p-2 rounded">导入</button>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
