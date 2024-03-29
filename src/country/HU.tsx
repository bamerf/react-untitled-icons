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
      <g clipPath="url(#clip0_4430_187524)">
        <path
          d="M0.745902 7.82522C0.263559 9.12525 -0.000488281 10.5313 -0.000488281 11.9991C-0.000488281 13.467 0.263559 14.8731 0.745902 16.173L11.9995 17.2165L23.2531 16.173C23.7355 14.8731 23.9995 13.467 23.9995 11.9991C23.9995 10.5313 23.7355 9.12525 23.2531 7.82522L11.9995 6.78174L0.745902 7.82522Z"
          fill="#F0F0F0"
        />
        <path
          d="M12.0001 -0.000976562C6.84061 -0.000976562 2.44205 3.25552 0.746582 7.82513H23.2538C21.5582 3.25552 17.1598 -0.000976562 12.0001 -0.000976562Z"
          fill="#D80027"
        />
        <path
          d="M12.0001 23.9993C17.1598 23.9993 21.5582 20.7428 23.2538 16.1732H0.746582C2.44205 20.7428 6.84061 23.9993 12.0001 23.9993Z"
          fill="#6DA544"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187524">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
