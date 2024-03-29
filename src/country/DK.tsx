import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const DK = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187488)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M9.39165 10.4349H23.8987C23.1317 4.54709 18.0972 0.00012207 12.0003 0.00012207C11.1043 0.00012207 10.2316 0.099169 9.3916 0.285356V10.4349H9.39165Z"
        fill="#D80027"
      />
      <path
        d="M6.26134 10.4356V1.45996C2.96635 3.2578 0.607504 6.55551 0.102051 10.4357H6.26134V10.4356Z"
        fill="#D80027"
      />
      <path
        d="M6.2608 13.5656H0.101562C0.607016 17.4457 2.96586 20.7434 6.26085 22.5412L6.2608 13.5656Z"
        fill="#D80027"
      />
      <path
        d="M9.3916 13.5656V23.7151C10.2316 23.9013 11.1043 24.0003 12.0003 24.0003C18.0972 24.0003 23.1317 19.4534 23.8987 13.5656H9.3916V13.5656Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187488">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default DK;
