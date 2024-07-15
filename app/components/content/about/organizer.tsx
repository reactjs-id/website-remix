import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { organizerData } from "~/data/about";
import type { OrganizerType } from "~/types/about";

export const AboutOrganizer = () => {
  return (
    <section className="max-w-7xl w-full px-16 text-[#C7CBD1] flex flex-col gap-10 md:gap-12 md:text-3xl">
      <h2 className="font-semibold text-2xl md:text-4xl text-white">
        Pengurus
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

const OrganizerCard = ({ fullName, image, role }: OrganizerType) => {
  return (
    <article className="flex flex-row items-center gap-4">
      <Avatar className="w-16 h-16">
        <AvatarImage src={image} alt={`${fullName}'s profile`} />
        <AvatarFallback>{fullName[0].toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-[2px] font-medium md:text-2xl">
        <h3>{fullName}</h3>
        <p className="text-[#C7CBD1]/40">{role}</p>
      </div>
    </article>
  );
};
