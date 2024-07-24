import { MoveRight } from "lucide-react";
import { Link } from "@remix-run/react";

import indonesiaMap from "~/assets/map.png";
import { Button } from "./ui/button";

export default function Collaboration() {
  return (
    <>
      <div className="flex gap-2 justify-center items-end mb-10">
        <div className="xs:text-xl lg:text-6xl font-semibold ">Kolaborasi</div>
        <div className="xs:text-base lg:text-2xl font-medium text-lightGray">
          dengan
        </div>
        <img
          className="w-[67.44px] h-[31.57px]"
          src="./images/logos/reactjsid.svg"
          alt=""
        />
      </div>
      <div className="font-medium xs:text-base  lg:text-2xl mb-12 xs:px-2 lg:px-10 text-lightGray">
        Kami di reactjs.id menyelenggarakan event untuk developer React JS
        indonesia berbagi wawasan dan pengetahuan mengenai ekosistem Reactjs.
      </div>

      <img src={indonesiaMap} alt="" className="size-full" />
      <div className="font-medium xs:text-base lg:text-2xl text-x-blue-300">
        member telegram
      </div>
      <div className="font-medium xs:text-lg lg:text-4xl text-lightGray mb-20">
        50.000
      </div>

      <Link to="https://t.me/react_idn" target="_blank" rel="noreferrer">
        <Button className="bg-x-black-700 border border-x-black-500 justify-start text-center xs:px-4 xl:px-9 !py-[28px] rounded-2xl">
          <span className="xs:text-base lg:text-xl">Lihat daftar peserta</span>
          <MoveRight className="ml-2" />
        </Button>
      </Link>
    </>
  );
}
