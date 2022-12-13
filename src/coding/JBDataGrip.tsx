import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const JBDataGrip = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4430_189503)">
        <path
          d="M29.9428 4.98285L31.9999 18.0571L24.2285 22.5828L22.7656 15.1771L29.9428 4.98285Z"
          fill="#9775F8"
        />
        <path
          d="M29.9424 4.98286L18.5139 0L8.86816 8L22.7653 15.1771L29.9424 4.98286Z"
          fill="url(#paint0_linear_4430_189503)"
        />
        <path
          d="M21.623 32L8.2287 13.9886L4.25156 16.64L0.274414 28.5714L21.623 32Z"
          fill="url(#paint1_linear_4430_189503)"
        />
        <path
          d="M24.1371 22.9028L14.7657 16.7314L0 14.7657L21.6229 32L24.1371 22.9028Z"
          fill="url(#paint2_linear_4430_189503)"
        />
        <path
          d="M0 0.228577V14.7657L27.7943 24.32L29.9429 4.98286L0 0.228577Z"
          fill="url(#paint3_linear_4430_189503)"
        />
        <path
          d="M6.12598 6.12567H25.8745V25.8742H6.12598V6.12567Z"
          fill="black"
        />
        <path
          d="M8.1377 8.68567H11.3377C13.8977 8.68567 15.6806 10.4685 15.6806 12.7542V12.8C15.6806 15.0857 13.8977 16.8685 11.3377 16.8685H8.1377V8.68567V8.68567ZM9.92055 10.3314V15.2685H11.292C12.7548 15.2685 13.7606 14.2628 13.7606 12.8457V12.8C13.7606 11.3371 12.7548 10.3314 11.292 10.3314H9.92055Z"
          fill="white"
        />
        <path
          d="M16.001 12.8C16.001 10.4685 17.8295 8.54852 20.2981 8.54852C21.761 8.54852 22.6753 8.95995 23.4981 9.69138L22.3553 11.0628C21.7153 10.5142 21.1667 10.24 20.2067 10.24C18.881 10.24 17.8753 11.3828 17.8753 12.8C17.8753 14.3085 18.881 15.4057 20.3438 15.4057C20.9838 15.4057 21.5781 15.2228 22.0353 14.9028V13.7142H20.2067V12.16H23.7724V15.7257C22.9495 16.4571 21.761 17.0057 20.2981 17.0057C17.7381 17.0057 16.001 15.2228 16.001 12.8Z"
          fill="white"
        />
        <path
          d="M7.9541 22.1714H15.3598V23.4057H7.9541V22.1714Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4430_189503"
          x1="18.774"
          y1="8.06537"
          x2="21.2663"
          y2="1.85417"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9775F8" />
          <stop offset="0.952" stopColor="#22D88F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4430_189503"
          x1="7.80219"
          y1="16.5765"
          x2="11.0383"
          y2="30.6766"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9775F8" />
          <stop offset="0.214" stopColor="#689CCE" />
          <stop offset="0.423" stopColor="#42BDAC" />
          <stop offset="0.59" stopColor="#2BD197" />
          <stop offset="0.694" stopColor="#22D88F" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4430_189503"
          x1="2.24"
          y1="15.557"
          x2="30.2807"
          y2="31.0391"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.075" stopColor="#22D88F" />
          <stop offset="0.72" stopColor="#9775F8" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_4430_189503"
          x1="0"
          y1="12.2743"
          x2="28.181"
          y2="12.2743"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.075" stopColor="#22D88F" />
          <stop offset="0.266" stopColor="#5AB0B4" />
          <stop offset="0.565" stopColor="#B86CF2" />
          <stop offset="1" stopColor="#FF59E6" />
        </linearGradient>
        <clipPath id="clip0_4430_189503">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default JBDataGrip;
