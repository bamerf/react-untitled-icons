import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const BJ = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187446)">
      <path
        d="M7.82617 10.9568L8.86966 23.5869C9.86777 23.8559 10.9169 24.0003 12.0001 24.0003C18.6274 24.0003 24.0001 18.6276 24.0001 12.0003L7.82617 10.9568Z"
        fill="#D80027"
      />
      <path
        d="M7.82617 12.0002L8.86961 0.413635C9.86777 0.144619 10.9169 0.000244141 12.0001 0.000244141C18.6274 0.000244141 24.0001 5.37287 24.0001 12.0002H7.82617Z"
        fill="#FFDA44"
      />
      <path
        d="M-0.000488281 11.9997C-0.000488281 17.544 3.75987 22.2093 8.86906 23.5863V0.413086C3.75987 1.79009 -0.000488281 6.45537 -0.000488281 11.9997Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187446">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default BJ;
