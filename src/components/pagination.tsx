import ReactPaginate from "react-paginate";

export default function Pagination({
  pageCount,
  onPageChange,
}: {
  pageCount: number;
  onPageChange: (e: { selected: number }) => void;
}) {
  return (
    <ReactPaginate
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      className="flex gap-10 md:gap-3 items-center justify-center p-10 font-semibold"
      breakLabel="..."
      breakClassName="hidden md:block"
      nextLabel="下一页 >"
      previousLabel="< 上一页"
      pageClassName="py-2 px-3 hidden md:block"
      pageLinkClassName="hover:text-muted-foreground"
      activeClassName="bg-slate-500 rounded-full text-white transition-colors duration-300"
      activeLinkClassName="hover:text-white"
      previousLinkClassName="hover:text-muted-foreground"
      nextLinkClassName="hover:text-muted-foreground"
      previousClassName="shrink-0"
      nextClassName="shrink-0"
      disabledLinkClassName="text-muted-foreground cursor-default"
    />
  );
}
