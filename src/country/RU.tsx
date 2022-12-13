import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const RU = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187603)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M23.2541 16.1735C23.7365 14.8735 24.0005 13.4674 24.0005 11.9996C24.0005 10.5317 23.7365 9.12567 23.2541 7.82568H0.746879C0.264535 9.12567 0.000488281 10.5317 0.000488281 11.9996C0.000488281 13.4674 0.264535 14.8735 0.746879 16.1735L12.0005 17.2169L23.2541 16.1735Z"
        fill="#0052B4"
      />
      <path
        d="M12.0002 23.9995C17.1598 23.9995 21.5583 20.743 23.2538 16.1733H0.746582C2.4421 20.743 6.84061 23.9995 12.0002 23.9995Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187603">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default RU;
