import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const YouTubeMusic = forwardRef<SVGSVGElement, CommonProps>(
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
        d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
        fill="#FF0000"
      />
      <path
        d="M16 9.61478C19.5213 9.61478 22.3852 12.4787 22.3852 16C22.3852 19.5213 19.5213 22.3852 16 22.3852C12.4787 22.3852 9.61478 19.5213 9.61478 16C9.61478 12.4787 12.4787 9.61478 16 9.61478ZM16 9C12.1333 9 9 12.1333 9 16C9 19.8667 12.1333 23 16 23C19.8667 23 23 19.8667 23 16C23 12.1333 19.8667 9 16 9Z"
        fill="white"
      />
      <path d="M14 20L20 15.8261L14 12V20Z" fill="white" />
    </svg>
  )
);

export default YouTubeMusic;
