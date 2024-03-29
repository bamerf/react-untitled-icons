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
      <g clipPath="url(#clip0_4430_187572)">
        <path
          d="M23.2536 16.1744C23.736 14.8744 24 13.4683 24 12.0005C24 10.5326 23.736 9.1265 23.2536 7.82657L12 6.78308L0.746391 7.82657C0.264047 9.1265 0 10.5326 0 12.0005C0 13.4683 0.264047 14.8744 0.746391 16.1744L12 17.2178L23.2536 16.1744Z"
          fill="#6DA544"
        />
        <path
          d="M23.2533 7.82599C21.5578 3.25638 17.1593 -0.00012207 11.9997 -0.00012207C6.84013 -0.00012207 2.44161 3.25638 0.746094 7.82599H23.2533Z"
          fill="#FFDA44"
        />
        <path
          d="M11.9997 23.9991C17.1593 23.9991 21.5578 20.7426 23.2533 16.173H0.746094C2.44161 20.7426 6.84012 23.9991 11.9997 23.9991Z"
          fill="#D80027"
        />
        <path
          d="M20.2292 10.153H13.9429L12.0003 4.17444L10.0577 10.153H3.77148L8.85719 13.848L6.91459 19.8267L12.0003 16.1744L17.0861 19.8266L15.1435 13.8479L20.2292 10.153Z"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187572">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
