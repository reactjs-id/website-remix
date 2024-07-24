import { Spacer } from "~/components/spacer";
import { MoveRight } from "lucide-react";
import { EventItem, fakerEvents } from "~/components/event-item";
import { Button } from "~/components/ui/button";

export default function Networking() {
  return (
    <section className="container !p-4 !lg:p-8">
      <div className="flex items-start flex-col grow">
        <div className="flex grow self-stretch relative flex-col lg:flex-row">
          <div className="flex flex-col gap-5 lg:gap-11 max-w-2xl py-8 lg:py-10 mr-0 lg:-mr-44">
            <div className="flex lg:gap-2.5 flex-wrap items-end">
              <h2 className="text-4xl lg:text-6xl font-semibold text-balance">
                Networking
              </h2>
              <span className="text-brand-gray-lavender text-sm lg:text-2xl font-medium">
                dengan
              </span>
              <img
                className="mb-1"
                src="./images/logos/reactjsid.svg"
                alt="reactjs.id logo"
                style={{ width: 44, height: 23 }}
              />
            </div>

            <p className="text-sm lg:text-2xl text-brand-gray-lavender font-medium max-w-prose">
              Di reactjs.id, Anda akan bertemu dengan para profesional
              <br />
              dari berbagai latar belakang dan tingkat pengalaman
            </p>
          </div>

          <div>
            <svg
              className="size-full"
              viewBox="0 0 709 237"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="303.513"
                y="84.0087"
                width="170"
                height="68"
                rx="26"
                fill="#272E37"
              />
              <path
                d="M336.515 110.275L339.827 123.739L343.115 110.275H345.755L349.091 123.739L352.379 110.275H355.163L350.651 127.315H347.603L344.435 115.171L341.267 127.315H338.267L333.731 110.275H336.515ZM361.155 127.603C359.939 127.603 358.875 127.331 357.963 126.787C357.051 126.243 356.339 125.475 355.827 124.483C355.331 123.475 355.083 122.299 355.083 120.955C355.083 119.611 355.331 118.443 355.827 117.451C356.339 116.443 357.051 115.667 357.963 115.123C358.875 114.579 359.939 114.307 361.155 114.307C362.355 114.307 363.411 114.579 364.323 115.123C365.235 115.667 365.939 116.443 366.435 117.451C366.947 118.443 367.203 119.611 367.203 120.955C367.203 122.299 366.947 123.475 366.435 124.483C365.939 125.475 365.235 126.243 364.323 126.787C363.411 127.331 362.355 127.603 361.155 127.603ZM361.155 125.395C362.227 125.395 363.059 125.003 363.651 124.219C364.259 123.435 364.563 122.347 364.563 120.955C364.563 119.563 364.259 118.475 363.651 117.691C363.059 116.907 362.227 116.515 361.155 116.515C360.083 116.515 359.243 116.907 358.635 117.691C358.027 118.459 357.723 119.547 357.723 120.955C357.723 122.363 358.027 123.459 358.635 124.243C359.243 125.011 360.083 125.395 361.155 125.395ZM371.738 114.595L371.834 118.075L371.618 117.907C371.794 116.771 372.138 115.939 372.65 115.411C373.162 114.867 373.898 114.595 374.858 114.595H376.082V116.683H374.834C374.178 116.683 373.634 116.803 373.202 117.043C372.786 117.283 372.474 117.643 372.266 118.123C372.058 118.603 371.954 119.195 371.954 119.899V127.315H369.41V114.595H371.738ZM380.357 110.275V120.883L385.997 114.595H389.285L384.293 119.923L389.501 127.315H386.549L382.589 121.531L380.357 123.955V127.315H377.813V110.275H380.357ZM398.014 118.603C397.886 117.947 397.55 117.419 397.006 117.019C396.462 116.619 395.846 116.419 395.158 116.419C394.486 116.419 393.926 116.587 393.478 116.923C393.03 117.243 392.806 117.675 392.806 118.219C392.822 118.731 393.086 119.131 393.598 119.419C394.126 119.691 394.806 119.915 395.638 120.091C396.79 120.299 397.734 120.555 398.47 120.859C399.206 121.147 399.782 121.547 400.198 122.059C400.614 122.555 400.822 123.203 400.822 124.003C400.822 124.787 400.582 125.451 400.102 125.995C399.638 126.539 399.006 126.947 398.206 127.219C397.422 127.475 396.558 127.603 395.614 127.603C394.542 127.603 393.582 127.427 392.734 127.075C391.886 126.723 391.206 126.227 390.694 125.587C390.198 124.931 389.918 124.171 389.854 123.307L392.47 123.139C392.566 123.619 392.742 124.035 392.998 124.387C393.27 124.739 393.622 125.011 394.054 125.203C394.502 125.395 395.014 125.491 395.59 125.491C396.278 125.491 396.878 125.363 397.39 125.107C397.918 124.835 398.182 124.427 398.182 123.883C398.182 123.515 398.07 123.219 397.846 122.995C397.622 122.771 397.342 122.603 397.006 122.491C396.686 122.379 396.254 122.267 395.71 122.155C395.55 122.107 395.374 122.067 395.182 122.035C394.094 121.795 393.206 121.547 392.518 121.291C391.83 121.019 391.262 120.643 390.814 120.163C390.382 119.683 390.166 119.059 390.166 118.291C390.166 117.475 390.374 116.771 390.79 116.179C391.222 115.571 391.822 115.107 392.59 114.787C393.374 114.467 394.294 114.307 395.35 114.307C396.742 114.307 397.918 114.683 398.878 115.435C399.838 116.187 400.422 117.195 400.63 118.459L398.014 118.603ZM405.319 110.275V117.451L404.959 117.331C405.199 116.291 405.687 115.531 406.423 115.051C407.159 114.555 408.039 114.307 409.063 114.307C410.375 114.307 411.415 114.747 412.183 115.627C412.967 116.491 413.359 117.659 413.359 119.131V127.315H410.815V120.043C410.815 118.875 410.615 118.003 410.215 117.427C409.815 116.851 409.191 116.563 408.343 116.563C407.415 116.563 406.679 116.867 406.135 117.475C405.591 118.067 405.319 118.923 405.319 120.043V127.315H402.775V110.275H405.319ZM421.474 127.603C420.258 127.603 419.194 127.331 418.282 126.787C417.37 126.243 416.658 125.475 416.146 124.483C415.65 123.475 415.402 122.299 415.402 120.955C415.402 119.611 415.65 118.443 416.146 117.451C416.658 116.443 417.37 115.667 418.282 115.123C419.194 114.579 420.258 114.307 421.474 114.307C422.674 114.307 423.73 114.579 424.642 115.123C425.554 115.667 426.258 116.443 426.754 117.451C427.266 118.443 427.522 119.611 427.522 120.955C427.522 122.299 427.266 123.475 426.754 124.483C426.258 125.475 425.554 126.243 424.642 126.787C423.73 127.331 422.674 127.603 421.474 127.603ZM421.474 125.395C422.546 125.395 423.378 125.003 423.97 124.219C424.578 123.435 424.882 122.347 424.882 120.955C424.882 119.563 424.578 118.475 423.97 117.691C423.378 116.907 422.546 116.515 421.474 116.515C420.402 116.515 419.562 116.907 418.954 117.691C418.346 118.459 418.042 119.547 418.042 120.955C418.042 122.363 418.346 123.459 418.954 124.243C419.562 125.011 420.402 125.395 421.474 125.395ZM429.729 114.595H432.105L432.201 117.307L431.961 116.971C432.281 116.107 432.785 115.451 433.473 115.003C434.177 114.539 435.033 114.307 436.041 114.307C437.241 114.307 438.249 114.603 439.065 115.195C439.897 115.787 440.513 116.587 440.913 117.595C441.313 118.603 441.513 119.723 441.513 120.955C441.513 122.187 441.313 123.307 440.913 124.315C440.513 125.323 439.897 126.123 439.065 126.715C438.249 127.307 437.241 127.603 436.041 127.603C435.385 127.603 434.785 127.499 434.241 127.291C433.713 127.083 433.257 126.779 432.873 126.379C432.489 125.963 432.193 125.467 431.985 124.891L432.273 124.603V130.915H429.729V114.595ZM432.057 120.955C432.057 121.755 432.177 122.491 432.417 123.163C432.673 123.835 433.057 124.379 433.569 124.795C434.081 125.211 434.705 125.419 435.441 125.419C436.577 125.419 437.425 124.995 437.985 124.147C438.561 123.283 438.849 122.219 438.849 120.955C438.849 119.707 438.561 118.651 437.985 117.787C437.425 116.923 436.577 116.491 435.441 116.491C434.705 116.491 434.081 116.699 433.569 117.115C433.057 117.531 432.673 118.083 432.417 118.771C432.177 119.443 432.057 120.171 432.057 120.955Z"
                fill="#C7CBD1"
              />
              <rect
                x="241.241"
                y="0.00866699"
                width="169"
                height="68"
                rx="26"
                fill="#272E37"
              />
              <path
                d="M287.611 28.0963H282.379V42.7603H279.787V28.0963H274.555V25.7203H287.611V28.0963ZM287.332 33.8563C287.588 32.5763 288.188 31.5763 289.132 30.8563C290.092 30.1203 291.308 29.7523 292.78 29.7523C294.508 29.7523 295.828 30.2163 296.74 31.1443C297.668 32.0723 298.132 33.4083 298.132 35.1523V39.8803C298.132 40.2003 298.196 40.4323 298.324 40.5763C298.468 40.7043 298.668 40.7683 298.924 40.7683H299.428V42.7603H298.636L298.348 42.7843C297.66 42.7683 297.076 42.6243 296.596 42.3523C296.116 42.0643 295.852 41.5443 295.804 40.7923C295.484 41.4483 294.972 41.9923 294.268 42.4243C293.564 42.8403 292.708 43.0483 291.7 43.0483C290.388 43.0483 289.292 42.7203 288.412 42.0643C287.548 41.4083 287.116 40.5283 287.116 39.4243C287.116 38.6083 287.308 37.9523 287.692 37.4563C288.076 36.9603 288.604 36.5763 289.276 36.3043C289.948 36.0323 290.836 35.7923 291.94 35.5843L295.588 34.8643C295.572 33.8403 295.332 33.0803 294.868 32.5843C294.404 32.0723 293.708 31.8163 292.78 31.8163C292.044 31.8163 291.436 32.0083 290.956 32.3923C290.476 32.7603 290.148 33.3043 289.972 34.0243L287.332 33.8563ZM289.756 39.3763C289.756 39.8723 289.964 40.2803 290.38 40.6003C290.812 40.9203 291.436 41.0803 292.252 41.0803C292.892 41.0643 293.468 40.9043 293.98 40.6003C294.492 40.2963 294.892 39.8403 295.18 39.2323C295.484 38.6083 295.636 37.8563 295.636 36.9763V36.8083L292.924 37.2883C292.796 37.3043 292.668 37.3283 292.54 37.3603C291.884 37.4723 291.372 37.5923 291.004 37.7203C290.636 37.8323 290.332 38.0243 290.092 38.2963C289.868 38.5523 289.756 38.9123 289.756 39.3763ZM304.08 25.7203V39.8083C304.08 40.0963 304.152 40.3123 304.296 40.4563C304.456 40.6003 304.672 40.6723 304.944 40.6723H305.976V42.7603H304.392C303.544 42.7603 302.856 42.5043 302.328 41.9923C301.8 41.4803 301.536 40.7923 301.536 39.9283V25.7203H304.08ZM310.585 25.7203V36.3283L316.225 30.0403H319.513L314.521 35.3683L319.729 42.7603H316.777L312.817 36.9763L310.585 39.4003V42.7603H308.041V25.7203H310.585ZM328.242 34.0483C328.114 33.3923 327.778 32.8643 327.234 32.4643C326.69 32.0643 326.074 31.8643 325.386 31.8643C324.714 31.8643 324.154 32.0323 323.706 32.3683C323.258 32.6883 323.034 33.1203 323.034 33.6643C323.05 34.1763 323.314 34.5763 323.826 34.8643C324.354 35.1363 325.034 35.3603 325.866 35.5363C327.018 35.7443 327.962 36.0003 328.698 36.3043C329.434 36.5923 330.01 36.9923 330.426 37.5043C330.842 38.0003 331.05 38.6483 331.05 39.4483C331.05 40.2323 330.81 40.8963 330.33 41.4403C329.866 41.9843 329.234 42.3923 328.434 42.6643C327.65 42.9203 326.786 43.0483 325.842 43.0483C324.77 43.0483 323.81 42.8723 322.962 42.5203C322.114 42.1683 321.434 41.6723 320.922 41.0323C320.426 40.3763 320.146 39.6163 320.082 38.7523L322.698 38.5843C322.794 39.0643 322.97 39.4803 323.226 39.8323C323.498 40.1843 323.85 40.4563 324.282 40.6483C324.73 40.8403 325.242 40.9363 325.818 40.9363C326.506 40.9363 327.106 40.8083 327.618 40.5523C328.146 40.2803 328.41 39.8723 328.41 39.3283C328.41 38.9603 328.298 38.6643 328.074 38.4403C327.85 38.2163 327.57 38.0483 327.234 37.9363C326.914 37.8243 326.482 37.7123 325.938 37.6003C325.778 37.5523 325.602 37.5123 325.41 37.4803C324.322 37.2403 323.434 36.9923 322.746 36.7363C322.058 36.4643 321.49 36.0883 321.042 35.6083C320.61 35.1283 320.394 34.5043 320.394 33.7363C320.394 32.9203 320.602 32.2163 321.018 31.6243C321.45 31.0163 322.05 30.5523 322.818 30.2323C323.602 29.9123 324.522 29.7523 325.578 29.7523C326.97 29.7523 328.146 30.1283 329.106 30.8803C330.066 31.6323 330.65 32.6403 330.858 33.9043L328.242 34.0483ZM335.547 25.7203V32.8963L335.187 32.7763C335.427 31.7363 335.915 30.9763 336.651 30.4963C337.387 30.0003 338.267 29.7523 339.291 29.7523C340.603 29.7523 341.643 30.1923 342.411 31.0723C343.195 31.9363 343.587 33.1043 343.587 34.5763V42.7603H341.043V35.4883C341.043 34.3203 340.843 33.4483 340.443 32.8723C340.043 32.2963 339.419 32.0083 338.571 32.0083C337.643 32.0083 336.907 32.3123 336.363 32.9203C335.819 33.5123 335.547 34.3683 335.547 35.4883V42.7603H333.003V25.7203H335.547ZM351.702 43.0483C350.486 43.0483 349.422 42.7763 348.51 42.2323C347.598 41.6883 346.886 40.9203 346.374 39.9283C345.878 38.9203 345.63 37.7443 345.63 36.4003C345.63 35.0563 345.878 33.8883 346.374 32.8963C346.886 31.8883 347.598 31.1123 348.51 30.5683C349.422 30.0243 350.486 29.7523 351.702 29.7523C352.902 29.7523 353.958 30.0243 354.87 30.5683C355.782 31.1123 356.486 31.8883 356.982 32.8963C357.494 33.8883 357.75 35.0563 357.75 36.4003C357.75 37.7443 357.494 38.9203 356.982 39.9283C356.486 40.9203 355.782 41.6883 354.87 42.2323C353.958 42.7763 352.902 43.0483 351.702 43.0483ZM351.702 40.8403C352.774 40.8403 353.606 40.4483 354.198 39.6643C354.806 38.8803 355.11 37.7923 355.11 36.4003C355.11 35.0083 354.806 33.9203 354.198 33.1363C353.606 32.3523 352.774 31.9603 351.702 31.9603C350.63 31.9603 349.79 32.3523 349.182 33.1363C348.574 33.9043 348.27 34.9923 348.27 36.4003C348.27 37.8083 348.574 38.9043 349.182 39.6883C349.79 40.4563 350.63 40.8403 351.702 40.8403ZM371.656 39.8803L374.488 30.0403H377.08L373.144 42.7603H370.312L367.624 33.6403L364.96 42.7603H362.128L358.216 30.0403H360.784L363.592 39.8803L366.424 30.0403H368.824L371.656 39.8803Z"
                fill="#C7CBD1"
              />
              <rect
                x="424.013"
                y="0.00866699"
                width="169"
                height="68"
                rx="26"
                fill="url(#paint0_linear_668_170)"
              />
              <rect
                width="169"
                height="68"
                rx="26"
                transform="matrix(-1 0 0 1 227.469 0.00866699)"
                fill="url(#paint1_linear_668_170)"
              />
              <rect
                x="491.013"
                y="84.0087"
                width="169"
                height="68"
                rx="26"
                fill="url(#paint2_linear_668_170)"
              />
              <rect
                width="169"
                height="68"
                rx="26"
                transform="matrix(-1 0 0 1 283.241 84.0087)"
                fill="url(#paint3_linear_668_170)"
              />
              <rect
                width="169"
                height="68"
                rx="26"
                transform="matrix(-1 0 0 1 169.841 168.26)"
                fill="url(#paint4_linear_668_170)"
              />
              <rect
                x="194.427"
                y="168.009"
                width="170"
                height="68"
                rx="26"
                fill="#272E37"
              />
              <path
                d="M242.233 193.72L247.297 207.712L252.361 193.72H255.913V210.76H253.297V198.448L248.737 210.736H245.857L241.273 198.448V210.76H238.681V193.72H242.233ZM258.099 204.4C258.099 203.072 258.347 201.904 258.843 200.896C259.355 199.888 260.067 199.112 260.979 198.568C261.891 198.024 262.955 197.752 264.171 197.752C265.211 197.752 266.155 197.992 267.003 198.472C267.867 198.952 268.555 199.688 269.067 200.68C269.579 201.656 269.859 202.864 269.907 204.304L269.931 205.12H260.787C260.867 206.304 261.203 207.232 261.795 207.904C262.387 208.56 263.179 208.888 264.171 208.888C264.811 208.888 265.387 208.712 265.899 208.36C266.427 208.008 266.819 207.528 267.075 206.92L269.739 207.112C269.371 208.312 268.675 209.272 267.651 209.992C266.643 210.696 265.483 211.048 264.171 211.048C262.955 211.048 261.891 210.776 260.979 210.232C260.067 209.688 259.355 208.912 258.843 207.904C258.347 206.896 258.099 205.728 258.099 204.4ZM267.243 203.224C267.099 202.088 266.747 201.256 266.187 200.728C265.643 200.184 264.971 199.912 264.171 199.912C263.243 199.912 262.491 200.208 261.915 200.8C261.339 201.376 260.979 202.184 260.835 203.224H267.243ZM271.564 204.4C271.564 203.072 271.812 201.904 272.308 200.896C272.82 199.888 273.532 199.112 274.444 198.568C275.356 198.024 276.42 197.752 277.636 197.752C278.676 197.752 279.62 197.992 280.468 198.472C281.332 198.952 282.02 199.688 282.532 200.68C283.044 201.656 283.324 202.864 283.372 204.304L283.396 205.12H274.252C274.332 206.304 274.668 207.232 275.26 207.904C275.852 208.56 276.644 208.888 277.636 208.888C278.276 208.888 278.852 208.712 279.364 208.36C279.892 208.008 280.284 207.528 280.54 206.92L283.204 207.112C282.836 208.312 282.14 209.272 281.116 209.992C280.108 210.696 278.948 211.048 277.636 211.048C276.42 211.048 275.356 210.776 274.444 210.232C273.532 209.688 272.82 208.912 272.308 207.904C271.812 206.896 271.564 205.728 271.564 204.4ZM280.708 203.224C280.564 202.088 280.212 201.256 279.652 200.728C279.108 200.184 278.436 199.912 277.636 199.912C276.708 199.912 275.956 200.208 275.38 200.8C274.804 201.376 274.444 202.184 274.3 203.224H280.708ZM288.958 195.16V207.112C288.958 207.624 289.086 208.016 289.342 208.288C289.598 208.544 289.966 208.672 290.446 208.672H292.294V210.76H290.182C288.95 210.76 288.014 210.448 287.374 209.824C286.734 209.2 286.414 208.296 286.414 207.112V195.16H288.958ZM292.318 198.04V200.104H284.47V198.04H292.318ZM302.569 210.76L302.521 207.448L302.833 207.664C302.625 208.816 302.153 209.672 301.417 210.232C300.681 210.776 299.793 211.048 298.753 211.048C297.393 211.048 296.337 210.608 295.585 209.728C294.849 208.832 294.481 207.664 294.481 206.224V198.04H297.025V205.432C297.025 206.6 297.209 207.472 297.577 208.048C297.961 208.624 298.577 208.912 299.425 208.912C300.353 208.912 301.081 208.616 301.609 208.024C302.137 207.416 302.401 206.552 302.401 205.432V198.04H304.945V210.76H302.569ZM308.064 198.04H310.44L310.536 200.752L310.296 200.416C310.616 199.552 311.12 198.896 311.808 198.448C312.512 197.984 313.368 197.752 314.376 197.752C315.576 197.752 316.584 198.048 317.4 198.64C318.232 199.232 318.848 200.032 319.248 201.04C319.648 202.048 319.848 203.168 319.848 204.4C319.848 205.632 319.648 206.752 319.248 207.76C318.848 208.768 318.232 209.568 317.4 210.16C316.584 210.752 315.576 211.048 314.376 211.048C313.72 211.048 313.12 210.944 312.576 210.736C312.048 210.528 311.592 210.224 311.208 209.824C310.824 209.408 310.528 208.912 310.32 208.336L310.608 208.048V214.36H308.064V198.04ZM310.392 204.4C310.392 205.2 310.512 205.936 310.752 206.608C311.008 207.28 311.392 207.824 311.904 208.24C312.416 208.656 313.04 208.864 313.776 208.864C314.912 208.864 315.76 208.44 316.32 207.592C316.896 206.728 317.184 205.664 317.184 204.4C317.184 203.152 316.896 202.096 316.32 201.232C315.76 200.368 314.912 199.936 313.776 199.936C313.04 199.936 312.416 200.144 311.904 200.56C311.392 200.976 311.008 201.528 310.752 202.216C310.512 202.888 310.392 203.616 310.392 204.4Z"
                fill="#C7CBD1"
              />
              <rect
                x="389.013"
                y="168.009"
                width="204"
                height="67"
                rx="26"
                fill="#272E37"
              />
              <path
                d="M433.077 192.969H435.669V201.177L434.421 200.265H444.597L443.349 201.177V192.969H445.941V210.009H443.349V201.705L444.597 202.617H434.421L435.669 201.705V210.009H433.077V192.969ZM448.797 201.105C449.053 199.825 449.653 198.825 450.597 198.105C451.557 197.369 452.773 197.001 454.245 197.001C455.973 197.001 457.293 197.465 458.205 198.393C459.133 199.321 459.597 200.657 459.597 202.401V207.129C459.597 207.449 459.661 207.681 459.789 207.825C459.933 207.953 460.133 208.017 460.389 208.017H460.893V210.009H460.101L459.813 210.033C459.125 210.017 458.541 209.873 458.061 209.601C457.581 209.313 457.317 208.793 457.269 208.041C456.949 208.697 456.437 209.241 455.733 209.673C455.029 210.089 454.173 210.297 453.165 210.297C451.853 210.297 450.757 209.969 449.877 209.313C449.013 208.657 448.581 207.777 448.581 206.673C448.581 205.857 448.773 205.201 449.157 204.705C449.541 204.209 450.069 203.825 450.741 203.553C451.413 203.281 452.301 203.041 453.405 202.833L457.053 202.113C457.037 201.089 456.797 200.329 456.333 199.833C455.869 199.321 455.173 199.065 454.245 199.065C453.509 199.065 452.901 199.257 452.421 199.641C451.941 200.009 451.613 200.553 451.437 201.273L448.797 201.105ZM451.221 206.625C451.221 207.121 451.429 207.529 451.845 207.849C452.277 208.169 452.901 208.329 453.717 208.329C454.357 208.313 454.933 208.153 455.445 207.849C455.957 207.545 456.357 207.089 456.645 206.481C456.949 205.857 457.101 205.105 457.101 204.225V204.057L454.389 204.537C454.261 204.553 454.133 204.577 454.005 204.609C453.349 204.721 452.837 204.841 452.469 204.969C452.101 205.081 451.797 205.273 451.557 205.545C451.333 205.801 451.221 206.161 451.221 206.625ZM471.07 201.753C470.942 200.969 470.598 200.353 470.038 199.905C469.494 199.441 468.854 199.209 468.118 199.209C467.046 199.209 466.206 199.601 465.598 200.385C464.99 201.153 464.686 202.241 464.686 203.649C464.686 205.057 464.99 206.153 465.598 206.937C466.206 207.705 467.046 208.089 468.118 208.089C468.886 208.089 469.55 207.849 470.11 207.369C470.67 206.889 471.014 206.209 471.142 205.329L473.806 205.473C473.694 206.449 473.366 207.305 472.822 208.041C472.294 208.761 471.622 209.321 470.806 209.721C469.99 210.105 469.094 210.297 468.118 210.297C466.902 210.297 465.838 210.025 464.926 209.481C464.014 208.937 463.302 208.161 462.79 207.153C462.294 206.145 462.046 204.977 462.046 203.649C462.046 202.321 462.294 201.153 462.79 200.145C463.302 199.137 464.014 198.361 464.926 197.817C465.838 197.273 466.902 197.001 468.118 197.001C469.062 197.001 469.934 197.193 470.734 197.577C471.55 197.945 472.222 198.481 472.75 199.185C473.278 199.873 473.598 200.681 473.71 201.609L471.07 201.753ZM478.331 192.969V203.577L483.971 197.289H487.259L482.267 202.617L487.475 210.009H484.523L480.563 204.225L478.331 206.649V210.009H475.787V192.969H478.331ZM489.169 201.105C489.425 199.825 490.025 198.825 490.969 198.105C491.929 197.369 493.145 197.001 494.617 197.001C496.345 197.001 497.665 197.465 498.577 198.393C499.505 199.321 499.969 200.657 499.969 202.401V207.129C499.969 207.449 500.033 207.681 500.161 207.825C500.305 207.953 500.505 208.017 500.761 208.017H501.265V210.009H500.473L500.185 210.033C499.497 210.017 498.913 209.873 498.433 209.601C497.953 209.313 497.689 208.793 497.641 208.041C497.321 208.697 496.809 209.241 496.105 209.673C495.401 210.089 494.545 210.297 493.537 210.297C492.225 210.297 491.129 209.969 490.249 209.313C489.385 208.657 488.953 207.777 488.953 206.673C488.953 205.857 489.145 205.201 489.529 204.705C489.913 204.209 490.441 203.825 491.113 203.553C491.785 203.281 492.673 203.041 493.777 202.833L497.425 202.113C497.409 201.089 497.169 200.329 496.705 199.833C496.241 199.321 495.545 199.065 494.617 199.065C493.881 199.065 493.273 199.257 492.793 199.641C492.313 200.009 491.985 200.553 491.809 201.273L489.169 201.105ZM491.593 206.625C491.593 207.121 491.801 207.529 492.217 207.849C492.649 208.169 493.273 208.329 494.089 208.329C494.729 208.313 495.305 208.153 495.817 207.849C496.329 207.545 496.729 207.089 497.017 206.481C497.321 205.857 497.473 205.105 497.473 204.225V204.057L494.761 204.537C494.633 204.553 494.505 204.577 494.377 204.609C493.721 204.721 493.209 204.841 492.841 204.969C492.473 205.081 492.169 205.273 491.929 205.545C491.705 205.801 491.593 206.161 491.593 206.625ZM506.137 194.409V206.361C506.137 206.873 506.265 207.265 506.521 207.537C506.777 207.793 507.145 207.921 507.625 207.921H509.473V210.009H507.361C506.129 210.009 505.193 209.697 504.553 209.073C503.913 208.449 503.593 207.545 503.593 206.361V194.409H506.137ZM509.497 197.289V199.353H501.649V197.289H509.497ZM514.203 192.969V200.145L513.843 200.025C514.083 198.985 514.571 198.225 515.307 197.745C516.043 197.249 516.923 197.001 517.947 197.001C519.259 197.001 520.299 197.441 521.067 198.321C521.851 199.185 522.243 200.353 522.243 201.825V210.009H519.699V202.737C519.699 201.569 519.499 200.697 519.099 200.121C518.699 199.545 518.075 199.257 517.227 199.257C516.299 199.257 515.563 199.561 515.019 200.169C514.475 200.761 514.203 201.617 514.203 202.737V210.009H511.659V192.969H514.203ZM530.359 210.297C529.143 210.297 528.079 210.025 527.167 209.481C526.255 208.937 525.543 208.169 525.031 207.177C524.535 206.169 524.287 204.993 524.287 203.649C524.287 202.305 524.535 201.137 525.031 200.145C525.543 199.137 526.255 198.361 527.167 197.817C528.079 197.273 529.143 197.001 530.359 197.001C531.559 197.001 532.615 197.273 533.527 197.817C534.439 198.361 535.143 199.137 535.639 200.145C536.151 201.137 536.407 202.305 536.407 203.649C536.407 204.993 536.151 206.169 535.639 207.177C535.143 208.169 534.439 208.937 533.527 209.481C532.615 210.025 531.559 210.297 530.359 210.297ZM530.359 208.089C531.431 208.089 532.263 207.697 532.855 206.913C533.463 206.129 533.767 205.041 533.767 203.649C533.767 202.257 533.463 201.169 532.855 200.385C532.263 199.601 531.431 199.209 530.359 199.209C529.287 199.209 528.447 199.601 527.839 200.385C527.231 201.153 526.927 202.241 526.927 203.649C526.927 205.057 527.231 206.153 527.839 206.937C528.447 207.705 529.287 208.089 530.359 208.089ZM540.941 197.289L541.037 200.697L540.725 200.457C540.933 199.289 541.405 198.425 542.141 197.865C542.893 197.289 543.805 197.001 544.877 197.001C546.253 197.001 547.317 197.449 548.069 198.345C548.821 199.225 549.197 200.385 549.197 201.825V210.009H546.653V202.617C546.653 201.449 546.461 200.577 546.077 200.001C545.693 199.425 545.061 199.137 544.181 199.137C543.253 199.137 542.517 199.441 541.973 200.049C541.429 200.641 541.157 201.497 541.157 202.617V210.009H538.613V197.289H540.941Z"
                fill="#C7CBD1"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_668_170"
                  x1="424.013"
                  y1="34.0087"
                  x2="560.52"
                  y2="34.0087"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.395" stopColor="#272E37" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#272E37" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_668_170"
                  x1="0"
                  y1="34"
                  x2="136.507"
                  y2="34"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.395" stopColor="#272E37" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#272E37" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_668_170"
                  x1="491.013"
                  y1="118.009"
                  x2="627.52"
                  y2="118.009"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.395" stopColor="#272E37" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#272E37" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_668_170"
                  x1="0"
                  y1="34"
                  x2="136.507"
                  y2="34"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.395" stopColor="#272E37" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#272E37" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_668_170"
                  x1="-106.73"
                  y1="34"
                  x2="43.3309"
                  y2="34"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.395" stopColor="#272E37" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#272E37" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <Spacer size="xs" />

        <div className="flex flex-col justify-center gap-8 lg:gap-[52px] grow self-stretch">
          {fakerEvents.map((event, index) => (
            <EventItem key={index} {...event} />
          ))}
        </div>

        <Spacer size="xs" />

        <Button className="bg-brand-black-washed border border-brand-black-granite justify-start text-center px-4 lg:px-9 py-6 lg:!py-[28px] rounded-2xl">
          <span className="text-base lg:text-xl">Lihat semua acara</span>
          <MoveRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
}
