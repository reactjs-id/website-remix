import { CalendarCheck2, Newspaper, Users } from "lucide-react";

export const AboutGeneral = () => {
  return (
    <section className="max-w-7xl w-full px-16 text-lightGray flex flex-col gap-10 md:gap-12 md:text-3xl">
      <div className="flex flex-col gap-2">
        <h1 className="text-white font-bold text-4xl md:text-6xl">
          <img
            src="/images/logos/reactjsid.svg"
            alt="React JS ID"
            className="w-16 h-9 object-contain object-left"
          />
          Tentang Kami
        </h1>
        <p>
          ReactJS ID: Komunitas Developer React dan React Native Terbesar di
          Indonesia
        </p>
      </div>
      <p>
        ReactJS ID adalah komunitas yang didedikasikan untuk developer React dan
        React Native di Indonesia. Kami bertujuan untuk menghubungkan,
        mendukung, dan menginspirasi para developer dari berbagai latar belakang
        dan tingkat pengalaman melalui berbagai kegiatan dan acara.
      </p>
      <div className="flex flex-col md:flex-row md:max-w-4xl w-full justify-between gap-8">
        <div className="flex flex-col gap-1">
          <Users className="text-white w-6 h-6 md:w-12 md:h-12" />
          <p className="font-medium text-xl md:text-4xl text-white">100.000+</p>
          <p>Member telegram</p>
        </div>
        <div className="md:w-[1px] h-[1px] w-full md:h-full bg-x-blue-700" />
        <div className="flex flex-col gap-1">
          <CalendarCheck2 className="w-6 h-6 md:w-12 md:h-12 text-white" />
          <p className="font-medium text-xl md:text-4xl text-white">
            29 Events
          </p>
          <p>Acara diselenggarakan</p>
        </div>
        <div className="md:w-[1px] h-[1px] w-full md:h-full bg-x-blue-700" />
        <div className="flex flex-col gap-1">
          <Newspaper className="w-6 h-6 md:w-12 md:h-12 text-white" />
          <p className="font-medium text-xl md:text-4xl text-white">
            362 Articles
          </p>
          <p>Artikel tertulis</p>
        </div>
      </div>
    </section>
  );
};
