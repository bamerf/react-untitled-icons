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
      <g clipPath="url(#clip0_4430_187558)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M12 -0.000488281C18.6274 -0.000488281 24 5.37214 24 11.9995C24 18.6269 18.6274 23.9995 12 23.9995"
          fill="#D80027"
        />
        <path
          d="M8.34774 4.69624V3.13104H6.78253V4.69624H5.21729V6.26145H6.78253V7.82669H8.34774V6.26145H9.91294V4.69624H8.34774Z"
          fill="#ACABB1"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187558">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
