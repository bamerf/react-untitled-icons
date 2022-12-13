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
      <g clipPath="url(#clip0_4430_187573)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M3.51451 20.4849C4.0179 20.9883 4.55499 21.4372 5.11838 21.8325L21.8326 5.11826C21.4374 4.55487 20.9884 4.01778 20.485 3.51439C19.9816 3.011 19.4445 2.56212 18.8811 2.16687L2.16699 18.8811C2.5622 19.4444 3.01112 19.9815 3.51451 20.4849Z"
          fill="#A2001D"
        />
        <path
          d="M3.51526 3.51478C-0.270555 7.30059 -0.997306 12.9862 1.33346 17.5022L17.5026 1.33307C12.9866 -0.997692 7.30098 -0.270848 3.51526 3.51478Z"
          fill="#0052B4"
        />
        <path
          d="M20.4859 20.4847C24.2716 16.699 24.9984 11.0134 22.6677 6.49731L6.49854 22.6665C11.0145 24.9972 16.7001 24.2705 20.4859 20.4847Z"
          fill="#496E2D"
        />
        <path
          d="M9.91307 6.78182L8.56842 7.41431L9.28448 8.71659L7.82437 8.43731L7.63931 9.91223L6.62231 8.8274L5.60526 9.91223L5.42029 8.43731L3.96014 8.71654L4.67615 7.41426L3.33154 6.78182L4.6762 6.14929L3.96014 4.8471L5.42025 5.12638L5.60531 3.65137L6.62231 4.73624L7.63936 3.65137L7.82437 5.12638L9.28448 4.8471L8.56851 6.14934L9.91307 6.78182Z"
          fill="#FFDA44"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187573">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;