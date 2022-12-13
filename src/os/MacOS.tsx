import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const MacOS = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 16C30 23.728 23.735 30 16 30C8.265 30 2 23.728 2 16C2 8.265 8.265 2 16 2C23.735 2 30 8.265 30 16Z"
      fill="white"
    />
    <path
      d="M21.5 6H23L17 16L23 26H21.5L16 17L10.5 26H9L15 16L9 6H10.5L16 15L21.5 6Z"
      fill="url(#paint0_linear_4430_189415)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4430_189415"
        x1="16"
        y1="6"
        x2="16"
        y2="26"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5AB1DC" />
        <stop offset="0.256735" stopColor="#8396B0" />
        <stop offset="0.500792" stopColor="#A37F86" />
        <stop offset="1" stopColor="#EE5031" />
      </linearGradient>
    </defs>
  </svg>
));

export default MacOS;
