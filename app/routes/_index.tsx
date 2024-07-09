import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "ReactJS Indonesia" },
    {
      name: "description",
      content:
        "Komunitas developer React dan React Native terbesar di Indonesia",
    },
  ];
};

export default function IndexRoute() {
  const heroPhotos = [
    { slug: "hero-photo-1", text: "Photo 1", url: "" },
    { slug: "hero-photo-2", text: "Photo 2", url: "" },
    { slug: "hero-photo-3", text: "Photo 3", url: "" },
    { slug: "hero-photo-4", text: "Photo 4", url: "" },
    { slug: "hero-photo-5", text: "Photo 5", url: "" },
  ];

  return (
    <div>
      <section className="py-20 flex flex-col items-center gap-8">
        <h1 className="text-8xl font-bold text-center text-balance">
          <span>Komunitas Developer</span>
          <br />
          <span>ReactJS Indonesia</span>
        </h1>
        <p className="text-2xl text-slate-400 text-center text-balance max-w-6xl">
          Bergabunglah dengan Komunitas Developer React dan React Native
          Indonesia! Hadiri Meetup Bulanan dan dapatkan wawasan terbaru tentang
          React dan ekosistemnya
        </p>
      </section>

      <section>
        <ul className="flex gap-5">
          {heroPhotos.map((heroPhoto) => (
            <li key={heroPhoto.slug}>
              <img
                src={heroPhoto.url}
                alt={heroPhoto.text}
                width={400}
                height={270}
                className="bg-slate-700 rounded-3xl"
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
