import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const BE = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187444)">
      <path
        d="M16.1735 0.746635C14.8735 0.264291 13.4675 0.000244141 11.9996 0.000244141C10.5318 0.000244141 9.1257 0.264291 7.82571 0.746635L6.78223 12.0002L7.82571 23.2539C9.1257 23.7362 10.5318 24.0002 11.9996 24.0002C13.4675 24.0002 14.8735 23.7362 16.1735 23.2539L17.217 12.0002L16.1735 0.746635Z"
        fill="#FFDA44"
      />
      <path
        d="M23.9999 11.9994C23.9999 6.83988 20.7434 2.44132 16.1738 0.74585V23.2531C20.7434 21.5575 23.9999 17.159 23.9999 11.9994Z"
        fill="#D80027"
      />
      <path
        d="M-0.000488281 11.9999C-0.000488281 17.1595 3.25601 21.558 7.82562 23.2536V0.746338C3.25601 2.44181 -0.000488281 6.84037 -0.000488281 11.9999Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187444">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default BE;
