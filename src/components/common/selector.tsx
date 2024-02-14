/* eslint-disable @typescript-eslint/no-explicit-any */
import { RxChevronDown } from "react-icons/rx";
import * as Select from "@radix-ui/react-select";

type SelectProps = Select.SelectContentProps & {
  onValueChange: (e: string) => void;
  items: string[];
  defaultValue?: string;
};

export default function Selector({
  onValueChange,
  items,
  className,
  defaultValue,
}: SelectProps) {
  return (
    <Select.Root onValueChange={onValueChange} defaultValue={defaultValue}>
      <Select.Trigger className="px-5 hover:bg-muted rounded flex items-center gap-2">
        <Select.Value placeholder="请选择" />
        <Select.Icon>
          <RxChevronDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={"rounded z-20 " + (className ?? "")}>
          <Select.Viewport className="p-2">
            {items.map((x) => (
              <Select.Item
                value={x}
                key={x}
                className="p-1 hover:bg-muted rounded cursor-pointer outline-none"
              >
                <Select.ItemText>{x}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
