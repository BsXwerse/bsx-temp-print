import { Temp } from "@/types/temp";
import * as Popover from "@radix-ui/react-popover";
import { Link } from "react-router-dom";
import DeleteDialog from "./delete-dialog";

export default function TempCard({ temp }: { temp: Temp }) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className="no-break text-center relative hover:scale-105 transition-transform shadow-lg">
          <div className="rounded absolute w-full h-full transition-colors hover:bg-white/10 cursor-pointer" />
          <img src={temp.coverUrl} alt="test" className="w-full rounded" />
          {temp.name}
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content asChild sideOffset={-100}>
          <div className="bg-background text-foreground rounded-lg font-semibold p-3 animate-popover flex flex-col gap-1 shadow-md">
            <Link
              to={"/design/" + temp.id}
              className="hover:bg-muted p-2 rounded"
            >
              编辑
            </Link>
            <Link to="/print" className="hover:bg-muted p-2 rounded">
              打印
            </Link>
            <button className="hover:bg-muted p-2 rounded">导出</button>
            <DeleteDialog />
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
