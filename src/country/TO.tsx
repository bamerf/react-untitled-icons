import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const TO = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187643)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M7.82626 6.26137V4.69617H6.26101V6.26137H4.6958V7.82662H6.26101V9.39183H7.82626V7.82662H9.39146V6.26137H7.82626Z"
        fill="#D80027"
      />
      <path
        d="M12 0V12C5.37262 12 2.73867 12 0 12C0 18.6274 5.37262 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37262 18.6274 0 12 0Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187643">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default TO;
