import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Microsoft = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4430_187541)">
        <path
          d="M23.2541 16.173C23.7364 14.873 24.0005 13.467 24.0005 11.9991C24.0005 10.5313 23.7364 9.12521 23.2541 7.82522L12.0005 6.78174L0.746879 7.82522C0.264535 9.12521 0.000488281 10.5313 0.000488281 11.9991C0.000488281 13.467 0.264535 14.873 0.746879 16.173L12.0005 17.2165L23.2541 16.173Z"
          fill="#F0F0F0"
        />
        <path
          d="M12.0002 23.9996C17.1598 23.9996 21.5583 20.7431 23.2538 16.1735H0.746582C2.44214 20.7431 6.84061 23.9996 12.0002 23.9996Z"
          fill="#D80027"
        />
        <path
          d="M12.0002 -0.000488281C6.84061 -0.000488281 2.44214 3.25601 0.746582 7.82562H23.2538C21.5583 3.25601 17.1598 -0.000488281 12.0002 -0.000488281Z"
          fill="#6DA544"
        />
        <path
          d="M3.5152 3.51453C-1.17108 8.20081 -1.17108 15.7988 3.5152 20.4852C4.7384 19.2619 5.93231 18.068 7.82657 16.1738V7.82595L3.5152 3.51453Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187541">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
