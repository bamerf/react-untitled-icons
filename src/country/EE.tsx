import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const EE = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187498)">
      <path
        d="M-0.000488281 11.9995C-0.000488281 13.4673 0.263559 14.8734 0.745902 16.1734L11.9995 16.6951L23.2531 16.1734C23.7355 14.8734 23.9995 13.4673 23.9995 11.9995C23.9995 10.5316 23.7355 9.12558 23.2531 7.8256L11.9995 7.30383L0.745902 7.82555C0.263559 9.12558 -0.000488281 10.5316 -0.000488281 11.9995Z"
        fill="black"
      />
      <path
        d="M11.9997 -0.000366211C6.84013 -0.000366211 2.44161 3.25613 0.746094 7.82574H23.2534C21.5578 3.25613 17.1593 -0.000366211 11.9997 -0.000366211Z"
        fill="#0052B4"
      />
      <path
        d="M23.2533 16.1742H0.746094C2.44161 20.7438 6.84012 24.0003 11.9997 24.0003C17.1593 24.0003 21.5578 20.7438 23.2533 16.1742Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187498">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default EE;
