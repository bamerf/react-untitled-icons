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
      <g clipPath="url(#clip0_4430_187513)">
        <path
          d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12C23.4783 12 12 13.5652 12 13.5652L0 12Z"
          fill="#F0F0F0"
        />
        <path
          d="M24.0005 12.0005C24.0005 18.6279 18.6279 24.0005 12.0005 24.0005C5.37311 24.0005 0.000488281 18.6279 0.000488281 12.0005"
          fill="#D80027"
        />
        <path
          d="M8.34754 17.7396C11.5172 17.7396 14.0867 15.1701 14.0867 12.0005C14.0867 8.83085 11.5172 6.26135 8.34754 6.26135C5.1779 6.26135 2.6084 8.83085 2.6084 12.0005C2.6084 15.1701 5.1779 17.7396 8.34754 17.7396Z"
          fill="#F0F0F0"
        />
        <path
          d="M2.6084 12.0005C2.6084 8.83095 5.1779 6.26135 8.34754 6.26135C11.5172 6.26135 14.0867 8.8309 14.0867 12.0005"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187513">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
