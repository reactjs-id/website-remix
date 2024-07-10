import clsx from "clsx";
import { Link } from "@remix-run/react";

import Grid from "./Grid";
import communityPlatforms from "~/data/community-platforms";

const joinCommunityPhotos = Array.from({ length: 12 }).map((_, index) => ({
  slug: `hero-photo-${index}`,
  text: `Photo ${index}`,
  url: "https://picsum.photos/seed/picsum/200/200",
}));

const cssContainer = "flex gap-4 xs:flex-col lg:flex-row -mx-12";

export function JoinCommunity() {
  return (
    <>
      <div className="xs:text-xl lg:text-6xl font-semibold text-center xs:mb-5 lg:mb-10 xs:mt-16 lg:mt-32">
        Gabung reactjs.id
      </div>
      <div className="xs:text-base lg:text-2xl text-[#C7CBD1] font-medium text-center xs:mb-10 lg:mb-20">
        Jadilah bagian dari komunitas developer React dan React Native terbesar
        di Indonesia di ujung jarimu. <br />
        Temukan kami di platform social media favorit-mu!
      </div>
      <div className={cssContainer}>
        <Grid type="3x2" photos={joinCommunityPhotos.slice(0, 3)} />
        <Grid type="2x2" photos={joinCommunityPhotos.slice(3, 6)} />
        <Grid type="3x2" photos={joinCommunityPhotos.slice(6, 9)} />
        <Grid type="2x2" photos={joinCommunityPhotos.slice(9, 12)} />
      </div>
      <div className="relative">
        <div className={clsx(cssContainer, "mt-4")}>
          {joinCommunityPhotos.slice(0, 7).map((photo, index) => (
            <div
              key={photo.text}
              className={clsx(
                "aspect-square max-h-36",
                index % 3 === 0 ? "basis-1/4" : "basis-1/2",
              )}
            >
              <img
                src={photo.url}
                alt=""
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div
          className="w-full h-10 absolute bottom-0"
          style={{
            background: "linear-gradient(180deg, transparent 0%, #15181D 100%)",
          }}
        ></div>
      </div>
      <div className="max-w-6xl mx-auto xs:pb-12 lg:pb-32 flex justify-center flex-col text-center font-medium text-[#C7CBD1] sm:text-base lg:text-2xl">
        <div className="my-11 mt-24">Gabung di platform kami</div>
        <ul className="grid grid-cols-2 gap-5 xs:px-4 lg:px-24">
          {communityPlatforms.map((platform) => (
            <li
              key={platform.link}
              className="rounded-2xl bg-neutral-800 xs:px-4 lg:px-5 xs:py-4 lg:py-6 border border-neutral-500"
            >
              <Link to={platform.link} target="_blank" rel="noreferrer">
                <div className="flex gap-5 items-center xs:flex-col lg:flex-row">
                  <img
                    className="w-11 h-11"
                    src={`https://cdn.simpleicons.org/${platform.icon.slug}/white`}
                    alt=""
                  />
                  {platform.text}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
