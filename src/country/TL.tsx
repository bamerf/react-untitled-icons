import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const TL = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187492)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#FFDA44"
      />
      <path
        d="M11.9996 -0.000366211C9.0616 -0.000366211 6.3707 1.05606 4.28467 2.80904L17.217 11.9996L4.28467 21.1902C6.3707 22.9432 9.0616 23.9996 11.9996 23.9996C18.627 23.9996 23.9996 18.627 23.9996 11.9996C23.9996 5.37226 18.627 -0.000366211 11.9996 -0.000366211Z"
        fill="#D80027"
      />
      <path
        d="M3.51471 3.5155C-1.17157 8.20178 -1.17157 15.7998 3.51471 20.4861C5.45126 18.5496 7.31375 16.6871 12 12.0008L3.51471 3.5155Z"
        fill="black"
      />
      <path
        d="M3.32708 9.25146L5.15333 10.9798L7.36152 9.77684L6.28222 12.0479L8.10852 13.7763L5.61505 13.4516L4.53561 15.7226L4.07404 13.2508L1.58057 12.926L3.78866 11.7231L3.32708 9.25146Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187492">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default TL;
