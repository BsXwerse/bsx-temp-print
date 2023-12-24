import Pagination from "@/components/pagination";
import TempCard from "@/components/temp-card";
import { getTempWithCover } from "@/utils/localStorage";
import { useState } from "react";
import { Temp } from "@/types/temp";
import useStore from "@/store";
import TempAddButton from "@/components/temp-add-button";

const PAGE_SIZE = 9;

export default function TempList() {
  const ids = useStore((state) => state.tempIds);
  const pageCount = Math.ceil(Number(ids.length) / PAGE_SIZE);
  const [pageNum, setPageNum] = useState(0);
  const data: Temp[] = getTempWithCover(ids, pageNum, PAGE_SIZE);

  return (
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
  );
}
