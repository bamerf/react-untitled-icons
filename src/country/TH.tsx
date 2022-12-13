import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const TH = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187640)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M23.2541 7.82593H0.746879C0.264488 9.12591 0.000488281 10.532 0.000488281 11.9998C0.000488281 13.4677 0.264488 14.8737 0.746879 16.1737H23.2541C23.7365 14.8737 24.0005 13.4677 24.0005 11.9998C24.0005 10.532 23.7365 9.12591 23.2541 7.82593Z"
        fill="#0052B4"
      />
      <path
        d="M12.0014 -0.000610352C8.36432 -0.000610352 5.10543 1.6177 2.90479 4.17328H21.098C18.8974 1.6177 15.6385 -0.000610352 12.0014 -0.000610352Z"
        fill="#D80027"
      />
      <path
        d="M21.097 19.826H2.90381C5.10445 22.3816 8.36334 23.9999 12.0004 23.9999C15.6375 23.9999 18.8964 22.3816 21.097 19.826Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187640">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default TH;
