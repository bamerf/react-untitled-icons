import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Microsoft = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4430_187525)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M0.413086 15.1301C1.1074 17.7063 2.63763 19.9392 4.69535 21.5202V15.1301H0.413086Z"
          fill="#0052B4"
        />
        <path
          d="M10.9561 23.954C11.3 23.9837 11.6479 23.9997 11.9995 23.9997C17.5439 23.9997 22.2091 20.2393 23.5861 15.1301H10.9561V23.954Z"
          fill="#0052B4"
        />
        <path
          d="M23.5861 8.86918C22.2091 3.75999 17.5439 -0.000366211 11.9995 -0.000366211C11.6479 -0.000366211 11.3 0.015665 10.9561 0.04529V8.86918H23.5861Z"
          fill="#0052B4"
        />
        <path
          d="M4.69535 2.47937C2.63763 4.06046 1.1074 6.29326 0.413086 8.86946H4.69535V2.47937Z"
          fill="#0052B4"
        />
        <path
          d="M23.8979 10.4352H9.39087H9.39082V0.285645C8.28186 0.531551 7.2305 0.930129 6.26037 1.45949V10.4352H0.10109C0.034293 10.9476 -0.000488281 11.4699 -0.000488281 12.0004C-0.000488281 12.5309 0.034293 13.0533 0.10109 13.5656H6.26032H6.26037V22.5413C7.2305 23.0706 8.28186 23.4693 9.39082 23.7151V13.5658V13.5657H23.8979C23.9646 13.0533 23.9995 12.5309 23.9995 12.0004C23.9995 11.4699 23.9646 10.9475 23.8979 10.4352Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187525">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
