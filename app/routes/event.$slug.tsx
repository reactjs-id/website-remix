import { LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";

import { prisma } from "~/utils/db.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.slug) {
    throw new Error("Missing event slug");
  }
  const event = await prisma.event.findFirst({
    where: {
      slug: params.slug,
    },
  });
  if (!event) {
    throw new Response(null, {
      status: 404,
      statusText: "Event Not Found",
    });
  }
  return json({ event });
};

export default function Event() {
  const { event } = useLoaderData<typeof loader>();
  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1>{event.title}</h1>
      <h2>Deskripsi</h2>
      <img src={event.imageUrl} alt={event.title} />
      <p>{event.description}</p>
    </div>
  );
}
