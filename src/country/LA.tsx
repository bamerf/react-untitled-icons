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
      <g clipPath="url(#clip0_4430_187543)">
        <path
          d="M22.809 6.78189C20.868 2.76794 16.7572 -0.000732422 11.9997 -0.000732422C7.24218 -0.000732422 3.13143 2.76794 1.19043 6.78189L11.9997 7.82538L22.809 6.78189Z"
          fill="#D80027"
        />
        <path
          d="M1.19043 17.2162C3.13143 21.2302 7.24218 23.9988 11.9997 23.9988C16.7572 23.9988 20.868 21.2302 22.809 17.2162L11.9997 16.1727L1.19043 17.2162Z"
          fill="#D80027"
        />
        <path
          d="M22.8088 6.78174H1.19023C0.427387 8.35932 -0.000488281 10.1292 -0.000488281 11.9991C-0.000488281 13.869 0.427387 15.6389 1.19023 17.2165H22.8087C23.5717 15.6389 23.9995 13.869 23.9995 11.9991C23.9995 10.1292 23.5717 8.35932 22.8088 6.78174Z"
          fill="#0052B4"
        />
        <path
          d="M12.0001 16.1736C14.3052 16.1736 16.174 14.3049 16.174 11.9997C16.174 9.69452 14.3052 7.82581 12.0001 7.82581C9.69489 7.82581 7.82617 9.69452 7.82617 11.9997C7.82617 14.3049 9.69489 16.1736 12.0001 16.1736Z"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187543">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
