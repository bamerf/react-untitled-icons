import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Bluetooth = forwardRef<SVGSVGElement, CommonProps>(
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
        d="M16.001 30C22.513 30 27 27.0955 27 15.9995C27 4.90396 22.513 2 16.001 2C9.48937 2 5 4.90444 5 15.9995C5 27.0956 9.48895 30 16.001 30Z"
        fill="white"
      />
      <path
        d="M17.2057 8.91333L19.6715 11.2284L17.2072 13.5415L17.2057 8.91333ZM17.2057 23.0847L19.6715 20.7702L17.2072 18.4565L17.2057 23.0847ZM14.5729 15.9991L9.24239 10.9818L10.7875 9.53159L15.0338 13.5201V3.96192L22.7567 11.2118L17.6575 15.9991L22.7576 20.7877L15.0344 28.0377V18.4788L10.7869 22.4678L9.24179 21.0168L14.5729 15.9991ZM16.001 30C22.513 30 27 27.0955 27 15.9995C27 4.90396 22.513 2 16.001 2C9.48937 2 5 4.90444 5 15.9995C5 27.0956 9.48894 30 16.001 30Z"
        fill="#0060A9"
      />
    </svg>
  )
);

export default Bluetooth;
