import TempCard from "@/components/temp-card";
import { getTestData } from "@/utils/testdata";

const data = getTestData();

export default function TempList() {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-7 space-y-4">
      {data.map((x) => (
        <TempCard key={x} url={x} />
      ))}
    </div>
  );
}
