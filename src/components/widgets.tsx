import useWidgetStore from "@/store";
import Text from "./widgets/text";

export default function Widgets() {
  const data = useWidgetStore((state) => state.widget);
  console.log(data);
  return (
    <>
      {data.map((x) => (
        <Text key={x.id} widget={x} />
      ))}
    </>
  );
}
