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
      <g clipPath="url(#clip0_4430_187550)">
        <path
          d="M23.2541 16.1743C23.7365 14.8744 24.0005 13.4683 24.0005 12.0005C24.0005 10.5326 23.7365 9.1265 23.2541 7.82656L12.0005 6.78308L0.746879 7.82656C0.264488 9.1265 0.000488281 10.5326 0.000488281 12.0005C0.000488281 13.4683 0.264488 14.8744 0.746879 16.1743L12.0005 17.2178L23.2541 16.1743Z"
          fill="#6DA544"
        />
        <path
          d="M23.2538 7.82574C21.5583 3.25613 17.1598 -0.000366211 12.0002 -0.000366211C6.84061 -0.000366211 2.4421 3.25613 0.746582 7.82574H23.2538Z"
          fill="#FFDA44"
        />
        <path
          d="M12.0002 24.0008C17.1598 24.0008 21.5583 20.7443 23.2538 16.1747H0.746582C2.4421 20.7443 6.84061 24.0008 12.0002 24.0008Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187550">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
