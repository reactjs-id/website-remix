import { Link } from "@remix-run/react";

export function SiteNavigation() {
  const navigationItems = [
    { path: "/about", text: "Tentang Kami" },
    { path: "/events", text: "Acara" },
    { path: "/chapters", text: "Chapters" },
    { path: "/resources", text: "Materi" },
    { path: "/merchandise", text: "Merchandise" },
    { path: "/blog", text: "Blog" },
  ];

  return (
    <div className="flex justify-center items-center">
      <nav className="flex justify-between p-10 w-full max-w-7xl">
        <div>
          <Link to="/">
            <span className="text-xl font-bold">ReactJS ID</span>
          </Link>
        </div>
        <ul className="flex gap-10 text-slate-400">
          {navigationItems.map((navItem) => (
            <li key={navItem.path}>
              <Link to={navItem.path}>{navItem.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
