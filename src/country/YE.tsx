import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const YE = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187454)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M12.0002 23.9992C17.1598 23.9992 21.5583 20.7427 23.2538 16.1731H0.746582C2.4421 20.7427 6.84061 23.9992 12.0002 23.9992Z"
        fill="black"
      />
      <path
        d="M12.0002 0.000732422C6.84061 0.000732422 2.4421 3.25723 0.746582 7.82684H23.2538C21.5583 3.25723 17.1598 0.000732422 12.0002 0.000732422Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187454">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default YE;
