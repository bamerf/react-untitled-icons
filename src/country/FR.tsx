import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Microsoft = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4430_187504)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M23.9999 11.9999C23.9999 6.84037 20.7434 2.44185 16.1738 0.746338V23.2536C20.7434 21.558 23.9999 17.1595 23.9999 11.9999Z"
          fill="#D80027"
        />
        <path
          d="M0.000488281 12.0007C0.000488281 17.1603 3.25704 21.5588 7.8266 23.2543V0.74707C3.25704 2.44259 0.000488281 6.8411 0.000488281 12.0007Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187504">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
