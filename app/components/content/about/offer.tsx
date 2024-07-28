import { offerData } from "~/data/about";

export const AboutOffer = () => {
  return (
    <section className="max-w-7xl w-full px-4 lg:px-16 text-brand-gray-lavender flex flex-col gap-10 md:gap-12 md:text-3xl">
      <h2 className="font-semibold text-2xl md:text-4xl text-white">
        Apa yang Kami Tawarkan
      </h2>
      <ul className="flex flex-col gap-10 md:gap-12">
        {offerData.map(({ title, description }) => (
          <li key={title} className="md:text-2xl list-disc ml-4">
            <p>
              <strong className="font-bold">{title}</strong>: {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
