import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const BB = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187442)">
      <path
        d="M17.217 1.19084C15.6394 0.427997 13.8695 0.00012207 11.9996 0.00012207C10.1298 0.00012207 8.35988 0.427997 6.78225 1.19084L5.73877 12.0001L6.78225 22.8094C8.35988 23.5722 10.1298 24.0001 11.9996 24.0001C13.8695 24.0001 15.6394 23.5722 17.217 22.8094L18.2605 12.0001L17.217 1.19084Z"
        fill="#FFDA44"
      />
      <path
        d="M6.78262 1.19128C2.76872 3.13219 0 7.24261 0 12.0001C0 16.7577 2.76872 20.8681 6.78262 22.809V1.19128Z"
        fill="#0052B4"
      />
      <path
        d="M17.2173 1.19165V22.8094C21.2312 20.8685 23.9999 16.758 23.9999 12.0005C23.9999 7.24303 21.2312 3.13256 17.2173 1.19165Z"
        fill="#0052B4"
      />
      <path
        d="M15.6523 7.30337L16.3523 7.65334L15.6523 7.30337L14.9522 6.9534C14.9101 7.03783 13.996 8.8975 13.8467 11.7382H12.7827V7.30337L12.0001 6.25989L11.2175 7.30337V11.7382H10.1535C10.0041 8.8975 9.09015 7.03783 9.04792 6.9534L7.64795 7.65339C7.65761 7.67261 8.60884 9.60878 8.60884 12.5208V13.3034H11.2175V17.7382H12.7827V13.3034H15.3914V12.5207C15.3914 11.0152 15.6519 9.77378 15.8705 8.99744C16.1087 8.15087 16.3508 7.65648 16.3532 7.65156L15.6523 7.30337Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187442">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default BB;
