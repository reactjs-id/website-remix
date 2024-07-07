import { Navigation } from "./navigation";

export function SiteNavigation() {
  return (
    <div className="flex justify-center items-center">
      <nav className="container">
        <div>
          <Link to="/">
            <span className="text-xl font-bold">ReactJS ID</span>
          </Link>
        </div>
        <Navigation className="gap-[75px]"/>
      </nav>
    </div>
  );
}
