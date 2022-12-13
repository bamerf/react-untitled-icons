import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Azure = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 26.4118L19.3835 8.2278L15.2415 16.4052L22.5335 24.6899L9 26.1965L30 26.4118ZM9.05855 12.8006L2 24.4753L8.00855 23.8833L18.5665 5L9.05855 12.8006Z"
      fill="#008AD7"
    />
  </svg>
));

export default Azure;
