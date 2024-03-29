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
      <g clipPath="url(#clip0_4430_187519)">
        <path
          d="M16.1743 0.746315C14.8742 0.263925 13.4681 -0.00012207 12.0002 -0.00012207C10.5325 -0.00012207 9.12639 0.263925 7.82645 0.746222L7.30469 11.9999L7.82641 23.2535C9.12639 23.7359 10.5325 23.9999 12.0002 23.9999C13.4682 23.9999 14.8742 23.7359 16.1743 23.2534L16.696 11.9999L16.1743 0.746315Z"
          fill="#FFDA44"
        />
        <path
          d="M0 12.0004C0 17.1599 3.2565 21.5585 7.82611 23.2539V0.746704C3.2565 2.44227 0 6.84073 0 12.0004Z"
          fill="#D80027"
        />
        <path
          d="M23.9994 12.0004C23.9994 6.84073 20.7429 2.44227 16.1733 0.746704V23.254C20.7429 21.5585 23.9994 17.1599 23.9994 12.0004Z"
          fill="#6DA544"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187519">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
