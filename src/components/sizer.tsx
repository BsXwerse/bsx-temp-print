export function Sizer({ show }: { show: boolean }) {
  return (
    show && (
      <>
        <div
          id="top-sizer"
          className="absolute w-[6px] h-[6px] bg-sky-500 -translate-x-1/2 -translate-y-[70%] left-1/2 top-0 cursor-ns-resize z-10"
        />
        <div
          id="bottom-sizer"
          className="absolute w-[6px] h-[6px] bg-sky-500 -translate-x-1/2 translate-y-[70%] left-1/2 bottom-0 cursor-ns-resize z-10"
        />
        <div
          id="left-sizer"
          className="absolute w-[6px] h-[6px] bg-sky-500 -translate-x-[70%] -translate-y-1/2 top-1/2 left-0 cursor-ew-resize z-10"
        />
        <div
          id="right-sizer"
          className="absolute w-[6px] h-[6px] bg-sky-500 translate-x-[70%] -translate-y-1/2 top-1/2 right-0 cursor-ew-resize z-10"
        />
      </>
    )
  );
}
