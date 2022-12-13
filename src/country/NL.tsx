import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const NL = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187576)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M12.0002 -0.000488281C6.84061 -0.000488281 2.4421 3.25601 0.746582 7.82562H23.2538C21.5583 3.25601 17.1598 -0.000488281 12.0002 -0.000488281Z"
        fill="#A2001D"
      />
      <path
        d="M12.0002 24.0004C17.1598 24.0004 21.5583 20.7439 23.2538 16.1743H0.746582C2.4421 20.7439 6.84061 24.0004 12.0002 24.0004Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187576">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default NL;
