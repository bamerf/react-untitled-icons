import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const PR = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187597)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M11.999 -0.000610352C8.07308 -0.000610352 4.58769 1.88484 2.39844 4.79939H21.5995C19.4102 1.88484 15.9248 -0.000610352 11.999 -0.000610352Z"
        fill="#D80027"
      />
      <path
        d="M11.999 23.9993C15.9248 23.9993 19.4102 22.1139 21.5995 19.1993H2.39844C4.58769 22.1139 8.07308 23.9993 11.999 23.9993Z"
        fill="#D80027"
      />
      <path
        d="M-0.000488281 11.9994C-0.000488281 12.8213 0.0823867 13.6239 0.23984 14.3994H23.7593C23.9167 13.6239 23.9995 12.8213 23.9995 11.9994C23.9995 11.1774 23.9166 10.3748 23.7592 9.59937H0.23984C0.0823867 10.3748 -0.000488281 11.1774 -0.000488281 11.9994Z"
        fill="#D80027"
      />
      <path
        d="M3.51422 3.51538C-1.17206 8.20166 -1.17206 15.7997 3.51422 20.486C5.45077 18.5495 7.31325 16.687 11.9995 12.0007L3.51422 3.51538Z"
        fill="#0052B4"
      />
      <path
        d="M4.85694 8.86877L5.6339 11.2601H8.14855L6.11427 12.7382L6.89118 15.1297L4.85694 13.6517L2.82262 15.1297L3.59971 12.7382L1.56543 11.2601H4.0799L4.85694 8.86877Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187597">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default PR;
