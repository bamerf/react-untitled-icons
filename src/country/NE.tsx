import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const NE = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187579)">
      <path
        d="M1.19023 6.78201C0.427387 8.35964 -0.000488281 10.1295 -0.000488281 11.9994C-0.000488281 13.8693 0.427387 15.6391 1.19023 17.2168L11.9995 18.2603L22.8088 17.2168C23.5716 15.6391 23.9995 13.8693 23.9995 11.9994C23.9995 10.1295 23.5716 8.35964 22.8088 6.78201L11.9995 5.73853L1.19023 6.78201Z"
        fill="#F0F0F0"
      />
      <path
        d="M1.19092 17.2183C3.13182 21.2322 7.24225 24.0009 11.9998 24.0009C16.7573 24.0009 20.8677 21.2322 22.8086 17.2183H1.19092Z"
        fill="#6DA544"
      />
      <path
        d="M1.19092 6.78238H22.8086C20.8677 2.76843 16.7573 -0.000244141 11.9998 -0.000244141C7.24229 -0.000244141 3.13182 2.76843 1.19092 6.78238Z"
        fill="#FF9811"
      />
      <path
        d="M12.0001 16.1742C14.3052 16.1742 16.174 14.3055 16.174 12.0003C16.174 9.69513 14.3052 7.82642 12.0001 7.82642C9.69489 7.82642 7.82617 9.69513 7.82617 12.0003C7.82617 14.3055 9.69489 16.1742 12.0001 16.1742Z"
        fill="#FF9811"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187579">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default NE;
