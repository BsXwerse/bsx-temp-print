import useStore from "@/store";
import Text from "./widgets/text";
import { memo } from "react";

const Widgets = memo(function Widgets() {
  const data = useStore((state) => state.widget);
  return (
    <>
      {data.map((x) => (
        <Text key={x.id} widget={x} />
      ))}
    </>
  );
});

export default Widgets;
