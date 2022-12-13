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
      <g clipPath="url(#clip0_4430_187508)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M23.8984 10.4348H13.5653H13.5653V0.101578C13.0529 0.034875 12.5305 0 12 0C11.4695 0 10.9471 0.034875 10.4348 0.101578V10.4347V10.4347H0.101578C0.034875 10.9471 0 11.4695 0 12C0 12.5306 0.034875 13.0529 0.101578 13.5652H10.4347H10.4347V23.8984C10.9471 23.9651 11.4695 24 12 24C12.5305 24 13.0529 23.9652 13.5652 23.8984V13.5653V13.5653H23.8984C23.9651 13.0529 24 12.5306 24 12C24 11.4695 23.9651 10.9471 23.8984 10.4348Z"
          fill="#D80027"
        />
        <path
          d="M7.30428 5.73981V4.17456H5.73908V5.73981H4.17383V7.30501H5.73908V8.87022H7.30428V7.30501H8.86948V5.73981H7.30428Z"
          fill="#D80027"
        />
        <path
          d="M18.2608 5.73981V4.17456H16.6956V5.73981H15.1304V7.30501H16.6956V8.87022H18.2608V7.30501H19.826V5.73981H18.2608Z"
          fill="#D80027"
        />
        <path
          d="M7.30428 16.6967V15.1315H5.73908V16.6967H4.17383V18.2619H5.73908V19.8271H7.30428V18.2619H8.86948V16.6967H7.30428Z"
          fill="#D80027"
        />
        <path
          d="M18.2608 16.6967V15.1315H16.6956V16.6967H15.1304V18.2619H16.6956V19.8271H18.2608V18.2619H19.826V16.6967H18.2608Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187508">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;