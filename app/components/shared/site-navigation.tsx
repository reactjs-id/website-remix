import { Link } from "@remix-run/react";
import { Navigation } from "./navigation";

export function SiteNavigation() {
  return (
    <div className="flex justify-center items-center">
      <nav className="container">
        <Link to="/">
          <span className="text-xl font-bold">ReactJS ID</span>
        </Link>
        <Navigation className="gap-[75px]" />
      </nav>
    </div>
  );
}
