import { missionData } from "~/data/about";

export const AboutMission = () => {
  return (
    <section className="max-w-7xl w-full px-4 lg:px-16 text-brand-gray-lavender flex flex-col gap-10 md:gap-12 md:text-3xl">
      <h2 className="font-semibold text-2xl md:text-4xl text-white leading-normal lg:leading-11">
        Misi Kami
      </h2>
      <ol className="flex flex-col gap-10 md:gap-12 leading-normal lg:leading-10">
        {missionData.map(({ title, description }, index) => (
          <li
            key={title + index}
            className="md:text-2xl flex flex-col gap-10 md:gap-12"
          >
            <h3 className="text-brand-gray-lavender/40">
              Misi #{index + 1}
              <br />
              <span className="text-xl md:text-3xl text-white font-medium">
                {title}
              </span>
            </h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
