import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Vercel = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="14" fill="#171717" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 9L23 20.6667H9L16 9Z"
      fill="#F5F5F5"
    />
  </svg>
));

export default Vercel;
