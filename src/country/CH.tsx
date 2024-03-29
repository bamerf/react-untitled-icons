import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const CH = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187635)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#D80027"
      />
      <path
        d="M18.2605 9.91308H14.0866V5.73914H9.91266V9.91308H5.73877V14.087H9.91266V18.2609H14.0866V14.087H18.2605V9.91308Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187635">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default CH;
