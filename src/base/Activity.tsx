import { forwardRef } from 'react';
import type { BaseIconProps } from '../types';

const Activity = forwardRef<SVGSVGElement, BaseIconProps>(
  ({ color = 'currentColor', size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 12H18L15 21L9 3L6 12H2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);

export default Activity;
