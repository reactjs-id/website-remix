import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Chapters ReactJS Indonesia | Community and Learning" },
    {
      property: "og:title",
      content: "Chapters ReactJS Indonesia | Community and Learning",
    },
    {
      name: "description",
      content:
        "Join the Chapters ReactJS Indonesia community for the best ReactJS resources, tutorials, and events. Connect with fellow developers, learn new skills, and stay up-to-date with the latest in ReactJS.",
    },
    {
      name: "keywords",
      content:
        "ReactJS, React, JavaScript, Indonesia, web development, frontend development, ReactJS community, ReactJS tutorials, ReactJS events, coding, programming, developer resources",
    },
    {
      property: "og:description",
      content:
        "Join the Chapters ReactJS Indonesia community for the best ReactJS resources, tutorials, and events. Connect with fellow developers, learn new skills, and stay up-to-date with the latest in ReactJS.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ];
};

export default function ChaptersRoute() {
  return (
    <div>
      <h1>Chapters</h1>
    </div>
  );
}
