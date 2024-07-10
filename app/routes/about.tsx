import { AboutGeneral } from "~/components/content/about/general";
import { AboutOrganizer } from "~/components/content/about/organizer";

export default function AboutRoute() {
  return (
    <div className="flex items-center flex-col py-14 gap-16">
      <AboutGeneral />
      <AboutOrganizer />
    </div>
  )
}
