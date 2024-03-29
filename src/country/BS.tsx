import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const BS = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187439)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#FFDA44"
      />
      <path
        d="M7.30584 7.82513H23.2551C21.5596 3.25552 17.161 -0.000976562 12.0015 -0.000976562C8.68771 -0.000976562 5.68804 1.34241 3.5166 3.51413L7.30584 7.82513Z"
        fill="#338AF3"
      />
      <path
        d="M7.30486 16.1725H23.2541C21.5586 20.7421 17.16 23.9986 12.0005 23.9986C8.68673 23.9986 5.68706 22.6552 3.51562 20.4835L7.30486 16.1725Z"
        fill="#338AF3"
      />
      <path
        d="M3.51422 3.51428C-1.17206 8.20056 -1.17206 15.7986 3.51422 20.4849C5.45077 18.5484 7.31325 16.6859 11.9995 11.9996L3.51422 3.51428Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187439">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default BS;
