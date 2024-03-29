import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const CD = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187601)">
      <path
        d="M6.50505 22.6698L15.3206 15.3194L22.6709 6.50387C21.5281 4.28913 19.716 2.47605 17.5022 1.33179L8.67967 8.67854L1.33301 17.501C2.47718 19.7149 4.29025 21.527 6.50505 22.6698Z"
        fill="#FFDA44"
      />
      <path
        d="M20.4855 20.4851C24.2714 16.6992 24.9982 11.0134 22.6673 6.49719L6.49756 22.667C11.0138 24.9978 16.6996 24.271 20.4855 20.4851Z"
        fill="#D80027"
      />
      <path
        d="M3.51436 3.51375C-0.271537 7.29965 -0.998285 12.9855 1.33248 17.5017L17.5023 1.33191C12.9861 -0.998946 7.30026 -0.272103 3.51436 3.51375Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187601">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default CD;
