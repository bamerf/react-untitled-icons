import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const PL = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187600)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 11.9995C24 18.6269 18.6274 23.9995 12 23.9995C5.37262 23.9995 0 18.6269 0 11.9995"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187600">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default PL;
