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
      <g clipPath="url(#clip0_4430_187544)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M12.0007 -0.000732422C6.45634 -0.000732422 1.79106 3.75963 0.414062 8.86881H23.5873C22.2103 3.75963 17.545 -0.000732422 12.0007 -0.000732422Z"
          fill="#A2001D"
        />
        <path
          d="M12.0002 23.9986C17.5445 23.9986 22.2098 20.2382 23.5868 15.129H0.413574C1.79057 20.2382 6.45586 23.9986 12.0002 23.9986Z"
          fill="#A2001D"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187544">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
