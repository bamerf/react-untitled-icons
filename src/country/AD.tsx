import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const AD = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187429)">
      <path
        d="M6.78274 22.8093C8.36037 23.5721 10.1302 24 12.0001 24C13.87 24 15.6399 23.5721 17.2175 22.8093L18.261 12L17.2175 1.19072C15.6399 0.427875 13.87 0 12.0001 0C10.1302 0 8.36037 0.427875 6.78274 1.19072L5.73926 12L6.78274 22.8093Z"
        fill="#FFDA44"
      />
      <path
        d="M17.2168 22.809C21.2308 20.8681 23.9994 16.7576 23.9994 12.0001C23.9994 7.24266 21.2308 3.13219 17.2168 1.19128V22.809Z"
        fill="#D80027"
      />
      <path
        d="M6.78214 22.809V1.19128C2.76818 3.13219 -0.000488281 7.24261 -0.000488281 12.0001C-0.000488281 16.7577 2.76818 20.8681 6.78214 22.809Z"
        fill="#0052B4"
      />
      <path
        d="M12 16.1733C12 14.2584 12 11.9994 12 11.9994H15.1304V13.5646C15.1304 13.8365 14.6087 14.8329 13.3209 15.6516C12.8332 15.9617 12.3283 16.0614 12 16.1733Z"
        fill="#D80027"
      />
      <path
        d="M11.9996 8.86877H8.86914V11.9992H11.9996V8.86877Z"
        fill="#D80027"
      />
      <path
        d="M13.5653 7.8262C13.5653 7.24987 13.0981 6.78271 12.5218 6.78271C12.3315 6.78271 12.1536 6.83446 12.0001 6.92343C11.8465 6.83446 11.6687 6.78271 11.4783 6.78271C10.9021 6.78271 10.4349 7.24987 10.4349 7.8262H7.82617V13.0435C7.82617 14.9858 9.36864 16.1091 10.5782 16.6914C10.4877 16.846 10.4349 17.0254 10.4349 17.2175C10.4349 17.7938 10.9021 18.261 11.4783 18.261C11.6687 18.261 11.8465 18.2093 12.0001 18.1203C12.1537 18.2093 12.3315 18.261 12.5218 18.261C13.0981 18.261 13.5653 17.7938 13.5653 17.2175C13.5653 17.0254 13.5124 16.846 13.4218 16.6914C14.6314 16.1091 16.174 14.9859 16.174 13.0435V7.8262H13.5653ZM14.6088 13.0435C14.6088 13.3155 14.6087 14.1428 13.321 14.9616C12.8332 15.2717 12.3284 15.4728 12.0001 15.5846C11.6718 15.4728 11.1669 15.2717 10.6791 14.9616C9.39138 14.1428 9.39138 13.3155 9.39138 13.0435V9.3914H14.6088V13.0435Z"
        fill="#FF9811"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187429">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default AD;