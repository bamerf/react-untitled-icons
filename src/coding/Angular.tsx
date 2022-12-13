import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Angular = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z" fill="#DD0031" />
    <path d="M16 2V30L27 24L29 7L16 2Z" fill="#C3002F" />
    <path
      d="M15.9998 5.09399L7.87305 23.364H10.9031L12.5368 19.276H19.4348L21.0685 23.364H24.0986L15.9998 5.09399ZM18.3736 16.756H13.626L15.9998 11.03L18.3736 16.756Z"
      fill="white"
    />
  </svg>
));

export default Angular;