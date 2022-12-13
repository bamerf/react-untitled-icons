import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Visa = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16Z"
      fill="#172A73"
    />
    <path
      d="M5.57422 9.74463V10.3404L7.75216 10.6833C9.29537 10.9262 10.5391 12.0862 10.8987 13.6178L13.4482 24.4775C13.5113 24.7463 13.7495 24.9361 14.0236 24.9361H17.6013C17.8373 24.9361 18.0507 24.7947 18.1442 24.5763L24.3157 10.1605C24.3999 9.96385 24.2568 9.74463 24.0442 9.74463H20.7479C20.5099 9.74463 20.2951 9.88845 20.2029 10.1095L16.0686 20.0212L14.4194 11.201C14.2615 10.3564 13.5293 9.74463 12.6764 9.74463H5.57422Z"
      fill="white"
    />
  </svg>
));

export default Visa;
