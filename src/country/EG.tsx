import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const EG = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187494)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M12.0002 -0.000366211C6.84061 -0.000366211 2.4421 3.25613 0.746582 7.82574H23.2538C21.5583 3.25613 17.1598 -0.000366211 12.0002 -0.000366211Z"
        fill="#D80027"
      />
      <path
        d="M12.0002 24.0003C17.1598 24.0003 21.5583 20.7438 23.2538 16.1742H0.746582C2.4421 20.7438 6.84061 24.0003 12.0002 24.0003Z"
        fill="black"
      />
      <path
        d="M16.174 10.6956H13.0436C13.0436 10.1193 12.5764 9.6521 12.0001 9.6521C11.4238 9.6521 10.9566 10.1193 10.9566 10.6956H7.82617C7.82617 11.2719 8.32816 11.7391 8.90444 11.7391H8.86966C8.86966 12.3154 9.33681 12.7826 9.91314 12.7826C9.91314 13.3589 10.3803 13.826 10.9566 13.826H13.0436C13.6199 13.826 14.0871 13.3589 14.0871 12.7826C14.6634 12.7826 15.1306 12.3154 15.1306 11.7391H15.0958C15.6721 11.7391 16.174 11.2719 16.174 10.6956Z"
        fill="#FF9811"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187494">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default EG;