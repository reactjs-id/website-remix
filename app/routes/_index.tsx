import type { MetaFunction } from "@remix-run/node";

import Collaboration from "~/components/collaboration";
import iconRocket from "~/assets/icon-rocket.svg";
import heroPhotos from "~/data/hero-photos";
import { Spacer } from "~/components/spacer";
import Networking from "~/components/home/networking";
import { JoinCommunity } from "~/components/join-community";

export const meta: MetaFunction = () => {
  return [
    { title: "ReactJS Indonesia" },
    {
      name: "description",
      content:
        "Komunitas developer React dan React Native terbesar di Indonesia",
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
      <section className="w-full overflow-x-scroll overflow-y-hidden xs:mb-20 lg:mb-32">
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
