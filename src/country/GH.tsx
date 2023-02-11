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
      <g clipPath="url(#clip0_4430_187510)">
        <path
          d="M0 11.9991C0 13.467 0.264047 14.873 0.746391 16.173L12 16.6948L23.2536 16.1731C23.736 14.873 24 13.467 24 11.9991C24 10.5313 23.736 9.12522 23.2536 7.82523L12 7.30347L0.746391 7.82519C0.264047 9.12522 0 10.5313 0 11.9991Z"
          fill="#FFDA44"
        />
        <path
          d="M11.9997 -0.000976562C6.84012 -0.000976562 2.44161 3.25552 0.746094 7.82513H23.2534C21.5578 3.25552 17.1593 -0.000976562 11.9997 -0.000976562Z"
          fill="#D80027"
        />
        <path
          d="M23.2538 16.1741H0.746582C2.4421 20.7436 6.84061 24.0002 12.0002 24.0002C17.1598 24.0002 21.5583 20.7436 23.2538 16.1741Z"
          fill="#496E2D"
        />
        <path
          d="M12 7.82629L13.0359 11.0147H16.3888L13.6764 12.9855L14.7124 16.1741L12 14.2035L9.28753 16.1741L10.3237 12.9855L7.61133 11.0147H10.964L12 7.82629Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187510">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;