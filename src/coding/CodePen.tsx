import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const CodePen = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="14" fill="black" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.4453 6.16795C15.7812 5.94402 16.2188 5.94402 16.5547 6.16795L25.5547 12.1679C25.8329 12.3534 26 12.6656 26 13V19C26 19.3344 25.8329 19.6466 25.5547 19.8321L16.5547 25.8321C16.2188 26.056 15.7812 26.056 15.4453 25.8321L6.4453 19.8321C6.1671 19.6466 6 19.3344 6 19V13C6 12.6656 6.1671 12.3534 6.4453 12.1679L15.4453 6.16795ZM8 14.8685L9.69722 16L8 17.1315V14.8685ZM8.80278 19L15 23.1315V19.5352L11.5 17.2018L8.80278 19ZM13.3028 16L16 17.7982L18.6972 16L16 14.2018L13.3028 16ZM17 12.4648L20.5 14.7981L23.1972 13L17 8.86852V12.4648ZM15 8.86852V12.4648L11.5 14.7981L8.80278 13L15 8.86852ZM24 14.8685L22.3028 16L24 17.1315V14.8685ZM23.1972 19L20.5 17.2019L17 19.5352V23.1315L23.1972 19Z"
      fill="white"
    />
  </svg>
));

export default CodePen;
