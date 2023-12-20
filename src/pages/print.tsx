import html2canvas from "html2canvas";

export default function Print() {
  const testCanvas = () => {
    html2canvas(document.getElementById("abc") as HTMLDivElement).then(
      function (canvas) {
        document.body.appendChild(canvas);
      },
    );
  };

  return (
    <div>
      <div
        id="abc"
        className="bg-slate-700 w-52 h-60 flex items-center justify-center"
      >
        <div className=" bg-sky-800 w-28 h-32 font-semibold text-2xl">
          Hello
        </div>
      </div>
      <button onClick={testCanvas}>========</button>
    </div>
  );
}
