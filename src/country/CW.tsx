import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const CW = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187484)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#FFDA44"
      />
      <path
        d="M12 24.0007C15.9375 24.0007 19.432 22.1042 21.6201 19.1749H2.37988C4.56801 22.1042 8.06249 24.0007 12 24.0007Z"
        fill="#0052B4"
      />
      <path
        d="M24 12C24 5.37263 18.6274 0 12 0C5.37262 0 0 5.37263 0 12C0 13.419 0.246984 14.7803 0.699188 16.0439H23.3008C23.753 14.7803 24 13.419 24 12Z"
        fill="#0052B4"
      />
      <path
        d="M8.21359 7.69604L8.86108 9.68879H10.9566L9.26134 10.9206L9.90882 12.9134L8.21359 11.6817L6.51836 12.9134L7.16594 10.9206L5.4707 9.68879H7.56611L8.21359 7.69604Z"
        fill="#F0F0F0"
      />
      <path
        d="M4.61493 5.6095L5.00343 6.80519H6.26075L5.24361 7.54422L5.63211 8.73995L4.61493 8.00092L3.59779 8.73995L3.98633 7.54422L2.96924 6.80519H4.22652L4.61493 5.6095Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187484">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default CW;
