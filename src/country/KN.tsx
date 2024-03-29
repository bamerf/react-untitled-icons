import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const KN = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187606)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37257 18.6274 0 12 0C5.37257 0 0 5.37257 0 12C0 18.6274 5.37257 24 12 24Z"
        fill="#FFDA44"
      />
      <path
        d="M3.51491 20.485C4.0183 20.9884 4.55544 21.4374 5.11883 21.8326L21.833 5.11844C21.4378 4.555 20.9889 4.0179 20.4854 3.51451C19.982 3.01112 19.4449 2.56229 18.8815 2.16699L2.16748 18.8812C2.56264 19.4446 3.01151 19.9816 3.51491 20.485Z"
        fill="black"
      />
      <path
        d="M3.51426 3.51463C-0.271509 7.3004 -0.998308 12.986 1.33251 17.502L17.5016 1.33297C12.9856 -0.997801 7.2999 -0.271002 3.51426 3.51463Z"
        fill="#6DA544"
      />
      <path
        d="M20.4855 20.4847C24.2712 16.699 24.998 11.0134 22.6673 6.49731L6.49805 22.6665C11.0141 24.9972 16.6997 24.2705 20.4855 20.4847Z"
        fill="#D80027"
      />
      <path
        d="M7.62971 14.1575L8.74993 14.7283L9.63896 13.8394L9.44228 15.081L10.5624 15.6519L9.32068 15.8485L9.12399 17.0903L8.55324 15.9701L7.31152 16.1667L8.20051 15.2778L7.62971 14.1575Z"
        fill="#F0F0F0"
      />
      <path
        d="M14.1561 7.63044L15.2763 8.20124L16.1653 7.31226L15.9686 8.55393L17.0888 9.12477L15.8471 9.32146L15.6504 10.5632L15.0796 9.44301L13.8379 9.63965L14.7269 8.75066L14.1561 7.63044Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187606">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default KN;
