import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const SA = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187611)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#6DA544"
      />
      <path
        d="M6.78271 14.3477C6.78271 15.2121 7.4835 15.9129 8.34792 15.9129H13.0436C13.0436 16.6332 13.6275 17.2172 14.3479 17.2172H15.9131C16.6335 17.2172 17.2175 16.6332 17.2175 15.9129V14.3477H6.78271Z"
        fill="#F0F0F0"
      />
      <path
        d="M17.3477 6.78308V10.4352C17.3477 11.0106 16.8796 11.4787 16.3042 11.4787V13.0439C17.7427 13.0439 18.9129 11.8737 18.9129 10.4352V6.78308H17.3477Z"
        fill="#F0F0F0"
      />
      <path
        d="M6.1304 10.435C6.1304 11.0104 5.6623 11.4785 5.08691 11.4785V13.0437C6.52537 13.0437 7.6956 11.8734 7.6956 10.435V6.78284H6.1304V10.435Z"
        fill="#F0F0F0"
      />
      <path
        d="M16.5657 6.78308H15.0005V10.4353H16.5657V6.78308Z"
        fill="#F0F0F0"
      />
      <path
        d="M12.6519 8.87005C12.6519 9.01391 12.5349 9.13091 12.3911 9.13091C12.2473 9.13091 12.1302 9.01386 12.1302 8.87005V6.78308H10.565V8.87005C10.565 9.01391 10.448 9.13091 10.3041 9.13091C10.1603 9.13091 10.0433 9.01386 10.0433 8.87005V6.78308H8.47803V8.87005C8.47803 9.87697 9.29722 10.6962 10.3041 10.6962C10.6919 10.6962 11.0516 10.5743 11.3476 10.3673C11.6436 10.5742 12.0033 10.6962 12.3911 10.6962C12.4692 10.6962 12.546 10.6907 12.6215 10.6811C12.5106 11.138 12.099 11.4787 11.6085 11.4787V13.0439C13.0469 13.0439 14.2172 11.8737 14.2172 10.4353V8.87005V6.78308H12.652V8.87005H12.6519Z"
        fill="#F0F0F0"
      />
      <path
        d="M10.8259 11.4781H8.47803V13.0433H10.8259V11.4781Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187611">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default SA;