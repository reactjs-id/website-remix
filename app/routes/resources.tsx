import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Resource ReactJS Indonesia - Tutorials, Guides, and Community",
    },
    {
      property: "og:title",
      content: "Resource ReactJS Indonesia - Tutorials, Guides, and Community",
    },
    {
      name: "description",
      content:
        "Discover comprehensive tutorials, guides, and community resources on ReactJS for developers in Indonesia. Stay updated with the latest trends and best practices.",
    },
    {
      name: "keywords",
      content:
        "ReactJS, React tutorials, React guides, Indonesian React community, JavaScript frameworks, frontend development, web development, coding resources, programming tutorials",
    },
    {
      property: "og:description",
      content:
        "Explore a wealth of resources on ReactJS, including tutorials, guides, and community discussions tailored for Indonesian developers.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ];
};

export default function ResourcesRoute() {
  return (
    <div>
      <h1>Resources</h1>
    </div>
  );
}
