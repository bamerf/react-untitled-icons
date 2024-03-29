import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const AM = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187434)">
      <path
        d="M24 12.0001C24 10.5323 23.736 9.12615 23.2536 7.82621L12 7.30444L0.746391 7.82616C0.264047 9.12614 0 10.5323 0 12.0001C0 13.4679 0.264047 14.874 0.746391 16.174L12 16.6957L23.2536 16.174C23.736 14.874 24 13.4679 24 12.0001Z"
        fill="#0052B4"
      />
      <path
        d="M12.0002 23.9996C17.1598 23.9996 21.5583 20.7431 23.2538 16.1735H0.746582C2.4421 20.7431 6.84061 23.9996 12.0002 23.9996Z"
        fill="#FF9811"
      />
      <path
        d="M0.746094 7.82611H23.2534C21.5578 3.2565 17.1593 0 11.9997 0C6.84012 0 2.44161 3.2565 0.746094 7.82611Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187434">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default AM;
