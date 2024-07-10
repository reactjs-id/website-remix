import clsx from "clsx";

interface Props {
  type: "3x2" | "2x2";
  photos: Array<{ slug: string; text: string; url: string }>;
}

const cssChild = {
  "3x2": "row-span-3 col-span-2",
  "2x2": "col-span-2",
};
const cssParent = {
  "3x2": "grid-rows-2 grid-cols-3",
  "2x2": "grid-rows-2 grid-cols-2",
};

export default function Grid({ type, photos }: Props) {
  return (
    <div className={clsx("w-full grid gap-4 grid-rows-2", cssParent[type])}>
      {photos.map((photo, index) => {
        let cssHeight = "";
        if (type === "3x2" && index === 0) cssHeight = "h-full";
        else if (type === "2x2" && index === 0) cssHeight = "max-h-36";
        else if (index !== 0) cssHeight = "h-full max-h-36";

        return (
          <div
            key={photo.text}
            className={clsx(index === 0 ? cssChild[type] : "", cssHeight)}
          >
            <img
              src={photo.url}
              alt=""
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
        );
      })}
    </div>
  );
}
