import dayjs from "dayjs";
import { Search } from "lucide-react";
import { EventItem } from "~/components/event-item";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { eventsPrevData } from "~/data/events";

export const EventPrevious = () => {
  return (
    <section className="max-w-7xl w-full px-16 text-brand-gray-lavender flex flex-col gap-6 md:text-3xl items-center">
      <h2 className="font-semibold text-2xl md:text-4xl text-brand-gray-lavender self-start">
        Acara yang lalu
      </h2>
      <div className="flex flex-col sm:flex-row w-full gap-4">
        <div className="flex items-center -ml-[22px] flex-1">
          <Search className="relative left-8 top-2 transform -translate-y-1/2 text-brand-gray-cool h-4" />
          <Input
            placeholder="Cari"
            className="text-brand-gray-cool bg-brand-black-granite/10 pl-9 border-brand-gray-cool flex-1 placeholder:text-brand-gray-cool"
          />
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-[180px] text-brand-gray-cool bg-brand-black-granite/10 border-brand-gray-cool placeholder:text-brand-gray-cool justify-start gap-4">
            <SelectValue placeholder="Filter Topik" />
          </SelectTrigger>
          <SelectContent className="text-brand-gray-cool bg-brand-black-mamba border-brand-gray-cool">
            <SelectGroup>
              {["Framework", "Testing", "Performance"].map((topic) => (
                <SelectItem
                  key={topic}
                  value={topic}
                  className="focus:bg-brand-gray-lavender focus:text-brand-black-mamba"
                >
                  {topic}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ul className="w-full flex flex-col gap-6">
        {eventsPrevData.map(
          (
            { title, city, date, location, image, people, peopleInterested },
            index,
            data,
          ) => {
            const isFirstEventYear =
              index === 0 ||
              dayjs(date).format("YYYY") !==
                dayjs(data[index - 1].date).format("YYYY");
            return (
              <li
                key={`${title}-${index}`}
                className="flex flex-col w-full gap-2"
              >
                {isFirstEventYear && (
                  <h3 className="font-medium text-xl md:text-3xl md:py-2">
                    {dayjs(date).format("YYYY")}
                  </h3>
                )}
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
            );
          },
        )}
      </ul>
    </section>
  );
};
