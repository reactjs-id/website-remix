import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { type Organizer, organizerData } from "~/data/about";

export const AboutOrganizer = () => {
  return (
    <section className="max-w-7xl w-full px-4 lg:px-16 text-brand-gray-lavender flex flex-col gap-10 md:gap-12 md:text-3xl">
      <h2 className="font-semibold text-2xl md:text-4xl text-white leading-normal lg:leading-11">
        Pengurus
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 leading-normal lg:leading-10">
        {organizerData.map(({ fullName, role, image }, index) => (
          <li key={fullName + index}>
            <OrganizerCard
              fullName={fullName}
              image={
                image ||
                `https://api.dicebear.com/9.x/initials/svg?seed=${fullName}`
              }
              role={role}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

const OrganizerCard = ({ fullName, image, role }: Organizer) => {
  return (
    <article className="flex flex-row items-center gap-4">
      <Avatar className="size-12 lg:size-16">
        <AvatarImage src={image} alt={`${fullName}'s profile`} />
        <AvatarFallback>{fullName[0].toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-[2px] font-medium md:text-2xl">
        <h3>{fullName}</h3>
        <p className="text-brand-gray-lavender/40">{role}</p>
      </div>
    </article>
  );
};
