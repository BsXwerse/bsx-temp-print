import { Link, useLocation } from "react-router-dom";
import { leftLinks } from "@/config/route";
import classnames from "classnames";
import { Root as Separator } from "@radix-ui/react-separator";

export default function LeftBar() {
  const location = useLocation();
  return (
    <div className="space-y-5 text-muted-foreground text-lg hidden md:block font-semibold sticky top-0 h-full shrink-0 py-14">
      <Separator className="bg-muted-foreground max-w-36 h-[1.5px]" />
      {leftLinks.map((x) => (
        <Link
          to={x.href}
          key={x.href}
          className={classnames(
            "flex items-center gap-3 hover:text-foreground transition-colors",
            {
              ["text-foreground"]: location.pathname === x.href,
            },
          )}
        >
          {x.icon}
          {x.name}
        </Link>
      ))}
    </div>
  );
}
