import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const SourceTree = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.9842 13.1016C26.9842 6.97038 22.0657 2.00001 15.9984 2.00001C10.5908 1.9923 5.98248 5.96383 5.13628 11.3611C4.29008 16.7584 7.45789 21.9749 12.603 23.6568V29.2193C12.603 29.6505 12.9489 30 13.3756 30H18.5903C19.017 30 19.3629 29.6505 19.3629 29.2193V23.6607C23.9008 22.1841 26.979 17.9192 26.9842 13.1016ZM15.9984 16.8529C13.9472 16.8529 12.2843 15.1725 12.2843 13.0997C12.2843 11.0268 13.9472 9.34645 15.9984 9.34645C18.0496 9.34645 19.7125 11.0268 19.7125 13.0997C19.7125 15.1725 18.0496 16.8529 15.9984 16.8529Z"
        fill="#2684FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.998 2.00001V9.35036C18.0493 9.35036 19.7121 11.0307 19.7121 13.1036C19.7121 15.1765 18.0493 16.8568 15.998 16.8568C16.8986 16.8568 17.7622 17.2183 18.399 17.8618C19.0357 18.5053 19.3934 19.378 19.3934 20.288V23.6646C24.5404 21.9824 27.7097 16.7643 26.8635 11.365C26.0173 5.96579 21.4075 1.99262 15.998 2.00001Z"
        fill="url(#paint0_linear_4430_189458)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4430_189458"
          x1="21.4909"
          y1="21.6543"
          x2="21.4909"
          y2="9.86171"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#0052CC" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  )
);

export default SourceTree;
