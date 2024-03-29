import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const AW = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187435)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#FFDA44"
      />
      <path
        d="M11.9999 24.0003C15.637 24.0003 18.8959 22.382 21.0965 19.8264H2.90332C5.10396 22.382 8.36285 24.0003 11.9999 24.0003Z"
        fill="#338AF3"
      />
      <path
        d="M24 12C24 5.37263 18.6274 0 12 0C5.37262 0 0 5.37263 0 12C0 13.0831 0.144375 14.1323 0.413391 15.1305H23.5867C23.8556 14.1323 24 13.0831 24 12Z"
        fill="#338AF3"
      />
      <path
        d="M0.953613 16.6962C1.18494 17.2397 1.45536 17.7625 1.76104 18.2614H22.2385C22.5441 17.7624 22.8146 17.2397 23.046 16.6962H0.953613Z"
        fill="#338AF3"
      />
      <path
        d="M5.4988 7.56904L3.1543 6.53432L5.4988 5.4996L6.53347 3.15515L7.56814 5.4996L9.9126 6.53432L7.56814 7.56904L6.53347 9.9135L5.4988 7.56904Z"
        fill="#F0F0F0"
      />
      <path
        d="M6.53375 4.44739L7.1727 5.89531L8.62067 6.53436L7.1727 7.17336L6.53375 8.62128L5.8947 7.17336L4.44678 6.53436L5.8947 5.89531L6.53375 4.44739Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187435">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default AW;
