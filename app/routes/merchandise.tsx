import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Merchandise ReactJS Indonesia - Official Store" },
    {
      property: "og:title",
      content: "Merchandise ReactJS Indonesia - Official Store",
    },
    {
      name: "description",
      content:
        "Discover exclusive ReactJS Indonesia merchandise including t-shirts, hoodies, and accessories. Show your support for the ReactJS community with our high-quality products.",
    },
    {
      name: "keywords",
      content:
        "ReactJS, ReactJS Indonesia, merchandise, ReactJS t-shirts, React community, JavaScript, programming, developer apparel, buy ReactJS merchandise",
    },
    {
      property: "og:description",
      content:
        "Explore the official merchandise store of ReactJS Indonesia! Find a variety of high-quality apparel and accessories designed for members of the ReactJS community.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ];
};

export default function MerchandiseRoute() {
  return (
    <div>
      <h1>Merchandise</h1>
    </div>
  );
}
