import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const TG = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187641)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#FFDA44"
      />
      <path
        d="M12.0002 0.000366211C11.9915 0.000459961 11.4785 4.80037 11.4785 4.80037H21.6008C19.4115 1.88582 15.9261 0.000366211 12.0002 0.000366211Z"
        fill="#496E2D"
      />
      <path
        d="M12.0004 24.0003C15.9263 24.0003 19.4117 22.1149 21.6009 19.2003H2.3999C4.58915 22.1149 8.07454 24.0003 12.0004 24.0003Z"
        fill="#496E2D"
      />
      <path
        d="M23.7599 9.60034H11.4785L12.0002 14.4003H23.7599C23.9174 13.6249 24.0002 12.8223 24.0002 12.0003C24.0002 11.1784 23.9174 10.3758 23.7599 9.60034Z"
        fill="#496E2D"
      />
      <path
        d="M12 14.4C12 11.8957 12 2.81737 12 0C5.37262 0 0 5.37262 0 12C0 12.822 0.082875 13.6245 0.240281 14.4H12Z"
        fill="#D80027"
      />
      <path
        d="M6.62106 5.73828L7.39806 8.12961H9.91267L7.87843 9.60772L8.65534 11.9991L6.62106 10.5212L4.58678 11.9991L5.36382 9.60772L3.32959 8.12961H5.84411L6.62106 5.73828Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187641">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default TG;
