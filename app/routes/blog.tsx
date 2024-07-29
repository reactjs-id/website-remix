import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog ReactJS Indonesia - Tips, Tutorials, and News" },
    {
      property: "og:title",
      content: "Blog ReactJS Indonesia - Tips, Tutorials, and News",
    },
    {
      name: "description",
      content:
        "Stay updated with the latest tips, tutorials, and news about ReactJS in Indonesia. Learn how to build efficient and scalable React applications from experts.",
    },
    {
      name: "keywords",
      content:
        "ReactJS, React tutorials, React tips, JavaScript, Front-end development, Web development, Indonesia, ReactJS News, ReactJS blog",
    },
    {
      property: "og:description",
      content:
        "Welcome to Blog ReactJS Indonesia. We provide the latest tips, tutorials, and news on ReactJS to help you become a better developer.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ];
};

export default function BlogRoute() {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}
