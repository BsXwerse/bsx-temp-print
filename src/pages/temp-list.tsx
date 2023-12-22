import Pagination from "@/components/pagination";
import TempCard from "@/components/temp-card";
import { getTempIds, getTempWithCover } from "@/utils/localStorage";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { Temp } from "@/types/temp";

const PAGE_SIZE = 9;

export default function TempList() {
  const ids = getTempIds();
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
      <button className="fixed right-10 lg:right-28 bottom-20 lg:bottom-40 p-4 rounded-full bg-violet-500 text-purple-200 hover:bg-violet-400">
        <FaPlus />
      </button>
    </>
  );
}
