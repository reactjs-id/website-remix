import { type SimpleIcon } from "simple-icons";

export function JoinCard({
  icon,
  text,
  iconSize,
}: {
  icon: SimpleIcon;
  text: string;
  iconSize: number;
}) {
  return (
    <div className="flex gap-5 items-center xs:flex-col lg:flex-row color-brand-gray-lavender">
      <svg
        key={icon.title}
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width={iconSize}
        height={iconSize}
      >
        <title>{icon.title}</title>
        <path d={icon.path} />
      </svg>

      <span>{text}</span>
    </div>
  );
}
