import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const TechCrunch = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_4522_190410)" />
      <path d="M16 11V14H13V21H10V14H7V11H16Z" fill="white" />
      <path d="M19 14V18H25V21H16V14H19Z" fill="white" />
      <path d="M19 14V11H25V14H19Z" fill="white" />
      <defs>
        <linearGradient
          id="paint0_linear_4522_190410"
          x1="10"
          y1="5"
          x2="24.5"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13B069" />
          <stop offset="1" stopColor="#12C833" />
        </linearGradient>
      </defs>
    </svg>
  )
);

export default TechCrunch;
