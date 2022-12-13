import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const PY = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187592)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M12.0002 0C7.24267 0 3.13192 2.76867 1.19092 6.78262H22.8094C20.8685 2.76867 16.7577 0 12.0002 0Z"
        fill="#D80027"
      />
      <path
        d="M12.0002 24.0008C16.7577 24.0008 20.8685 21.2321 22.8095 17.2181H1.19092C3.13192 21.2321 7.24267 24.0008 12.0002 24.0008Z"
        fill="#0052B4"
      />
      <path
        d="M14.9509 8.52661L13.8442 9.63338C14.3162 10.1055 14.6083 10.7576 14.6083 11.478C14.6083 12.9188 13.4403 14.0867 11.9996 14.0867C10.5589 14.0867 9.39089 12.9187 9.39089 11.478C9.39089 10.7576 9.68292 10.1055 10.155 9.63338L9.04823 8.52661C8.29284 9.28186 7.82568 10.3253 7.82568 11.478C7.82568 13.7832 9.6944 15.6519 11.9996 15.6519C14.3048 15.6519 16.1735 13.7832 16.1735 11.478C16.1734 10.3253 15.7063 9.28186 14.9509 8.52661Z"
        fill="#6DA544"
      />
      <path
        d="M11.9998 9.9126L12.3883 11.1084H13.6456L12.6284 11.8473L13.017 13.043L11.9998 12.3041L10.9826 13.043L11.3711 11.8473L10.354 11.1084H11.6112L11.9998 9.9126Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187592">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default PY;
