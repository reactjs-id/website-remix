import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { pengurusData } from "~/data/about";
import type { PengurusType } from "~/types/about";

export const AboutPengurus = () => {
  return (
    <section className="max-w-7xl w-full px-16 text-[#C7CBD1] flex flex-col gap-10 md:gap-12 md:text-3xl">
      <h2 className="font-semibold text-4xl text-white">Pengurus</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pengurusData.map(({ fullName, role, image }, index) => (
          <li key={fullName + index}>
            <PengurusCard fullName={fullName} image={image} role={role} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const PengurusCard = ({ fullName, image, role }: PengurusType) => {
  return (
    <article className="flex flex-row items-center gap-4">
      <Avatar className="w-16 h-16">
        <AvatarImage src={image} alt={`${fullName}'s profile`} />
        <AvatarFallback>{fullName[0].toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-[2px] font-medium text-2xl">
        <h3>{fullName}</h3>
        <p className="text-[#C7CBD1]/40">{role}</p>
      </div>
    </article>
  );
};
