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
      <g clipPath="url(#clip0_4430_187556)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#D80027"
        />
        <path
          d="M19.826 6.26099H4.17383V17.7393H19.826V6.26099Z"
          fill="#6DA544"
        />
        <path
          d="M13.9323 15.3914C12.0594 15.3914 10.541 13.873 10.541 12.0001C10.541 10.1272 12.0594 8.6088 13.9323 8.6088C14.5163 8.6088 15.0658 8.75645 15.5455 9.01642C14.793 8.28044 13.7638 7.82617 12.628 7.82617C10.3229 7.82617 8.4541 9.69489 8.4541 12.0001C8.4541 14.3052 10.3229 16.174 12.628 16.174C13.7638 16.174 14.793 15.7197 15.5455 14.9837C15.0658 15.2438 14.5163 15.3914 13.9323 15.3914Z"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187556">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
