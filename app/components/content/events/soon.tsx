import dayjs from "dayjs";
import { EventItem } from "~/components/event-item";
import { eventsSoonData } from "~/data/events";

export const EventSoon = () => {
  return (
    <section className="max-w-7xl w-full px-16 text-brand-gray-lavender flex flex-col gap-6 md:text-3xl items-center">
      <h2 className="font-semibold text-2xl md:text-4xl text-brand-gray-lavender self-start">
        Acara mendatang
      </h2>
      <ul className="w-full flex flex-col gap-6">
        {eventsSoonData.map(
          (
            { title, city, date, location, image, people, peopleInterested },
            index,
          ) => (
            <li
              key={`${title}-${index}`}
              className="flex flex-col w-full gap-2"
            >
              <h3 className="font-medium text-xl md:text-3xl md:py-2">
                {city}, {dayjs(date).format("DD MMMM")}
              </h3>
              <EventItem
                city={city}
                date={date}
                image={image}
                location={location}
                people={people}
                peopleInterested={peopleInterested}
                title={title}
              />
            </li>
          ),
        )}
      </ul>
    </section>
  );
};
