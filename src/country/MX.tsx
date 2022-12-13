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
      <g clipPath="url(#clip0_4430_187563)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M23.9999 11.9997C23.9999 7.24218 21.2312 3.13143 17.2173 1.19043V22.8089C21.2312 20.868 23.9999 16.7572 23.9999 11.9997Z"
          fill="#D80027"
        />
        <path
          d="M0 11.9997C0 16.7572 2.76867 20.868 6.78262 22.809V1.19043C2.76867 3.13143 0 7.24218 0 11.9997Z"
          fill="#6DA544"
        />
        <path
          d="M8.86963 11.9993C8.86963 13.7282 10.2712 15.1297 12.0001 15.1297C13.729 15.1297 15.1305 13.7282 15.1305 11.9993V10.9558H8.86963V11.9993Z"
          fill="#6DA544"
        />
        <path
          d="M16.1736 9.91336H13.0431C13.0431 9.33708 12.5759 8.86987 11.9996 8.86987C11.4233 8.86987 10.9561 9.33708 10.9561 9.91336H7.82568C7.82568 10.4897 8.32767 10.9568 8.9039 10.9568H8.86917C8.86917 11.5332 9.33633 12.0003 9.91265 12.0003C9.91265 12.5766 10.3798 13.0438 10.9561 13.0438H13.0431C13.6194 13.0438 14.0866 12.5766 14.0866 12.0003C14.6629 12.0003 15.1301 11.5332 15.1301 10.9568H15.0953C15.6716 10.9568 16.1736 10.4897 16.1736 9.91336Z"
          fill="#FF9811"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187563">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
