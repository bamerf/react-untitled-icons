import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const SC = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187614)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M20.1001 3.14644C17.9654 1.19212 15.1219 -0.000610352 11.9997 -0.000610352C11.4885 -0.000610352 10.9849 0.0315928 10.4905 0.0936084L4.69532 6.78201L0.379395 15.0055C0.658207 16.0865 1.08449 17.1081 1.63447 18.0485L11.9997 11.9994L20.1001 3.14644Z"
        fill="#FFDA44"
      />
      <path
        d="M21.9903 18.6479L5.20117 21.8879C7.13378 23.2192 9.47556 23.9993 11.9998 23.9993C16.168 23.9993 19.8392 21.8738 21.9903 18.6479Z"
        fill="#6DA544"
      />
      <path
        d="M20.1021 3.14819L1.6416 18.0603C2.12446 18.8838 2.70257 19.6446 3.36102 20.3276L23.9999 11.9996C23.9999 8.49522 22.4976 5.34204 20.1021 3.14819Z"
        fill="#D80027"
      />
      <path
        d="M-0.000488281 12C-0.000488281 13.0382 0.131418 14.0455 0.379246 15.0062L10.4904 0.0942383C4.57536 0.836457 -0.000488281 5.88377 -0.000488281 12Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187614">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default SC;
