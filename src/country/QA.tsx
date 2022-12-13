import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const QA = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187598)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24.0001 12C24.0001 5.37262 18.6275 0 12.0001 0C9.65264 0 7.46293 0.674766 5.61333 1.83989L8.24363 2.95744L4.6958 4.46484L8.24363 5.9722L4.6958 7.47952L8.24363 8.98678L4.6958 10.4939L8.24363 12.0008L4.6958 13.5082L8.24363 15.0154L4.6958 16.5225L8.24363 18.0297L4.6958 19.537L8.24363 21.0441L5.6145 22.161C7.46386 23.3256 9.65311 24 12.0001 24C18.6275 24 24.0001 18.6274 24.0001 12Z"
        fill="#751A46"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187598">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default QA;
