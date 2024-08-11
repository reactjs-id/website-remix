import { siFacebook, siGithub, siTelegram, siX } from "simple-icons";

import { Navigation } from "~/components/shared/navigation";

export function SiteFooter() {
  return (
    <footer className="container flex-col mx-auto gap-14 mt-12 lg:mt-32 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="flex items-center justify-between flex-col lg:flex-row">
        <img
          className="w-[70px] h-[40px]"
          src="/images/reactjsid.svg"
          alt="reactjsid-logo"
        />

        <Navigation className="grid lg:flex grid-cols-3 gap-6 lg:gap-16 my-8 lg:my-0" />

        <div className="flex items-center gap-8">
          {[siFacebook, siGithub, siTelegram, siX].map(({ title, path }) => {
            return (
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
            );
          })}
        </div>
      </div>

      <div className="flex items-start lg:items-end justify-between flex-col lg:flex-row gap-4">
        <div className="max-w-[974px] space-y-2">
          <h3 className="text-xl font-bold">ReactJS Indonesia</h3>
          <p className="text-balance">
            Komunitas developer React dan React Native terbesar di Indonesia,
            bertujuan untuk menghubungkan dan mendukung para developer software,
            web, mobile, dan lainnya.
          </p>
        </div>

        <p className="text-sm">&copy; 2024 ReactJS Indonesia</p>
      </div>
    </footer>
  );
}
