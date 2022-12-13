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
      <g clipPath="url(#clip0_4430_187564)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#338AF3"
        />
        <path
          d="M12 5.21741L12.518 6.81172H14.1944L12.8382 7.79708L13.3562 9.39134L12 8.40603L10.6438 9.39134L11.1619 7.79708L9.80566 6.81172H11.4821L12 5.21741Z"
          fill="#F0F0F0"
        />
        <path
          d="M5.21729 11.9997L6.8116 11.4816V9.80518L7.79696 11.1615L9.39122 10.6434L8.40591 11.9997L9.39122 13.3558L7.79696 12.8377L6.8116 14.1939V12.5176L5.21729 11.9997Z"
          fill="#F0F0F0"
        />
        <path
          d="M12.0001 18.7829L11.4821 17.1886H9.80566L11.1619 16.2033L10.6439 14.609L12.0001 15.5943L13.3563 14.609L12.8382 16.2033L14.1944 17.1886H12.5181L12.0001 18.7829Z"
          fill="#F0F0F0"
        />
        <path
          d="M18.7828 11.9995L17.1885 12.5176V14.1939L16.2032 12.8377L14.6089 13.3557L15.5942 11.9995L14.6089 10.6434L16.2032 11.1615L17.1885 9.80518V11.4816L18.7828 11.9995Z"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187564">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
