import { CalendarFold } from "lucide-react";

type EventItemProps = {
  title: string;
  date: string;
  description: string;
  imgUrl: string;
};

function EventItem({ title, date, description, imgUrl }: EventItemProps) {
  return (
    <div className="flex justify-center gap-x-10">
      <img
        src={imgUrl}
        alt="ReactJS Indonesia event"
        className="h-[193px] rounded-2xl object-cover drop-shadow-[0_4px_20px_0_rgba(17,29,44,0.48)]"
        width={342}
      />
      <div className="flex flex-col gap-8 w-full max-w-2xl justify-center">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl font-medium text-white truncate">{title}</h3>
          <div className="text-xl flex items-center gap-1.5 text-[#8E96A5]">
            <CalendarFold size={21} />
            <p>{date}</p>
          </div>
        </div>
        <p className="text-xl text-[#C7CBD1] line-clamp-2">{description}</p>
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
