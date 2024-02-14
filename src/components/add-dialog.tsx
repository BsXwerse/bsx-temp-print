import { getPagerSize, getTypeList } from "@/utils/paper-size";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { addTemp } from "@/utils/indexedDB";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Selector from "./common/selector";

export default function AddDialog() {
  const papertypes = getTypeList();
  const [name, setName] = useState("");
  const [paperSize, setPaperSize] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!name || name == "") return;
    if (paperSize.length < 2) return;
    addTemp({
      name: name,
      width: paperSize[0],
      height: paperSize[1],
      widgetsId: -1,
      coverId: -1,
    })
      .then((id) => {
        if (id === -1) {
          toast.error("新增模板失败");
          return;
        }
        navigate(`/design/${id}`);
      })
      .catch((err) => console.error(err));
  };

  //TODO 添加动画
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="button">新增</button>
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
              onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </div>
          <div className="pb-3 ml-4 flex">
            <label className="mr-4">纸张尺寸:</label>
            <Selector
              className="bg-background text-foreground"
              onValueChange={(e: string) => setPaperSize(getPagerSize(e))}
              items={papertypes}
            />
          </div>
          <div className="flex justify-end gap-3">
            <Dialog.Close>
              <button className="button">取消</button>
            </Dialog.Close>
            <Dialog.Close>
              <button
                className="button bg-violet-500 hover:bg-violet-400"
                onClick={handleAdd}
              >
                确认
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
