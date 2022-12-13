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
      <g clipPath="url(#clip0_4430_187503)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M23.8984 10.4347H9.39136H9.39131V0.285156C8.28234 0.531062 7.23098 0.929641 6.26086 1.459V10.4346V10.4347H0.101578C0.0347813 10.9471 0 11.4694 0 11.9999C0 12.5304 0.0347813 13.0528 0.101578 13.5651H6.26081H6.26086V22.5408C7.23098 23.0701 8.28234 23.4688 9.39131 23.7146V13.5653V13.5652H23.8984C23.9651 13.0528 24 12.5304 24 11.9999C24 11.4694 23.9651 10.9471 23.8984 10.4347Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187503">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
