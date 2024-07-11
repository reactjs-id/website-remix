import type { MetaFunction } from "@remix-run/node";

import { MoveRight } from "lucide-react";
import heroPhotos from "~/data/hero-photos";
import { JoinCommunity } from "~/components/join-community";

import EventItem, { fakerEvents } from "~/components/event-item";
import { Button } from "~/components/ui/button";

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

      <section className="container flex-col !px-20 mt-[180px]">
        <div className="flex items-center bg-transparent border-none text-white relative">
          <div className="space-y-10">
            <h2 className="flex gap-3 text-6xl font-bold items-end leading-[52px]">
              Networking
              <span className="text-2xl font-normal leading-6">dengan</span>
              <img
                className="w-[44px] h-[23px]"
                src="./images/logos/reactjsid.svg"
                alt="reactjsid-logo"
              />
            </h2>
            <p className="max-w-[650px] text-balance text-2xl leading-8">
              Di reactjs.id, Anda akan bertemu dengan para profesional dari
              berbagai latar belakang dan tingkat pengalaman
            </p>
          </div>
          <img
            className="absolute -right-16 h-[230px]"
            src="./images/events-category.svg"
            alt="event-category-image"
          />
        </div>
        <div className="my-20 flex flex-col gap-10 items">
          {fakerEvents.map((item, index) => (
            <EventItem key={index} {...item} />
          ))}
        </div>
        <div>
          <Button className="bg-[#1B212A] border border-[#2E3137] justify-start text-center px-[37px] !py-[28px] rounded-2xl">
            <span className="text-xl">Lihat semua acara</span>
            <MoveRight className="ml-2" />
          </Button>
        </div>
      </section>

      <section>
        <JoinCommunity />
      </section>
    </>
  );
}
