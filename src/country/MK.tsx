import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const MK = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187599)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#FFDA44"
      />
      <path
        d="M13.8249 23.8624C15.7766 23.5647 17.5732 22.7961 19.0963 21.6772L12 12.0004L13.8249 23.8624Z"
        fill="#D80027"
      />
      <path
        d="M10.1752 0.137695C8.22359 0.435445 6.42706 1.20401 4.90381 2.32287L12.0002 11.9997L10.1752 0.137695Z"
        fill="#D80027"
      />
      <path
        d="M4.90381 21.6772C6.42696 22.7961 8.2235 23.5646 10.1751 23.8625L12.0002 12.0004L4.90381 21.6772Z"
        fill="#D80027"
      />
      <path
        d="M2.32336 4.90234C1.20445 6.42559 0.43598 8.22208 0.138184 10.1738L12.0002 11.9988L2.32336 4.90234Z"
        fill="#D80027"
      />
      <path
        d="M0.138184 13.8253C0.435934 15.777 1.2045 17.5735 2.3234 19.0967L12.0002 12.0004L0.138184 13.8253Z"
        fill="#D80027"
      />
      <path
        d="M23.862 10.174C23.5642 8.22233 22.7957 6.42579 21.6768 4.90259L12 11.999L23.862 10.174Z"
        fill="#D80027"
      />
      <path
        d="M19.0963 2.32282C17.5731 1.20396 15.7766 0.435445 13.8249 0.137695L12 11.9997L19.0963 2.32282Z"
        fill="#D80027"
      />
      <path
        d="M21.6769 19.0967C22.7958 17.5735 23.5643 15.7769 23.8621 13.8254L12 12.0004L21.6769 19.0967Z"
        fill="#D80027"
      />
      <path
        d="M12.0001 16.1743C14.3052 16.1743 16.174 14.3056 16.174 12.0004C16.174 9.69525 14.3052 7.82654 12.0001 7.82654C9.69489 7.82654 7.82617 9.69525 7.82617 12.0004C7.82617 14.3056 9.69489 16.1743 12.0001 16.1743Z"
        fill="#D80027"
      />
      <path
        d="M12.0001 15.1297C13.729 15.1297 15.1305 13.7281 15.1305 11.9992C15.1305 10.2703 13.729 8.86877 12.0001 8.86877C10.2712 8.86877 8.86963 10.2703 8.86963 11.9992C8.86963 13.7281 10.2712 15.1297 12.0001 15.1297Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187599">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default MK;