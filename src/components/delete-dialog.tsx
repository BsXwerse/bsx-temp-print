import { deleteTemp } from "@/utils/indexedDB";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export default function DeleteDialog({ tempId }: { tempId: number }) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="hover:bg-muted p-2 rounded">删除</button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-black/50 fixed inset-0" />
        <AlertDialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background text-foreground font-semibold p-5 rounded-lg min-w-[250px]">
          <AlertDialog.Title className="pb-4">确认删除？</AlertDialog.Title>
          <AlertDialog.Description className="font-normal text-muted-foreground pb-4">
            删除后不可恢复
          </AlertDialog.Description>
          <div className="flex justify-end gap-7">
            <AlertDialog.Cancel asChild>
              <button className="button">取消</button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                className="button bg-red-500 hover:bg-red-400 dark:text-foreground text-white/95"
                onClick={() => deleteTemp(tempId)}
              >
                确认
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
