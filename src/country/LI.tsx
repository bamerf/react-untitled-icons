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
      <g clipPath="url(#clip0_4430_187549)">
        <path
          d="M24 11.9995C24 18.6269 18.6274 23.9995 12 23.9995C5.37262 23.9995 0 18.6269 0 11.9995C0.521719 11.9995 12 10.4343 12 10.4343L24 11.9995Z"
          fill="#D80027"
        />
        <path
          d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12"
          fill="#0052B4"
        />
        <path
          d="M8.86974 8.34736C8.86974 7.48294 8.16896 6.78216 7.30454 6.78216C6.90352 6.78216 6.53804 6.9331 6.26106 7.18102V6.26039H6.78277V5.21691H6.26106V4.69519H5.21757V5.21691H4.69585V6.26039H5.21757V7.18102C4.94059 6.9331 4.5751 6.78216 4.17409 6.78216C3.30967 6.78216 2.60889 7.48294 2.60889 8.34736C2.60889 8.81082 2.8105 9.22707 3.1306 9.51371V10.4343H8.34798V9.51371C8.66818 9.22707 8.86974 8.81082 8.86974 8.34736Z"
          fill="#FFDA44"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187549">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
