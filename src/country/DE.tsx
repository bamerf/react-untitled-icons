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
      <g clipPath="url(#clip0_4430_187509)">
        <path
          d="M0.746094 16.1749C2.44161 20.7445 6.84012 24.001 11.9997 24.001C17.1593 24.001 21.5578 20.7445 23.2533 16.1749L11.9997 15.1315L0.746094 16.1749Z"
          fill="#FFDA44"
        />
        <path
          d="M11.9997 0.000732422C6.84012 0.000732422 2.44161 3.25723 0.746094 7.82684L11.9997 8.87028L23.2533 7.82679C21.5578 3.25723 17.1593 0.000732422 11.9997 0.000732422Z"
          fill="black"
        />
        <path
          d="M0.746391 7.82581C0.264047 9.12579 0 10.5319 0 11.9997C0 13.4675 0.264047 14.8736 0.746391 16.1736H23.2537C23.736 14.8736 24 13.4675 24 11.9997C24 10.5319 23.736 9.12579 23.2536 7.82581H0.746391Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187509">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
