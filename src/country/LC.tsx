import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const LC = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187629)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#338AF3"
      />
      <path
        d="M7.56543 16.174H16.435L12.0002 5.73926L7.56543 16.174Z"
        fill="#F3F3F3"
      />
      <path
        d="M9.10645 15.1303L12 8.54858L14.8936 15.1303H9.10645Z"
        fill="#333333"
      />
      <path
        d="M7.56543 16.1746H16.435L12.0002 12.0007L7.56543 16.1746Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187629">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default LC;
