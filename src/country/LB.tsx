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
      <g clipPath="url(#clip0_4430_187545)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M12.0002 -0.000732422C7.24267 -0.000732422 3.13192 2.76794 1.19092 6.78189H22.8094C20.8685 2.76794 16.7577 -0.000732422 12.0002 -0.000732422Z"
          fill="#D80027"
        />
        <path
          d="M12.0002 23.9993C16.7577 23.9993 20.8685 21.2306 22.8095 17.2167H1.19092C3.13192 21.2306 7.24267 23.9993 12.0002 23.9993Z"
          fill="#D80027"
        />
        <path
          d="M15.1305 14.0862L12.0001 8.34705L8.86963 14.0862H11.2175V15.6514H12.7827V14.0862H15.1305Z"
          fill="#6DA544"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187545">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
