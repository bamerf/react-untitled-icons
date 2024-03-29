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
      <g clipPath="url(#clip0_4430_187569)">
        <path
          d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z"
          fill="#0052B4"
        />
        <path
          d="M11.9683 11.9997H12.0004C12.0004 11.9889 12.0004 11.9784 12.0004 11.9675C11.9897 11.9783 11.979 11.989 11.9683 11.9997Z"
          fill="#F0F0F0"
        />
        <path
          d="M12.0005 6.26123C12.0005 4.14974 12.0005 2.76623 12.0005 0.000366211H11.9985C5.37194 0.00149121 0.000488281 5.3736 0.000488281 12.0004H6.26134V8.47485L9.78686 12.0004H11.9684C11.9791 11.9897 11.9898 11.979 12.0005 11.9683C12.0005 11.1598 12.0005 10.4384 12.0005 9.78683L8.47492 6.26123H12.0005Z"
          fill="#F0F0F0"
        />
        <path
          d="M6.07124 1.56543C4.19441 2.63413 2.63409 4.19441 1.56543 6.07124V12.0002H4.69588V4.69598V4.69588H12.0002C12.0002 3.70856 12.0002 2.76796 12.0002 1.56543H6.07124Z"
          fill="#D80027"
        />
        <path
          d="M12.0004 10.5242L7.73686 6.26074H6.26123V6.26084L12.0003 11.9998H12.0004C12.0004 11.9998 12.0004 10.9823 12.0004 10.5242Z"
          fill="#D80027"
        />
        <path
          d="M13.5649 6.2605V11.9996C13.5649 14.7952 17.2171 15.6518 17.2171 15.6518C17.2171 15.6518 20.8693 14.7952 20.8693 11.9996V6.2605H13.5649Z"
          fill="#338AF3"
        />
        <path
          d="M13.5649 11.9991C13.5649 14.7948 17.2171 15.6514 17.2171 15.6514C17.2171 15.6514 20.8693 14.7948 20.8693 11.9991H13.5649Z"
          fill="#A2001D"
        />
        <path
          d="M18.7823 8.86909H17.7388V7.82556H16.6953V8.86909H15.6519V9.91253H16.6953V13.0429H17.7388V9.91253H18.7823V8.86909Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187569">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
