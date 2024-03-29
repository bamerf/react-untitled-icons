import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const GM = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187507)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M12.0003 0.000793457C7.03927 0.000793457 2.78171 3.01139 0.954102 7.30514H23.0465C21.2189 3.01139 16.9613 0.000793457 12.0003 0.000793457Z"
        fill="#A2001D"
      />
      <path
        d="M12.0003 24.0007C16.9613 24.0007 21.2189 20.9901 23.0465 16.6964H0.954102C2.78171 20.9901 7.03927 24.0007 12.0003 24.0007Z"
        fill="#496E2D"
      />
      <path
        d="M23.5866 8.86963H0.413391C0.144375 9.86774 0 10.9169 0 12.0001C0 13.0832 0.144375 14.1324 0.413391 15.1305H23.5867C23.8556 14.1324 24 13.0832 24 12.0001C24 10.9169 23.8556 9.86774 23.5866 8.86963Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187507">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default GM;
