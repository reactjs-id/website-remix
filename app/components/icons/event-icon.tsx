export const EventsIcon = ({
  height = "47",
  width = "47",
  color = "#D6D9DC",
  ...props
}: React.ComponentProps<"svg">) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.1342 3.8457V11.5124"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.4674 3.8457V11.5124"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.0508 26.8459V11.5125C41.0508 10.4959 40.6469 9.52085 39.928 8.80196C39.2091 8.08307 38.2341 7.6792 37.2174 7.6792H10.3841C9.36745 7.6792 8.39243 8.08307 7.67354 8.80196C6.95465 9.52085 6.55078 10.4959 6.55078 11.5125V38.3459C6.55078 39.3625 6.95465 40.3376 7.67354 41.0564C8.39243 41.7753 9.36745 42.1792 10.3841 42.1792H25.7174"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.55078 19.1792H41.0508"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.4674 38.3458L35.3007 42.1791L42.9674 34.5125"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
