import { getTypeList } from "@/utils/paper-size";
import * as Dialog from "@radix-ui/react-dialog";
// import { useState } from "react";
import * as Select from "@radix-ui/react-select";

export default function AddDialog() {
  const papertypes = getTypeList();
  // const [name, setName] = useState("");
  // const [papertype, setPaperType] = useState("");

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="hover:bg-muted p-2 rounded">新增</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background text-foreground p-5 rounded-lg min-w-[350px]">
          <Dialog.Title className=" font-semibold text-lg pb-3">
            新建模板
          </Dialog.Title>
          <Dialog.Description className=" font-normal text-muted-foreground text-sm pb-5">
            请输入模板名称并选择纸张大小
          </Dialog.Description>
          <div className="pb-3 ml-4">
            <label className="mr-4">模板名称:</label>
            <input
              className="bg-background focus:bg-muted hover:bg-muted rounded focus:ring-2 ring-sky-400 px-5 outline-none max-w-[200px]"
              required
              placeholder="请输入模板名称"
            />
          </div>
          <div className="pb-3 ml-4">
            <label className="mr-4">纸张尺寸:</label>
            <Select.Root>
              <Select.Trigger className="px-5 hover:bg-muted rounded">
                <Select.Value placeholder="请选择" />
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="bg-background text-foreground rounded">
                  <Select.Viewport className="p-2">
                    {papertypes.map((x) => (
                      <Select.Item
                        value={x}
                        className="p-1 hover:bg-muted rounded cursor-pointer outline-none"
                      >
                        <Select.ItemText>{x}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
