export const ArticleIcon = ({
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
        d="M7.92733 42.179H38.594C39.6107 42.179 40.5857 41.7752 41.3046 41.0563C42.0235 40.3374 42.4273 39.3624 42.4273 38.3457V7.67904C42.4273 6.66237 42.0235 5.68735 41.3046 4.96846C40.5857 4.24957 39.6107 3.8457 38.594 3.8457H15.594C14.5773 3.8457 13.6023 4.24957 12.8834 4.96846C12.1645 5.68735 11.7607 6.66237 11.7607 7.67904V38.3457C11.7607 39.3624 11.3568 40.3374 10.6379 41.0563C9.91901 41.7752 8.94399 42.179 7.92733 42.179ZM7.92733 42.179C6.91066 42.179 5.93564 41.7752 5.21675 41.0563C4.49786 40.3374 4.09399 39.3624 4.09399 38.3457V21.0957C4.09399 18.9874 5.81899 17.2624 7.92733 17.2624H11.7607"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.7608 26.8457H19.4275"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.0108 34.5125H19.4275"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.4275 11.5125H34.7608V19.1791H19.4275V11.5125Z"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
