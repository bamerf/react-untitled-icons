import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const ML = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187557)">
      <path
        d="M16.174 0.745902C14.874 0.263559 13.4679 -0.000488281 12.0001 -0.000488281C10.5322 -0.000488281 9.12619 0.263559 7.8262 0.745902L6.78271 11.9995L7.8262 23.2531C9.12619 23.7355 10.5322 23.9995 12.0001 23.9995C13.4679 23.9995 14.874 23.7355 16.174 23.2531L17.2175 11.9995L16.174 0.745902Z"
        fill="#FFDA44"
      />
      <path
        d="M23.9995 12.0002C23.9995 6.84068 20.743 2.44211 16.1733 0.746643V23.2539C20.743 21.5583 23.9995 17.1598 23.9995 12.0002Z"
        fill="#D80027"
      />
      <path
        d="M0 11.9994C0 17.159 3.2565 21.5575 7.82611 23.2531V0.74585C3.2565 2.44132 0 6.83988 0 11.9994Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187557">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default ML;
