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
      <g clipPath="url(#clip0_4430_187553)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M7.82617 11.9995V23.2531C9.12611 23.7355 10.5322 23.9995 12.0001 23.9995C18.6274 23.9995 24.0001 18.6268 24.0001 11.9995C24.0001 5.37208 7.82617 11.9995 7.82617 11.9995Z"
          fill="#6DA544"
        />
        <path
          d="M12.0001 0.000244141C10.5322 0.000244141 9.12611 0.264291 7.82617 0.746635V12.0002C7.82617 12.0002 18.4697 12.0002 24.0001 12.0002C24.0001 5.37287 18.6274 0.000244141 12.0001 0.000244141Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187553">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
