import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Drupal = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="14" fill="#0678BE" />
    <path
      d="M16 5C9.94083 5 5 9.94083 5 16C5 22.0592 9.94083 27 16 27C22.0592 27 27 22.0592 27 16C27 10.0184 21.9816 5 16 5ZM16 23C12.6827 23 10 20.3173 10 17C10 14.1889 11.8618 12.4209 13.5209 10.7618C14.6209 9.66176 15.6863 8.18657 16 7C16.3147 8.18759 17.3618 9.66176 18.4791 10.7618C20.1382 12.4209 22 14.1889 22 17C22 20.3173 19.3173 23 16 23Z"
      fill="white"
    />
  </svg>
));

export default Drupal;
