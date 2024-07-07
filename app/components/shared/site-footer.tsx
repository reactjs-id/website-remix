import { Navigation } from "./navigation";

export function SiteFooter() {
  return (
    <footer className="container flex-col mx-auto gap-[53px]">
      <div className="flex items-center justify-between">
        <span>Logo</span>
        <Navigation className="gap-[60px]" />
        <div className="flex items-center gap-[3.5px]">
          <span>Tele</span>
          <span>Fb</span>
          <span>X</span>
          <span>Git</span>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="max-w-[974px]">
          <h3 className="text-xl font-bold">ReactJS ID</h3>
          <p className="text-balance">
            ReactJS Indonesia adalah komunitas developer React dan React Native
            terbesar di Indonesia, bertujuan untuk menghubungkan dan mendukung para
            developer.
          </p>
        </div>
        <span className="text-sm">{'\u00A9'}2024 reactjs.id</span>
      </div>
    </footer>
  );
}
