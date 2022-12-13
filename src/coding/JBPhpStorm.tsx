import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const JBPhpStorm = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4430_189505)">
        <path
          d="M18.1029 6.94857L16.5943 2.37714L5.44 0L0 6.17143L17.0057 14.8571L18.1029 6.94857Z"
          fill="url(#paint0_linear_4430_189505)"
        />
        <path
          d="M12.8 18.9257L12.48 9.41716L0 6.17145L3.06286 24.5029L12.8 24.4114V18.9257Z"
          fill="url(#paint1_linear_4430_189505)"
        />
        <path
          d="M10.1025 18.7429L10.6968 11.2L19.7483 1.92004L27.8397 3.3829L31.9997 13.76L27.6568 18.0572L20.5711 16.9143L16.1825 21.5315L10.1025 18.7429Z"
          fill="url(#paint2_linear_4430_189505)"
        />
        <path
          d="M19.7485 1.92004L6.76562 13.44L9.27991 28.2515L20.0685 32L31.9999 24.8686L19.7485 1.92004Z"
          fill="url(#paint3_linear_4430_189505)"
        />
        <path
          d="M6.12598 6.12567H25.8745V25.8742H6.12598V6.12567Z"
          fill="black"
        />
        <path d="M8 22.1714H15.4057V23.4057H8V22.1714Z" fill="white" />
        <path
          d="M7.90918 8.68567H11.2463C13.212 8.68567 14.4006 9.82853 14.4006 11.52V11.5657C14.4006 13.4857 12.9378 14.4457 11.0635 14.4457H9.69204V16.9142H7.90918V8.68567ZM11.1549 12.8C12.0692 12.8 12.572 12.2514 12.572 11.5657V11.52C12.572 10.6971 12.0235 10.2857 11.1092 10.2857H9.73775V12.8H11.1549Z"
          fill="white"
        />
        <path
          d="M14.8574 15.7257L15.9089 14.4457C16.6403 15.04 17.4174 15.4514 18.3774 15.4514C19.1089 15.4514 19.566 15.1771 19.566 14.6742V14.6285C19.566 14.1714 19.2917 13.9428 17.9203 13.5771C16.2746 13.1657 15.1774 12.7085 15.1774 11.0628V11.0171C15.1774 9.50852 16.366 8.54852 18.0574 8.54852C19.246 8.54852 20.2974 8.91424 21.1203 9.59995L20.1603 10.9714C19.4289 10.4685 18.6974 10.1485 18.0117 10.1485C17.326 10.1485 16.9603 10.4685 16.9603 10.88V10.9257C16.9603 11.4742 17.326 11.6571 18.7431 12.0228C20.3889 12.48 21.3489 13.0742 21.3489 14.4914V14.5371C21.3489 16.1828 20.1146 17.0971 18.3317 17.0971C17.0974 17.0514 15.8631 16.5942 14.8574 15.7257Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4430_189505"
          x1="0.255085"
          y1="21.4153"
          x2="13.6901"
          y2="3.66903"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.016" stopColor="#765AF8" />
          <stop offset="0.382" stopColor="#B345F1" />
          <stop offset="0.758" stopColor="#FA3293" />
          <stop offset="0.941" stopColor="#FF318C" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4430_189505"
          x1="1.248"
          y1="22.1161"
          x2="14.6615"
          y2="4.39819"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.016" stopColor="#765AF8" />
          <stop offset="0.382" stopColor="#B345F1" />
          <stop offset="0.758" stopColor="#FA3293" />
          <stop offset="0.941" stopColor="#FF318C" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4430_189505"
          x1="23.2486"
          y1="21.2138"
          x2="15.6678"
          y2="3.22199"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.183" stopColor="#765AF8" />
          <stop offset="0.238" stopColor="#8655F6" />
          <stop offset="0.345" stopColor="#9F4CF3" />
          <stop offset="0.443" stopColor="#AE47F2" />
          <stop offset="0.522" stopColor="#B345F1" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_4430_189505"
          x1="28.9215"
          y1="26.2122"
          x2="11.2904"
          y2="12.5788"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.016" stopColor="#765AF8" />
          <stop offset="0.382" stopColor="#B345F1" />
        </linearGradient>
        <clipPath id="clip0_4430_189505">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default JBPhpStorm;
