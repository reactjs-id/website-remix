import { Link } from "@remix-run/react";
import { AlignRight } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Navigation, navigationItems } from "./navigation";
import BackgroundGradient from "../background-gradient";

export function SiteNavigation() {
  return (
    <div className="flex justify-center items-center">
      <BackgroundGradient />
      <nav className="container !p-4 !lg:p-8 items-center">
        <Link to="/" className="text-xl font-bold">
          ReactJS ID
        </Link>
        <div className="hidden lg:block">
          <Navigation className="gap-[75px]" />
        </div>
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignRight />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-brand-black-aswad text-slate-50"
            >
              <ul className={`flex flex-col gap-4 text-slate-400`}>
                {navigationItems.map((navItem) => (
                  <li key={navItem.path}>
                    <Link to={navItem.path}>
                      <SheetTrigger>{navItem.text}</SheetTrigger>
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
