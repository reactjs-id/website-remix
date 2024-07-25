import { CalendarCheck2, Newspaper, Users } from "lucide-react";

export const AboutGeneral = () => {
  return (
    <section className="max-w-7xl w-full px-4 lg:px-16 text-brand-gray-lavender flex flex-col gap-10 lg:gap-16 lg:text-3xl mt-10 lg:mt-28">
      <div className="flex flex-col gap-2">
        <img
          src="/images/logos/reactjsid.svg"
          alt="React JS ID"
          className="w-16 h-9 object-contain object-left"
        />
        <h1 className="text-white font-bold text-4xl lg:text-6xl">
          Tentang Kami
        </h1>
        <p className="leading-normal lg:leading-11">
          ReactJS ID: Komunitas Developer React dan React Native Terbesar di
          Indonesia
        </p>
      </div>
      <p className="text-lg lg:text-2xl leading-normal lg:leading-10">
        ReactJS ID adalah komunitas yang didedikasikan untuk developer React dan
        React Native di Indonesia. Kami bertujuan untuk menghubungkan,
        mendukung, dan menginspirasi para developer dari berbagai latar belakang
        dan tingkat pengalaman melalui berbagai kegiatan dan acara.
      </p>
      <div className="flex flex-col lg:flex-row lg:max-w-4xl w-full justify-between gap-8">
        <div className="flex flex-col gap-1">
          <Users className="text-white w-6 h-6 lg:w-12 lg:h-12" />
          <p className="font-medium text-xl lg:text-4xl text-white leading-normal lg:leading-11">
            100.000+
          </p>
          <p className="leading-normal lg:leading-10">Member telegram</p>
        </div>
        <div className="md:w-[1px] h-[1px] w-full md:h-[inherit] bg-brand-blue-berry" />
        <div className="flex flex-col gap-1">
          <CalendarCheck2 className="w-6 h-6 lg:w-12 lg:h-12 text-white" />
          <p className="font-medium text-xl lg:text-4xl text-white leading-normal lg:leading-11">
            29 Events
          </p>
          <p className="leading-normal lg:leading-10">Acara diselenggarakan</p>
        </div>
        <div className="md:w-[1px] h-[1px] w-full md:h-[inherit] bg-brand-blue-berry" />
        <div className="flex flex-col gap-1">
          <Newspaper className="w-6 h-6 lg:w-12 lg:h-12 text-white" />
          <p className="font-medium text-xl lg:text-4xl text-white leading-normal lg:leading-11">
            362 Articles
          </p>
          <p className="leading-normal lg:leading-10">Artikel tertulis</p>
        </div>
      </div>
    </section>
  );
};
