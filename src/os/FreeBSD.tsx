import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const FreeBSD = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
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
      d="M24.7942 7.30726C25.7483 8.27592 23.1032 12.5338 22.656 12.9883C22.2088 13.4418 21.073 13.0245 20.1193 12.0556C19.1651 11.087 18.7541 9.93313 19.2013 9.47894C19.6482 9.02452 23.8402 6.33814 24.7942 7.30726Z"
      fill="#B5010F"
    />
    <path
      d="M11.4138 8.33211C9.95717 7.49263 7.88438 6.55887 7.22499 7.22859C6.5569 7.90693 7.50995 10.0596 8.34518 11.5418C9.08847 10.2293 10.1457 9.12445 11.4138 8.33211Z"
      fill="#B5010F"
    />
    <path
      d="M17.4444 8.4444C17.8888 8 18.9275 8.16967 18.9275 8.16967L19.0373 7.87902C19.0373 7.87902 18 7.40628 16.2291 7.40628C11.4455 7.40628 7.56752 11.3444 7.56752 16.2034C7.56752 21.0614 11.4455 25 16.2291 25C21.0126 25 24.8904 21.0614 24.8904 16.2034C24.8904 14.9915 24.6485 13.838 24.2121 12.7879C23.9966 13.5113 23.8309 13.768 23.2994 14.2994C22.5017 15.0972 20.5443 14.4331 18.9275 12.8163C17.3107 11.1995 16.6467 9.24212 17.4444 8.4444Z"
      fill="#B5010F"
    />
  </svg>
));

export default FreeBSD;
