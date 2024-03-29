import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const ES = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187626)">
      <path
        d="M0 11.9992C0 13.4671 0.264047 14.8731 0.746391 16.1731L12 17.2166L23.2536 16.1731C23.736 14.8731 24 13.4671 24 11.9992C24 10.5314 23.736 9.12533 23.2536 7.82534L12 6.78186L0.746391 7.82534C0.264047 9.12533 0 10.5314 0 11.9992Z"
        fill="#FFDA44"
      />
      <path
        d="M23.2553 7.82574C21.5597 3.25618 17.1612 -0.000366211 12.0017 -0.000366211C6.84208 -0.000366211 2.44356 3.25618 0.748047 7.82574H23.2553Z"
        fill="#D80027"
      />
      <path
        d="M0.74707 16.174C2.44259 20.7435 6.8411 24.0001 12.0007 24.0001C17.1603 24.0001 21.5588 20.7435 23.2543 16.174H0.74707Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187626">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default ES;
