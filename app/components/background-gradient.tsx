import { cn } from "~/utils/cn";

export default function BackgroundGradient() {
  return (
    <div
      className={cn(
        "absolute left-0 right-0 -z-10 block h-16 lg:h-96 w-full",
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]",
        "from-x-blue-700 via-x-black-700/15 to-x-black-900/20",
        "dark:from-x-blue-700 dark:via-x-black-700/15 dark:to-x-black-900/20",
      )}
    />
  );
}
