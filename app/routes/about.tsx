import { AboutGeneral } from "~/components/content/about/general";
import { AboutPengurus } from "~/components/content/about/pengurus";

export default function AboutRoute() {
  return (
    <div className="flex items-center flex-col py-14 gap-16">
      <AboutGeneral />
      <AboutPengurus />
    </div>
  );
}
