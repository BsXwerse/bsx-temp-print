import useStore from "@/store";
import Text from "./widgets/text";
import { memo } from "react";
import { elementCache } from "@/utils/cache";

const Widgets = memo(function Widgets() {
  const data = useStore((state) => state.widget);
  elementCache.clear();
  console.log(data);
  return (
    <>
      {data.map((x) => (
        <Text key={x.id} widget={x} />
      ))}
    </>
  );
});

export default Widgets;
