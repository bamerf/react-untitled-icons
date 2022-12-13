import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const RO = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187602)">
      <path
        d="M16.174 0.745367C14.8739 0.26307 13.4679 -0.000976556 12.0001 -0.000976556C10.5322 -0.00102343 9.12618 0.26307 7.8262 0.745367L6.78271 11.999L7.8262 23.2526C9.12614 23.735 10.5322 23.999 12.0001 23.999C13.4679 23.999 14.874 23.735 16.174 23.2526L17.2174 11.999L16.174 0.745367Z"
        fill="#FFDA44"
      />
      <path
        d="M23.9999 11.9995C23.9999 6.83993 20.7434 2.44132 16.1738 0.74585V23.2532C20.7434 21.5575 23.9999 17.1591 23.9999 11.9995Z"
        fill="#D80027"
      />
      <path
        d="M0 11.9994C0 17.159 3.2565 21.5575 7.82602 23.2531L7.82606 0.74585C3.2565 2.44132 0 6.83979 0 11.9994Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187602">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default RO;
