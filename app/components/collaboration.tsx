import { MoveRight } from "lucide-react";
import { Link } from "@remix-run/react";

import indonesiaMap from "~/assets/map.png";
import { Button } from "./ui/button";

export function Collaboration() {
  return (
    <>
      <div className="flex gap-4 justify-center items-center mb-10">
        <span className="xs:text-xl lg:text-6xl font-semibold ">
          Kolaborasi
        </span>
        <span className="xs:text-base lg:text-2xl font-medium text-brand-gray-lavender">
          dengan
        </span>
        <img
          className="w-[70px] h-[40px]"
          src="/images/logos/reactjsid.svg"
          alt="ReactJS Indonesia Logo"
        />
      </div>
      <div className="font-medium xs:text-base  lg:text-2xl mb-12 xs:px-2 lg:px-10 text-brand-gray-lavender">
        Kami di ReactJS Indonesia menyelenggarakan berbagai acara untuk para web
        developer. Berbagi wawasan dan pengetahuan mengenai ekosistem React.
      </div>

      <img src={indonesiaMap} alt="Peta Indonesia" className="size-full" />

      <div className="my-10">
        <h4 className="font-medium xs:text-lg lg:text-4xl text-brand-gray-lavender">
          13.000+
        </h4>
        <p className="font-medium xs:text-base lg:text-2xl text-brand-blue-steel">
          member grup Telegram
        </p>
      </div>

      <Link to="https://t.me/react_idn" target="_blank" rel="noreferrer">
        <Button className="bg-brand-black-washed border border-brand-black-granite justify-start text-center xs:px-4 xl:px-9 !py-[28px] rounded-2xl">
          <span className="xs:text-base lg:text-xl">Lihat grup Telegram</span>
          <MoveRight className="ml-2" />
        </Button>
      </Link>
    </>
  );
}
