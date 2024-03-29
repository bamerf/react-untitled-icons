import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const PE = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187593)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M23.9999 12.0015C23.9999 6.84196 20.7434 2.44339 16.1738 0.747925V23.2552C20.7434 21.5596 23.9999 17.1611 23.9999 12.0015Z"
        fill="#D80027"
      />
      <path
        d="M0 12.0006C0 17.1603 3.2565 21.5587 7.82611 23.2543V0.74707C3.2565 2.44254 0 6.8411 0 12.0006Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187593">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default PE;
