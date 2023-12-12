import useWidgetStore from "@/store";
import Text from "./widgets/text";
import { memo } from "react";

const Widgets = memo(function Widgets() {
  const data = useWidgetStore((state) => state.widget);
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
