import dayjs from "dayjs";
import { CalendarFold } from "lucide-react";
import { EventType } from "~/types/events";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type EventHomeItemProps = {
  title: string;
  date: string;
  description: string;
  imgUrl: string;
};

function EventHomeItem({
  title,
  date,
  description,
  imgUrl,
}: EventHomeItemProps) {
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
          <div className="text-xs lg:text-xl flex items-center gap-1.5 text-brand-gray-cool">
            <CalendarFold size={21} />
            <p>{date}</p>
          </div>
        </div>
        <p className="text-sm lg:text-xl text-brand-gray-lavender line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

function EventItem({
  location,
  city,
  date,
  title,
  people,
  peopleInterested,
  image,
}: EventType) {
  return (
    <article className="flex items-start gap-4 md:gap-10 flex-col-reverse md:flex-row py-4 md:p-6 rounded-2xl bg-brand-black-granite/10">
      <div className="flex flex-col gap-1 lg:gap-3 w-full max-w-3xl justify-center">
        <div className="text-xs lg:text-xl flex flex-col text-brand-gray-cool">
          <p>
            {location}, {city}
          </p>
          <time>{dayjs(date).format("DD MMMM YYYY, HH:mm")}</time>
        </div>
        <h3 className="text-lg lg:text-4xl font-medium text-white">{title}</h3>
        <div className="flex flex-row flex-wrap gap-2">
          {people?.map(({ image, name, role }) => (
            <div className="flex flex-row items-center gap-2" key={name}>
              <Avatar className="size-8 lg:size-10">
                <AvatarImage src={image} alt={`${name}'s profile`} />
                <AvatarFallback>{name[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col font-medium text-sm md:text-base">
                <h3>{name}</h3>
                <p className="text-brand-gray-lavender/40">{role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex flex-row">
            {[...Array(peopleInterested > 8 ? 8 : peopleInterested).keys()].map(
              (_, index) => (
                <div
                  className={`bg-brand-gray-cool w-8 h-8 rounded-full border-4 border-brand-black-mamba ${index !== 0 ? "-ml-3" : ""}`}
                  key={index}
                />
              ),
            )}
          </div>
          <p className="pl-1 md:pl-2 lg:pl-4 text-xs lg:text-xl">
            {peopleInterested > 20 ? `${peopleInterested}+` : peopleInterested}{" "}
            orang tertarik dengan event ini
          </p>
        </div>
      </div>
      <img
        src={image}
        alt={title}
        className="aspect-video w-full md:w-60 lg:w-80 xl:w-96 rounded-2xl object-cover drop-shadow-[0_4px_20px_0_rgba(17,29,44,0.48)]"
      />
    </article>
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

export { EventHomeItem, EventItem, fakerEvents };
