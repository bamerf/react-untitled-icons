import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const AppearIn = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4430_189428)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26 18C26 19.1046 25.1046 20 24 20H5C3.89543 20 3 19.1046 3 18V6.00002C3 4.89545 3.89543 4.00002 5 4.00001L24 4C25.1046 4 26 4.89543 26 6V18ZM31.2506 19.5432L28.8041 17.8295C28.2964 17.4739 27.9973 16.9154 27.9973 16.3221V7.54499C27.9973 6.95175 28.2964 6.39325 28.8041 6.03759L31.2506 4.32393C31.5594 4.10764 32 4.31369 32 4.67438V19.1927C32 19.5534 31.5594 19.7595 31.2506 19.5432Z"
          fill="#41CC8D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 9C23 7.89543 22.1046 7 21 7L2.00001 7C0.895436 7 5.48622e-06 7.89543 5.08502e-06 9L7.26432e-07 21C3.25235e-07 22.1046 0.895431 23 2 23H7.50001L16 28V23H21C22.1046 23 23 22.1046 23 21V9Z"
          fill="#FF2E63"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5269 19.061H13.9866V17.8524H13.9522C13.3357 18.7298 12.3775 19.3257 11.23 19.3257C8.78213 19.3257 7.39551 17.3558 7.39551 15.1372C7.39551 13.0183 8.85094 11.0815 11.1789 11.0815C12.3601 11.0815 13.3188 11.6776 13.9522 12.6046H13.9866V11.3133H15.5269V19.061ZM14.0721 15.187C14.0721 13.6806 13.1303 12.4058 11.4699 12.4058C9.87783 12.4058 8.93645 13.7467 8.93645 15.187C8.93645 16.6438 9.84342 18.0014 11.4699 18.0014C13.1476 18.0014 14.0721 16.7101 14.0721 15.187V15.187Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_189428">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default AppearIn;