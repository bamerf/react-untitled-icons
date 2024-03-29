import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const SL = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187615)">
      <path
        d="M23.2536 16.1743C23.736 14.8744 24 13.4683 24 12.0005C24 10.5326 23.736 9.12655 23.2536 7.82656L12 6.78308L0.746391 7.82656C0.264 9.12655 0 10.5326 0 12.0005C0 13.4683 0.264 14.8744 0.746391 16.1743L12 17.2178L23.2536 16.1743Z"
        fill="#F0F0F0"
      />
      <path
        d="M11.9997 24.0006C17.1593 24.0006 21.5578 20.7441 23.2533 16.1744H0.746094C2.44166 20.7441 6.84012 24.0006 11.9997 24.0006Z"
        fill="#338AF3"
      />
      <path
        d="M11.9997 0.00012207C6.84012 0.00012207 2.44166 3.25662 0.746094 7.82623H23.2534C21.5578 3.25662 17.1593 0.00012207 11.9997 0.00012207Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187615">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default SL;
