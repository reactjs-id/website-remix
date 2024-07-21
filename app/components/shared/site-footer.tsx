import { siFacebook, siGithub, siTelegram, siX } from "simple-icons";
import { Navigation } from "./navigation";

export function SiteFooter() {
  return (
    <footer className="container flex-col mx-auto gap-14 flex-none">
      <div className="flex items-center justify-between">
        <img
          className="w-[67.44px] h-[31.57px]"
          src="./images/logos/reactjsid.svg"
          alt="reactjsid-logo"
        />
        <Navigation className="gap-16" />
        <div className="flex items-center gap-8">
          {[siFacebook, siGithub, siTelegram, siX].map(({ title, path }) => (
            <svg
              key={title}
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width={25}
              height={25}
            >
              <title>{title}</title>
              <path d={path} />
            </svg>
          ))}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="max-w-[974px] space-y-2">
          <h3 className="text-xl font-bold">ReactJS ID</h3>
          <p className="text-balance">
            ReactJS Indonesia adalah komunitas developer React dan React Native
            terbesar di Indonesia, bertujuan untuk menghubungkan dan mendukung
            para developer.
          </p>
        </div>
        <span className="text-sm">{"\u00A9"}2024 reactjs.id</span>
      </div>
    </footer>
  );
}
