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
      <g clipPath="url(#clip0_4430_187521)">
        <path
          d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 5.37262 12 0 12 0C12 0 24 5.37262 24 12Z"
          fill="#A2001D"
        />
        <path
          d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12"
          fill="#0052B4"
        />
        <path
          d="M16.1735 15.1305L11.9996 14.6088L7.82568 15.1305V8.86963H16.1735V15.1305Z"
          fill="#F0F0F0"
        />
        <path
          d="M11.9996 14.6083C13.1522 14.6083 14.0865 13.6739 14.0865 12.5213C14.0865 11.3687 13.1522 10.4343 11.9996 10.4343C10.847 10.4343 9.9126 11.3687 9.9126 12.5213C9.9126 13.6739 10.847 14.6083 11.9996 14.6083Z"
          fill="#0052B4"
        />
        <path
          d="M12.0005 13.5651C12.5768 13.5651 13.044 13.0979 13.044 12.5216C13.044 11.9453 12.5768 11.4781 12.0005 11.4781C11.4242 11.4781 10.957 11.9453 10.957 12.5216C10.957 13.0979 11.4242 13.5651 12.0005 13.5651Z"
          fill="#A2001D"
        />
        <path
          d="M10.4346 9.91333H13.565L11.9998 11.4786L10.4346 9.91333Z"
          fill="#6DA544"
        />
        <path
          d="M12.522 10.9556H11.4785V14.086H12.522V10.9556Z"
          fill="#FFDA44"
        />
        <path
          d="M13.6691 13.7745H10.3299L7.82568 15.1311H16.1735L13.6691 13.7745Z"
          fill="#6DA544"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187521">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;