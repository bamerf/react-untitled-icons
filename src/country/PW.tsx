import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const PW = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187588)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#338AF3"
      />
      <path
        d="M9.3912 17.2183C12.2727 17.2183 14.6086 14.8824 14.6086 12.0009C14.6086 9.11947 12.2727 6.78357 9.3912 6.78357C6.50973 6.78357 4.17383 9.11947 4.17383 12.0009C4.17383 14.8824 6.50973 17.2183 9.3912 17.2183Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187588">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default PW;
