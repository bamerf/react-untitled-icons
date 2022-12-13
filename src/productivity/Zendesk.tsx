import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Zendesk = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17 5L17 20.7143L30 5H17Z" fill="#07363D" />
    <path
      d="M8.50003 12C12.0562 12 15 8.41579 15 5.00002H2.00002C2.00002 8.41579 4.94386 12 8.50003 12Z"
      fill="#07363D"
    />
    <path
      d="M17 27C17 23.5842 19.9439 20 23.5 20C27.0562 20 30 23.5842 30 27H17Z"
      fill="#07363D"
    />
    <path d="M15 27V11.2857L2 27H15Z" fill="#07363D" />
  </svg>
));

export default Zendesk;
