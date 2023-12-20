import Pagination from "@/components/pagination";
import TempCard from "@/components/temp-card";
import { getTempCover } from "@/utils/localStorage";
// import { getTestData } from "@/utils/testdata";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const PAGE_SIZE = 9;

export default function TempList() {
  const pageCount = Math.ceil(
    Number(localStorage.getItem("temp-count")) / PAGE_SIZE,
  );
  const [pageNum, setPageNum] = useState(0);
  const data = getTempCover(pageNum, PAGE_SIZE);

  return (
    <>
      {/* <button onClick={getTestData}>============</button> */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-7 space-y-4">
        {data.map((x, index) => (
          <TempCard key={index} url={x} />
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
