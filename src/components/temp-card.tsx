import * as Popover from "@radix-ui/react-popover";

export default function TempCard({ url }: { url: string }) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className="no-break text-center relative hover:scale-105 transition-transform shadow-lg">
          <div className="rounded absolute w-full h-full transition-colors hover:bg-white/10 cursor-pointer" />
          <img src={url} alt="test" className="w-full rounded" />
          name
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content asChild sideOffset={-100}>
          <div className="bg-slate-700 w-32 h-32 animate-popover outline-none" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
