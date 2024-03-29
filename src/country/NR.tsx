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
      <g clipPath="url(#clip0_4430_187574)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#0052B4"
        />
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#FFDA44"
        />
        <path
          d="M12.0012 -0.000488281C5.72536 -0.000488281 0.575766 4.81737 0.046875 10.956H23.9555C23.4266 4.81737 18.277 -0.000488281 12.0012 -0.000488281Z"
          fill="#0052B4"
        />
        <path
          d="M12.0002 24.0001C18.276 24.0001 23.4256 19.1822 23.9545 13.0436H0.0458984C0.574789 19.1822 5.72438 24.0001 12.0002 24.0001Z"
          fill="#0052B4"
        />
        <path
          d="M9.91312 16.1745L8.56847 16.807L9.28448 18.1092L7.82437 17.8299L7.63936 19.3049L6.62231 18.2201L5.60531 19.3049L5.42029 17.8299L3.96014 18.1092L4.6762 16.807L3.33154 16.1745L4.67625 15.542L3.96014 14.2398L5.42025 14.5191L5.60536 13.0441L6.62231 14.1289L7.6394 13.0441L7.82437 14.5191L9.28453 14.2398L8.56851 15.542L9.91312 16.1745Z"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187574">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
