import { CalendarFold } from "lucide-react";

type EventItemProps = {
  title: string;
  date: string;
  description: string;
  imgUrl: string;
};

function EventItem({ title, date, description, imgUrl }: EventItemProps) {
  return (
    <div className="flex gap-10 items-center text-white">
      <div className="rounded-xl overflow-hidden lg:min-w-[340px]">
        <img src={imgUrl} alt={`photo-${title}`} />
      </div>
      <div className="max-w-[700px]">
        <h2 className="text-4xl truncate">{title}</h2>
        <span className="flex gap-2 items-center text-[#8E96A5] text-md mt-3">
          <CalendarFold size={21} />
          <p>{date}</p>
        </span>
        <p className="text-[#C7CBD1] mt-8 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}

export const fakerEvents = [
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

export default EventItem;
