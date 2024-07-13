import { AboutCommunity } from "~/components/content/about/community";
import { AboutContact } from "~/components/content/about/contact";
import { AboutGeneral } from "~/components/content/about/general";
import { AboutMission } from "~/components/content/about/mission";
import { AboutOffer } from "~/components/content/about/offer";
import { AboutOrganizer } from "~/components/content/about/organizer";
import { Line } from "~/components/line";

export default function AboutRoute() {
  return (
    <div className="flex items-center flex-col py-14 gap-16">
      <AboutGeneral />
      <AboutOrganizer />
      <Line />
      <AboutMission />
      <Line />
      <AboutOffer />
      <Line />
      <AboutCommunity />
      <Line />
      <AboutContact />
    </div>
  );
}
