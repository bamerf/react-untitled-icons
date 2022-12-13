import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const JBRubyMine = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4430_189507)">
        <path
          d="M26.6057 0L17.4629 3.29143L10.24 0L3.1543 17.7829L11.2914 14.5371L11.1543 23.5429L28.5714 23.8629L32 6.26286L26.6057 0Z"
          fill="url(#paint0_linear_4430_189507)"
        />
        <path
          d="M23.2229 10.3771L11.7029 2.83429L2.42285 8.54857L22.7657 16.4114L23.2229 10.3771Z"
          fill="url(#paint1_linear_4430_189507)"
        />
        <path
          d="M13.3029 31.1771L25.28 29.5771L21.4857 22.2629L24 19.2L24.2743 17.3257L11.7029 2.78857L0 5.66857V22.4457L6.76572 32L13.3029 31.1771Z"
          fill="url(#paint2_linear_4430_189507)"
        />
        <path
          d="M6.12598 6.12567H25.8745V25.8742H6.12598V6.12567Z"
          fill="black"
        />
        <path d="M8 22.1714H15.4057V23.4057H8V22.1714Z" fill="white" />
        <path
          d="M15.8174 8.68567H17.7831L19.9317 12.16L22.0802 8.68567H24.046V16.8685H22.2174V11.52L19.9317 15.04H19.886L17.6002 11.5657V16.8685H15.8174V8.68567Z"
          fill="white"
        />
        <path
          d="M7.95489 8.68567H11.7035C12.7549 8.68567 13.532 8.95995 14.0806 9.50853C14.5378 9.96567 14.7663 10.6057 14.7663 11.3828V11.4285C14.7663 12.1142 14.5835 12.6171 14.2635 13.0285C13.9435 13.44 13.532 13.76 12.9835 13.9428L14.9949 16.8685H12.892L11.2006 14.3542H9.69204V16.8685H7.90918V8.68567H7.95489ZM11.612 12.6628C12.0692 12.6628 12.3892 12.5714 12.6178 12.3428C12.8463 12.1142 12.9835 11.84 12.9835 11.52V11.4742C12.9835 11.0628 12.8463 10.7885 12.6178 10.6057C12.3892 10.4228 12.0235 10.3314 11.5663 10.3314H9.78347V12.6628H11.612Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4430_189507"
          x1="22.6784"
          y1="24.0247"
          x2="13.8725"
          y2="3.27451"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.172" stopColor="#FF1F51" />
          <stop offset="0.28" stopColor="#FF3648" />
          <stop offset="0.468" stopColor="#FF593B" />
          <stop offset="0.646" stopColor="#FF7231" />
          <stop offset="0.809" stopColor="#FF812B" />
          <stop offset="0.941" stopColor="#FF8629" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4430_189507"
          x1="15.2041"
          y1="5.8912"
          x2="11.4766"
          y2="15.285"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.022" stopColor="#9039D0" />
          <stop offset="0.629" stopColor="#FF1F51" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4430_189507"
          x1="0.132571"
          y1="5.13097"
          x2="20.7013"
          y2="31.2777"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.107" stopColor="#9039D0" />
          <stop offset="0.387" stopColor="#FF1F51" />
          <stop offset="0.629" stopColor="#FF1F51" />
          <stop offset="0.66" stopColor="#FF3648" />
          <stop offset="0.714" stopColor="#FF593B" />
          <stop offset="0.765" stopColor="#FF7231" />
          <stop offset="0.812" stopColor="#FF812B" />
          <stop offset="0.85" stopColor="#FF8629" />
        </linearGradient>
        <clipPath id="clip0_4430_189507">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default JBRubyMine;
