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
      <g clipPath="url(#clip0_4430_187561)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#496E2D"
        />
        <path
          d="M11.9996 13.8637C10.0015 13.8637 8.33226 12.4594 7.92271 10.5842C7.85981 10.8724 7.82568 11.1714 7.82568 11.4786C7.82568 13.7838 9.69436 15.6525 11.9996 15.6525C14.3048 15.6525 16.1735 13.7838 16.1735 11.4786C16.1735 11.1714 16.1393 10.8724 16.0764 10.5841C15.6669 12.4594 13.9977 13.8637 11.9996 13.8637Z"
          fill="#FFDA44"
        />
        <path
          d="M11.9997 8.34778L12.3882 9.54351H13.6456L12.6284 10.2825L13.0169 11.4782L11.9997 10.7392L10.9826 11.4782L11.3711 10.2825L10.354 9.54351H11.6112L11.9997 8.34778Z"
          fill="#FFDA44"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187561">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
