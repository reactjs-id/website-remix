import type { MetaFunction } from "@remix-run/node";

import Collaboration from "~/components/collaboration";
import iconRocket from "~/assets/icon-rocket.svg";
import heroPhotos from "~/data/hero-photos";
import { Spacer } from "~/components/spacer";
import Networking from "~/components/home/networking";
import { JoinCommunity } from "~/components/join-community";

export const meta: MetaFunction = () => {
  return [
    { title: "ReactJS Indonesia - Community of React Developers" },
    {
      property: "og:title",
      content: "ReactJS Indonesia - Community of React Developers",
    },
    {
      name: "description",
      content:
        "Join ReactJS Indonesia, a vibrant community of developers passionate about learning and sharing their knowledge on React. Find resources, tutorials, events, and connect with fellow React enthusiasts.",
    },
    {
      name: "keywords",
      content:
        "ReactJS, Indonesia, React community, JavaScript, web development, programming tutorials, React events, React resources",
    },
    {
      property: "og:description",
      content:
        "ReactJS Indonesia is a thriving community where developers can share their knowledge, find resources, and participate in events focused on React development.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ];
};

export default function IndexRoute() {
  return (
    <>
      <section className="xs:pb-12 xs:pt-14 lg:pb-24 lg:pt-28 flex flex-col items-center gap-8">
        <img
          src="./images/logos/reactjsid.svg"
          alt=""
          style={{ width: 107, height: 55 }}
        />
        <h1 className="xs:text-4xl lg:text-8xl font-bold text-center text-balance">
          <span>Komunitas Developer</span>
          <br />
          <span>ReactJS Indonesia</span>
        </h1>
        <p className="xs:text-sm sm:text-2xl text-slate-400 text-center text-balance max-w-6xl">
          Bergabunglah dengan Komunitas Developer React dan React Native
          Indonesia! Hadiri Meetup Bulanan dan dapatkan wawasan terbaru tentang
          React dan ekosistemnya
        </p>
      </section>
      <section className="w-full overflow-x-scroll overflow-y-hidden xs:mb-20 lg:mb-32 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <ul className="flex justify-between xs:gap-2 lg:gap-8 -mx-20">
          {heroPhotos.map((photo, index) => (
            <li
              key={photo.slug}
              className={`h-auto py-3 ${
                index % 2 === 0 ? "-rotate-3" : "rotate-3"
              }`}
            >
              <img
                src={photo.url}
                alt={photo.text}
                width={400}
                height={270}
                className="bg-slate-700 rounded-3xl"
              />
            </li>
          ))}
        </ul>
      </section>

      <Spacer />
      <Networking />
      <Spacer />

      <section className="w-full max-w-6xl mx-auto text-center mt-20 lg:mt-52">
        <Collaboration />
      </section>

      <img
        src={iconRocket}
        alt="icon rocket"
        className="mx-auto size-28 lg:size-52 my-20 lg:my-52"
      />

      <section>
        <JoinCommunity />
      </section>
    </>
  );
}
