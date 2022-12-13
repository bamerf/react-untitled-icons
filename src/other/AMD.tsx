import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const AMD = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 21V12L4 19V28H13L20 21H11Z" fill="#19A771" />
    <path d="M28 4H4L11 11H21V21L28 28V4Z" fill="#19A771" />
  </svg>
));

export default AMD;
