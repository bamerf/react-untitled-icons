import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const BF = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187466)">
      <path
        d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12C23.4783 12 12 13.5652 12 13.5652L0 12Z"
        fill="#D80027"
      />
      <path
        d="M24 12.0007C24 18.6281 18.6274 24.0007 12 24.0007C5.37262 24.0007 0 18.6281 0 12.0007"
        fill="#6DA544"
      />
      <path
        d="M11.9998 7.82544L12.9062 10.6153H15.84L13.4666 12.3397L14.3731 15.1298L11.9998 13.4055L9.62648 15.1298L10.5331 12.3397L8.15967 10.6153H11.0933L11.9998 7.82544Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187466">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default BF;
