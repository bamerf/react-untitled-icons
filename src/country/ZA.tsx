import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const ZA = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187623)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M3.51422 20.4853C-1.17206 15.7989 -1.17206 8.20098 3.51422 3.51465C3.51389 3.51516 10.4343 12 10.4343 12L3.51422 20.4853Z"
        fill="black"
      />
      <path
        d="M10.4351 12.0002L1.59187 6.02429C1.3177 6.50087 1.07591 6.99831 0.868164 7.51318L5.34515 12.0003L0.868305 16.4876C1.07587 17.0021 1.31741 17.4992 1.5914 17.9755L10.4351 12.0002Z"
        fill="#FFDA44"
      />
      <path
        d="M23.8987 10.4347H10.4347L3.51482 3.51477C2.76914 4.26046 2.12128 5.10379 1.59178 6.02399L7.55611 11.9999L1.59131 17.975C2.12081 18.8955 2.76895 19.7391 3.51482 20.485L10.4347 13.5651H23.8987C23.9654 13.0528 24.0002 12.5304 24.0002 11.9999C24.0002 11.4694 23.9654 10.947 23.8987 10.4347Z"
        fill="#6DA544"
      />
      <path
        d="M4.69385 21.5181C6.71739 23.0735 9.25038 23.9988 11.9999 23.9988C17.5442 23.9988 22.2095 20.2385 23.5865 15.1293H11.0827L4.69385 21.5181Z"
        fill="#0052B4"
      />
      <path
        d="M23.5865 8.86869C22.2095 3.7595 17.5442 -0.000854492 11.9999 -0.000854492C9.25038 -0.000854492 6.71739 0.924505 4.69385 2.47991L11.0826 8.86869H23.5865Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187623">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default ZA;