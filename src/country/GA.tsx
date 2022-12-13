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
      <g clipPath="url(#clip0_4430_187506)">
        <path
          d="M23.2531 16.175C23.7355 14.875 23.9995 13.4689 23.9995 12.0011C23.9995 10.5332 23.7355 9.12721 23.2531 7.82718L11.9995 6.78369L0.745902 7.82718C0.263559 9.12721 -0.000488281 10.5332 -0.000488281 12.0011C-0.000488281 13.4689 0.263559 14.875 0.745902 16.175L11.9995 17.2184L23.2531 16.175Z"
          fill="#FFDA44"
        />
        <path
          d="M12.0002 23.9997C17.1598 23.9997 21.5583 20.7432 23.2538 16.1736H0.746582C2.44214 20.7432 6.84061 23.9997 12.0002 23.9997Z"
          fill="#0052B4"
        />
        <path
          d="M12.0002 0.000732422C6.84061 0.000732422 2.44214 3.25723 0.746582 7.82684H23.2538C21.5583 3.25723 17.1598 0.000732422 12.0002 0.000732422Z"
          fill="#6DA544"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187506">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
