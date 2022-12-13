import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const MSOneDrive = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_4430_189470"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="6"
        width="32"
        height="20"
      >
        <path
          d="M7.82979 26C3.50549 26 0 22.5675 0 18.3333C0 14.1921 3.35322 10.8179 7.54613 10.6716C9.27535 7.87166 12.4144 6 16 6C20.6308 6 24.5169 9.12183 25.5829 13.3335C29.1316 13.3603 32 16.1855 32 19.6667C32 23.0527 29 26 25.8723 25.9914L7.82979 26Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#mask0_4430_189470)">
        <path
          d="M7.83017 26C5.37824 26 3.18957 24.8965 1.75391 23.1689L18.0429 16.3334L30.7089 23.4646C29.5926 24.921 27.9066 26 26.0004 25.9914C23.1254 26 12.0629 26 7.83017 26Z"
          fill="url(#paint0_linear_4430_189470)"
        />
        <path
          d="M25.5785 13.3147L18.043 16.3332L30.709 23.4644C31.5199 22.4063 32.0004 21.0914 32.0004 19.6666C32.0004 16.1855 29.1321 13.3602 25.5833 13.3334C25.5817 13.3272 25.5801 13.3209 25.5785 13.3147Z"
          fill="url(#paint1_linear_4430_189470)"
        />
        <path
          d="M7.06445 10.7028L18.0423 16.3333L25.5779 13.3148C24.5051 9.11261 20.6237 6 15.9997 6C12.4141 6 9.27508 7.87166 7.54586 10.6716C7.3841 10.6773 7.22358 10.6877 7.06445 10.7028Z"
          fill="url(#paint2_linear_4430_189470)"
        />
        <path
          d="M1.7535 23.169L18.0425 16.3334L7.06471 10.7029C3.09947 11.0794 0 14.352 0 18.3334C0 20.1667 0.657197 21.8498 1.7535 23.169Z"
          fill="url(#paint3_linear_4430_189470)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4430_189470"
          x1="4.42591"
          y1="24.6667"
          x2="27.2309"
          y2="23.2762"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2086B8" />
          <stop offset="1" stopColor="#46D3F6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4430_189470"
          x1="23.8302"
          y1="19.6665"
          x2="30.2108"
          y2="15.208"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1694DB" />
          <stop offset="1" stopColor="#62C3FE" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4430_189470"
          x1="8.51037"
          y1="7.33333"
          x2="23.3335"
          y2="15.9348"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0D3D78" />
          <stop offset="1" stopColor="#063B83" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_4430_189470"
          x1="-0.340429"
          y1="20.0001"
          x2="14.5634"
          y2="14.4652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#16589B" />
          <stop offset="1" stopColor="#1464B7" />
        </linearGradient>
      </defs>
    </svg>
  )
);

export default MSOneDrive;
