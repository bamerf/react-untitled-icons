import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const SI = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187620)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M23.2536 7.82637H10.4348V4.69592H4.17389V7.82637H0.746391C0.264047 9.12631 0 10.5324 0 12.0003C0 13.4681 0.264047 14.8742 0.746391 16.1742L12 17.2176L23.2536 16.1742C23.736 14.8742 24 13.4681 24 12.0003C24 10.5324 23.736 9.12631 23.2536 7.82637Z"
        fill="#0052B4"
      />
      <path
        d="M12.0002 23.9997C17.1598 23.9997 21.5583 20.7432 23.2538 16.1736H0.746582C2.4421 20.7432 6.84061 23.9997 12.0002 23.9997Z"
        fill="#D80027"
      />
      <path
        d="M4.17383 7.82641V8.86984C4.17383 11.2661 7.30428 12.0003 7.30428 12.0003C7.30428 12.0003 10.4347 11.2661 10.4347 8.86984V7.82641L9.39125 8.86989L7.30428 7.30469L5.21731 8.86989L4.17383 7.82641Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187620">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default SI;
