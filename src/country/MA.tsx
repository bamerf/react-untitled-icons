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
      <g clipPath="url(#clip0_4430_187570)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#D80027"
        />
        <path
          d="M19.0919 9.84775H13.6744L12.0003 4.69543L10.3262 9.84775H4.90869L9.29155 13.0321L7.61741 18.1845L12.0003 15.0002L16.3832 18.1846L14.7091 13.0321L19.0919 9.84775ZM10.5182 12.6335L11.0843 10.8912H12.9163L13.4824 12.6335V12.6335L12.0003 13.7103L10.5183 12.6335L10.5182 12.6335ZM12.5773 9.84775H11.4234L12.0003 8.07212L12.5773 9.84775ZM14.37 11.9886L14.0134 10.8912H15.8804L14.37 11.9886ZM9.98718 10.8912L9.6306 11.9886L8.12015 10.8912H9.98718ZM9.60224 15.4526L10.1792 13.6771L11.1127 14.3552L9.60224 15.4526ZM12.8879 14.3553L13.8215 13.6771L14.3984 15.4527L12.8879 14.3553Z"
          fill="#FFDA44"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187570">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
