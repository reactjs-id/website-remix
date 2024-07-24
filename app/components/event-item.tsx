import { CalendarFold } from "lucide-react";

type EventItemProps = {
  title: string;
  date: string;
  description: string;
  imgUrl: string;
};

function EventItem({ title, date, description, imgUrl }: EventItemProps) {
  return (
    <div className="flex items-center gap-1 lg:gap-10 flex-col lg:flex-row">
      <img
        src={imgUrl}
        alt="ReactJS Indonesia event"
        className="aspect-video w-full lg:w-80 rounded-2xl object-cover drop-shadow-[0_4px_20px_0_rgba(17,29,44,0.48)]"
      />
      <div className="flex flex-col gap-2 lg:gap-8 w-full max-w-3xl justify-center">
        <div className="flex flex-col gap-1 lg:gap-6">
          <h3 className="text-lg lg:text-4xl font-medium text-white truncate text-wrap line-clamp-2 lg:line-clamp-1">
            {title}
          </h3>
          <div className="text-xs lg:text-xl flex items-center gap-1.5 text-x-blue-200">
            <CalendarFold size={21} />
            <p>{date}</p>
          </div>
        </div>
        <p className="text-sm lg:text-xl text-lightGray line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

const fakerEvents = [
  {
    title: "Meetup IRL #24",
    date: "Kamis depan - pkl 2.00 siang",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quis. Aspernatur a ipsam dolorem molestias?",
    imgUrl: "https://picsum.photos/seed/picsum/340/190",
  },
  {
    title: "Workshop React Native: Responsive Mobile Dialog",
    date: "Rabu minggu lalu - pkl 2.00 siang",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit natus asperiores minima distinctio accusantium? Numquam eaque at deleniti? Cumque, amet.",
    imgUrl: "https://picsum.photos/seed/picsum/340/190",
  },
  {
    title: "Tech Conference 2023",
    date: "Kamis depan - pkl 2.00 siang",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nihil deleniti voluptas animi? Iste minima recusandae perferendis, esse dignissimos corrupti sequi mollitia ullam ad hic dolore facilis ab, earum quos.",
    imgUrl: "https://picsum.photos/seed/picsum/340/190",
  },
];

export { EventItem, fakerEvents };
