import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const VN = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187451)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#D80027"
      />
      <path
        d="M12 6.26123L13.2951 10.247H17.4859L14.0954 12.7103L15.3905 16.696L12 14.2327L8.60956 16.696L9.90463 12.7103L6.51416 10.247H10.705L12 6.26123Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187451">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default VN;