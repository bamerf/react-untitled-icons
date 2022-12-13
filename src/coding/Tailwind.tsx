import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Tailwind = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4524_190305)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 6C11.7333 6 9.06667 8.13333 8 12.4C9.6 10.2667 11.4667 9.46667 13.6 10C14.8172 10.304 15.6871 11.1876 16.6501 12.1647C18.2187 13.757 20.0344 15.6 24 15.6C28.2667 15.6 30.9333 13.4667 32 9.2C30.4 11.3333 28.5333 12.1333 26.4 11.6C25.1828 11.296 24.3129 10.4124 23.3499 9.43526C21.7813 7.84296 19.9656 6 16 6ZM8 15.6C3.73333 15.6 1.06667 17.7333 0 22C1.6 19.8667 3.46667 19.0667 5.6 19.6C6.81718 19.9046 7.68711 20.7876 8.65007 21.7647C10.2187 23.357 12.0344 25.2 16 25.2C20.2667 25.2 22.9333 23.0667 24 18.8C22.4 20.9333 20.5333 21.7333 18.4 21.2C17.1828 20.896 16.3129 20.0124 15.3499 19.0353C13.7813 17.443 11.9656 15.6 8 15.6Z"
          fill="#38BDF8"
        />
      </g>
      <defs>
        <clipPath id="clip0_4524_190305">
          <rect
            width="32"
            height="19.5556"
            fill="white"
            transform="translate(0 6)"
          />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Tailwind;
