import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const CL = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187474)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 12.0003C24 18.6277 18.6274 24.0003 12 24.0003C5.37262 24.0003 0 18.6277 0 12.0003C0 5.37293 12 12.0003 12 12.0003C12 12.0003 21.0825 12.0003 24 12.0003Z"
        fill="#D80027"
      />
      <path
        d="M0 12C0 5.37262 5.37262 0 12 0C12 4.56352 12 12 12 12C12 12 4.17389 12 0 12Z"
        fill="#0052B4"
      />
      <path
        d="M7.14264 4.17346L7.91968 6.56493H10.4342L8.39992 8.0429L9.17692 10.4344L7.14264 8.95635L5.10836 10.4344L5.88536 8.0429L3.85107 6.56493H6.36559L7.14264 4.17346Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187474">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default CL;
