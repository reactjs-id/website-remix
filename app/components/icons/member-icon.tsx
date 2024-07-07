export const MemberIcon = ({
  height = "47",
  width = "47",
  color = "#D6D9DC",
  ...props
}: React.ComponentProps<"svg">) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.0072 40.2625V36.4291C31.0072 34.3958 30.1994 32.4457 28.7616 31.008C27.3239 29.5702 25.3738 28.7625 23.3405 28.7625H11.8405C9.80717 28.7625 7.85712 29.5702 6.41934 31.008C4.98156 32.4457 4.17383 34.3958 4.17383 36.4291V40.2625"
        stroke={color}
        strokeWidth="3.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5909 21.0958C21.825 21.0958 25.2575 17.6633 25.2575 13.4291C25.2575 9.19493 21.825 5.76245 17.5909 5.76245C13.3567 5.76245 9.92419 9.19493 9.92419 13.4291C9.92419 17.6633 13.3567 21.0958 17.5909 21.0958Z"
        stroke={color}
        strokeWidth="3.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.5074 40.2626V36.4292C42.5062 34.7305 41.9408 33.0804 40.9001 31.7378C39.8593 30.3953 38.4022 29.4364 36.7574 29.0117"
        stroke={color}
        strokeWidth="3.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.0074 6.01172C32.6566 6.43396 34.1183 7.39306 35.1621 8.73781C36.2059 10.0826 36.7725 11.7365 36.7725 13.4388C36.7725 15.1411 36.2059 16.795 35.1621 18.1398C34.1183 19.4845 32.6566 20.4436 31.0074 20.8659"
        stroke={color}
        strokeWidth="3.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
