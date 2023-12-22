import { Temp } from "@/types/temp";
import * as Popover from "@radix-ui/react-popover";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Link } from "react-router-dom";

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
            <Link to="/design" className="hover:bg-muted p-2 rounded">
              编辑
            </Link>
            <Link to="/print" className="hover:bg-muted p-2 rounded">
              打印
            </Link>
            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <button className="hover:bg-muted p-2 rounded">删除</button>
              </AlertDialog.Trigger>
              <AlertDialog.Portal>
                <AlertDialog.Overlay className="bg-black/50 fixed inset-0" />
                <AlertDialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background text-foreground font-semibold p-5 rounded-lg min-w-[250px]">
                  <AlertDialog.Title className="pb-4">
                    确认删除？
                  </AlertDialog.Title>
                  <AlertDialog.Description className="font-normal text-muted-foreground pb-4">
                    删除后不可恢复
                  </AlertDialog.Description>
                  <div className="flex justify-end gap-7">
                    <AlertDialog.Cancel asChild>
                      <button className="hover:bg-muted py-1 px-3 rounded">
                        取消
                      </button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                      <button className="bg-red-500 hover:bg-red-400 dark:text-foreground text-white/95 py-1 px-3 rounded">
                        确认
                      </button>
                    </AlertDialog.Action>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
