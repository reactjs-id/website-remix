import { Link } from "@remix-run/react";
import { cn } from "~/utils/cn";

export const navigationItems = [
  { path: "/about", text: "Tentang Kami" },
  { path: "/blog", text: "Blog" },
  { path: "/events", text: "Acara" },
  { path: "/chapters", text: "Chapters" },
  { path: "/resources", text: "Materi" },
  { path: "/merchandise", text: "Merchandise" },
];

export function Navigation({ className = "" }: { className: string }) {
  return (
    <ul className={cn("flex text-slate-400", className)}>
      {navigationItems.map((navItem) => (
        <li key={navItem.path}>
          <Link to={navItem.path}>{navItem.text}</Link>
        </li>
      ))}
    </ul>
  );
}
