import Pagination from "@/components/pagination";
import TempCard from "@/components/temp-card";
import { useState } from "react";
import TempAddButton from "@/components/temp-add-button";
import { useLiveQuery } from "dexie-react-hooks";
import { countTemps, getTempWithCover } from "@/utils/indexedDB";
import { Temp } from "@/types/temp";
import Null from "@/assets/images/null.png";

const PAGE_SIZE = 9;

export default function TempList() {
  const count = useLiveQuery(() => countTemps(), [], 0);
  const pageCount = Math.ceil(count / PAGE_SIZE);
  const [pageNum, setPageNum] = useState(0);
  const data = useLiveQuery(
    () => getTempWithCover(pageNum, PAGE_SIZE),
    [pageNum],
    [] as Temp[],
  );

  return data.length ? (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-7 space-y-4">
        {data.map((x) => (
          <TempCard key={x.id} temp={x} />
        ))}
      </div>
      <Pagination
        pageCount={pageCount}
        onPageChange={({ selected }) => setPageNum(selected)}
      />
      <TempAddButton />
    </>
  ) : (
    <>
      <img
        src={Null}
        alt="没有模板"
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <TempAddButton />
    </>
  );
}
