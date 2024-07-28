import { MetaFunction } from "@remix-run/node";
import { AboutCommunity } from "~/components/content/about/community";
import { AboutContact } from "~/components/content/about/contact";
import { AboutGeneral } from "~/components/content/about/general";
import { AboutMission } from "~/components/content/about/mission";
import { AboutOffer } from "~/components/content/about/offer";
import { AboutOrganizer } from "~/components/content/about/organizer";
import { JoinCommunity } from "~/components/join-community";
import { Line } from "~/components/line";

export const meta: MetaFunction = () => {
  return [
    { title: "About ReactJS Indonesia - Community, Resources, & Guides" },
    {
      property: "og:title",
      content: "About ReactJS Indonesia - Community, Resources, & Guides",
    },
    {
      name: "description",
      content:
        "Welcome to ReactJS Indonesia, your go-to community for everything React. Explore resources, tutorials, and connect with fellow developers to enhance your skills.",
    },
    {
      name: "keywords",
      content:
        "ReactJS Indonesia, React community, React tutorials, learn React, JavaScript, frontend development, about react indonesia",
    },
    {
      property: "og:description",
      content:
        "Join ReactJS Indonesia, your go-to hub for all things ReactJS. Find resources, attend events, and connect with fellow developers to enhance your ReactJS knowledge.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ];
};

export default function AboutRoute() {
  return (
    <div className="flex items-center flex-col py-4 lg:py-14 gap-16">
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
      <div>
        <JoinCommunity isImageSlide />
      </div>
    </div>
  );
}
