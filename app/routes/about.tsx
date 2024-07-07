import { ArticleIcon } from "~/components/icons/article-icon";
import { EventsIcon } from "~/components/icons/event-icon";
import { MemberIcon } from "~/components/icons/member-icon";

export default function About() {
  return (
    <div className="flex justify-center py-14">
      <section className="max-w-7xl w-full px-16 text-[#C7CBD1] flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-bold text-4xl">
            {/* TODO LOGO */}
            Tentang Kami
          </h1>
          <p>
            ReactJS ID: Komunitas Developer React dan React Native Terbesar di
            Indonesia
          </p>
        </div>
        <p>
          ReactJS ID adalah komunitas yang didedikasikan untuk developer React
          dan React Native di Indonesia. Kami bertujuan untuk menghubungkan,
          mendukung, dan menginspirasi para developer dari berbagai latar
          belakang dan tingkat pengalaman melalui berbagai kegiatan dan acara.
        </p>
        <div className="flex flex-col md:flex-row md:max-w-xl w-full justify-between gap-8">
          <div className="flex flex-col gap-1">
            <MemberIcon width={28} height={28} />
            <p className="font-medium text-xl text-white">100.000+</p>
            <p>Member telegram</p>
          </div>
          <div className="md:w-[1px] h-[1px] w-full md:h-full bg-[#3E4F6B]" />
          <div className="flex flex-col gap-1">
            <EventsIcon width={28} height={28} />
            <p className="font-medium text-xl text-white">29 Events</p>
            <p>Acara diselenggarakan</p>
          </div>
          <div className="md:w-[1px] h-[1px] w-full md:h-full bg-[#3E4F6B]" />
          <div className="flex flex-col gap-1">
            <ArticleIcon width={28} height={28} />
            <p className="font-medium text-xl text-white">362 Articles</p>
            <p>Artikel tertulis</p>
          </div>
        </div>
      </section>
    </div>
  );
}
