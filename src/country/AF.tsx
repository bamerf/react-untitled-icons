import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const AF = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187424)">
      <path
        d="M17.217 1.19072C15.6394 0.427875 13.8695 0 11.9996 0C10.1298 0 8.35988 0.427875 6.78225 1.19072L5.73877 12L6.78225 22.8093C8.35988 23.5721 10.1298 24 11.9996 24C13.8695 24 15.6394 23.5721 17.217 22.8093L18.2605 12L17.217 1.19072Z"
        fill="#D80027"
      />
      <path
        d="M6.78262 1.19135C2.76872 3.1323 0 7.24272 0 12.0002C0 16.7577 2.76872 20.8681 6.78262 22.8091V1.19135Z"
        fill="black"
      />
      <path
        d="M17.2173 1.19135V22.8091C21.2312 20.8681 23.9999 16.7577 23.9999 12.0002C23.9999 7.24272 21.2312 3.1323 17.2173 1.19135Z"
        fill="#496E2D"
      />
      <path
        d="M11.9996 7.82672C9.69436 7.82672 7.82568 9.69544 7.82568 12.0006C7.82568 14.3058 9.6944 16.1745 11.9996 16.1745C14.3047 16.1745 16.1735 14.3058 16.1735 12.0006C16.1735 9.69544 14.3048 7.82672 11.9996 7.82672ZM11.9996 14.6093C10.5588 14.6093 9.39089 13.4413 9.39089 12.0006C9.39089 10.5599 10.5589 9.39192 11.9996 9.39192C13.4403 9.39192 14.6083 10.5599 14.6083 12.0006C14.6083 13.4413 13.4403 14.6093 11.9996 14.6093Z"
        fill="#FFDA44"
      />
      <path
        d="M12 10.4362C11.4237 10.4362 10.9565 10.9034 10.9565 11.4797V13.0449H13.0435V11.4797C13.0435 10.9034 12.5764 10.4362 12 10.4362Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187424">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default AF;
