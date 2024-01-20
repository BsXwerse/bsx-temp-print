import useStore from "@/store";

export default function Sizer() {
  const cur = useStore((state) =>
    state.widget.find((x) => x.id === state.active),
  );

  return (
    cur && (
      <>
        <div
          className="absolute w-[4px] h-[4px] bg-sky-500"
          style={{
            left: cur.left - 2 + cur.width / 2 + "px",
            top: cur.top - 3 + "px",
          }}
        />
        <div
          className="absolute w-[4px] h-[4px] bg-sky-500"
          style={{
            left: cur.left - 2 + cur.width / 2 + "px",
            top: cur.top - 2 + cur.height + "px",
          }}
        />
        <div
          className="absolute w-[4px] h-[4px] bg-sky-500"
          style={{
            left: cur.left - 3 + "px",
            top: cur.top - 2 + cur.height / 2 + "px",
          }}
        />
        <div
          className="absolute w-[4px] h-[4px] bg-sky-500"
          style={{
            left: cur.left - 2 + cur.width + "px",
            top: cur.top - 2 + cur.height / 2 + "px",
          }}
        />
      </>
    )
  );
}

export function SizerShow({ show }: { show: boolean }) {
  return (
    show && (
      <>
        <div className="w-0 h-0 sizer-left sizer-right" />
        <div className="w-0 h-0 sizer-top sizer-bottom" />
      </>
    )
  );
}
