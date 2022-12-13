import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Envato = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 2C8.27812 2 2 8.27812 2 16C2 23.7219 8.27812 30 16 30C23.7219 30 30 23.7219 30 16C30 8.27812 23.7219 2 16 2Z"
      fill="#81B441"
    />
    <path
      d="M21.0374 7.96765C14.2496 8.41669 12.2 14.7493 12.0265 17.9891C12.0265 18.5221 10.3148 17.4432 11.3329 12.7917C11.4202 12.3929 11.3329 11.9167 11.3329 11.9167C7.79806 15.0259 8.10204 20.9046 12.4475 23.2946C15.8161 25.1473 20.1952 23.9683 22.1321 20.5155C24.4059 16.5575 22.3848 8.72558 21.0374 7.96765Z"
      fill="white"
    />
  </svg>
));

export default Envato;
