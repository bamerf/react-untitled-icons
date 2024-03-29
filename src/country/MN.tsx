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
      <g clipPath="url(#clip0_4430_187567)">
        <path
          d="M11.9999 24.0006C13.4677 24.0006 14.8738 23.7366 16.1737 23.2542L16.6955 12.0006L16.1738 0.747001C14.8738 0.264657 13.4677 0.000610352 11.9999 0.000610352C10.532 0.000610352 9.1259 0.264657 7.82596 0.747001L7.3042 12.0006L7.82592 23.2542C9.1259 23.7366 10.532 24.0006 11.9999 24.0006Z"
          fill="#0052B4"
        />
        <path
          d="M0 12.0001C0 17.1596 3.2565 21.5582 7.82611 23.2537V0.74646C3.2565 2.44198 0 6.84049 0 12.0001Z"
          fill="#A2001D"
        />
        <path
          d="M16.1738 0.745972V23.2532C20.7434 21.5577 23.9999 17.1592 23.9999 11.9996C23.9999 6.84 20.7434 2.44149 16.1738 0.745972Z"
          fill="#A2001D"
        />
        <path
          d="M6.78225 11.9989H5.73877V16.1728H6.78225V11.9989Z"
          fill="#FFDA44"
        />
        <path
          d="M2.60843 11.9989H1.56494V16.1728H2.60843V11.9989Z"
          fill="#FFDA44"
        />
        <path
          d="M4.17337 14.6085C4.74967 14.6085 5.21685 14.1413 5.21685 13.565C5.21685 12.9887 4.74967 12.5215 4.17337 12.5215C3.59707 12.5215 3.12988 12.9887 3.12988 13.565C3.12988 14.1413 3.59707 14.6085 4.17337 14.6085Z"
          fill="#FFDA44"
        />
        <path
          d="M4.17357 10.4336C4.46171 10.4336 4.69529 10.2 4.69529 9.91185C4.69529 9.62372 4.46171 9.39014 4.17357 9.39014C3.88544 9.39014 3.65186 9.62372 3.65186 9.91185C3.65186 10.2 3.88544 10.4336 4.17357 10.4336Z"
          fill="#FFDA44"
        />
        <path
          d="M5.21685 15.1288H3.12988V16.1723H5.21685V15.1288Z"
          fill="#FFDA44"
        />
        <path
          d="M5.21685 10.9551H3.12988V11.9986H5.21685V10.9551Z"
          fill="#FFDA44"
        />
        <path
          d="M4.17409 6.26001L4.54365 7.3972H5.73934L4.77207 8.10004L5.14136 9.23723L4.17409 8.53439L3.20687 9.23723L3.57615 8.10004L2.60889 7.3972H3.80457L4.17409 6.26001Z"
          fill="#FFDA44"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187567">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
