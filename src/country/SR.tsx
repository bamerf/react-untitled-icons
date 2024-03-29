import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const SR = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187632)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M23.2531 7.82684H0.745855C0.263559 9.12687 -0.000488281 10.5329 -0.000488281 12.0007C-0.000488281 13.4686 0.263559 14.8747 0.745855 16.1746H23.2531C23.7355 14.8747 23.9995 13.4686 23.9995 12.0007C23.9995 10.5329 23.7355 9.12687 23.2531 7.82684Z"
        fill="#A2001D"
      />
      <path
        d="M12.0345 24.0012C16.1446 24.0012 19.7716 21.9344 21.9343 18.7838H2.13477C4.29748 21.9344 7.92439 24.0012 12.0345 24.0012Z"
        fill="#6DA544"
      />
      <path
        d="M12.034 0.000305176C16.1441 0.000305176 19.7711 2.06712 21.9339 5.21768H2.13428C4.297 2.06712 7.9239 0.000305176 12.034 0.000305176Z"
        fill="#6DA544"
      />
      <path
        d="M11.9996 7.82684L13.0355 11.0153H16.3883L13.6759 12.9861L14.712 16.1746L11.9996 14.204L9.28714 16.1746L10.3233 12.9861L7.61084 11.0153H10.9636L11.9996 7.82684Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187632">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default SR;
