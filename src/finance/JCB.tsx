import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const JCB = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31 22.5651C31 25.0095 28.9095 27 26.3423 27H1V9.43492C1 6.99048 3.09046 5 5.6577 5H31V22.5651Z"
      fill="white"
    />
    <path
      d="M24.4534 6.48425C22.6197 6.48425 21.116 7.89854 21.116 9.66203V12.962H25.8287C25.9387 12.962 26.0671 12.962 26.1588 12.9795C27.2224 13.0319 28.0109 13.5557 28.0109 14.4636C28.0109 15.1795 27.4791 15.7906 26.4889 15.9128V15.9477C27.5708 16.0176 28.3959 16.5938 28.3959 17.4843C28.3959 18.4446 27.4791 19.0731 26.2688 19.0731H21.0977V25.5335H25.9937C27.8275 25.5335 29.3312 24.1192 29.3312 22.3557V6.48425H24.4534Z"
      fill="url(#paint0_linear_4430_189584)"
    />
    <path
      d="M22.748 18.0604H24.6735C24.701 18.0604 24.7468 18.0561 24.7927 18.0517C24.8385 18.0473 24.8844 18.043 24.9119 18.043C25.2786 17.9731 25.5903 17.6589 25.5903 17.2223C25.5903 16.8033 25.2786 16.489 24.9119 16.4017C24.8568 16.3842 24.7468 16.3842 24.6735 16.3842H22.748V18.0604Z"
      fill="url(#paint1_linear_4430_189584)"
    />
    <path
      d="M24.6735 13.9223C25.0402 13.9746 25.352 14.254 25.352 14.673C25.352 15.0921 25.0402 15.3715 24.6735 15.4238C24.6551 15.4413 24.5451 15.4413 24.4901 15.4413H22.748V13.9048H24.4901C24.5204 13.9048 24.5618 13.9101 24.599 13.9148C24.6294 13.9187 24.657 13.9223 24.6735 13.9223Z"
      fill="url(#paint2_linear_4430_189584)"
    />
    <path
      d="M6.00614 6.48425C4.1724 6.48425 2.66873 7.89854 2.66873 9.66203V17.5017C3.60394 17.9382 4.57582 18.2176 5.5477 18.2176C6.70296 18.2176 7.32643 17.5541 7.32643 16.6462V12.9446H10.1871V16.6287C10.1871 18.0604 9.25186 19.2303 6.07949 19.2303C4.15406 19.2303 2.65039 18.8287 2.65039 18.8287V25.516H7.54648C9.38022 25.516 10.8839 24.1017 10.8839 22.3382V6.48425H6.00614Z"
      fill="url(#paint3_linear_4430_189584)"
    />
    <path
      d="M15.23 6.48425C13.3962 6.48425 11.8926 7.89854 11.8926 9.66203V13.8176C12.7361 13.1366 14.2031 12.7001 16.5686 12.8049C17.8339 12.8573 19.1909 13.189 19.1909 13.189V14.5335C18.5124 14.2017 17.7055 13.9049 16.6603 13.835C14.8632 13.7128 13.7813 14.5509 13.7813 16.0176C13.7813 17.5017 14.8632 18.3398 16.6603 18.2001C17.7055 18.1303 18.5124 17.816 19.1909 17.5017V18.8462C19.1909 18.8462 17.8522 19.1779 16.5686 19.2303C14.2031 19.335 12.7361 18.8985 11.8926 18.2176V25.5509H16.7887C18.6224 25.5509 20.1261 24.1366 20.1261 22.3731V6.48425H15.23Z"
      fill="url(#paint4_linear_4430_189584)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4430_189584"
        x1="21.1124"
        y1="14.6704"
        x2="29.353"
        y2="14.6704"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#007940" />
        <stop offset="0.2285" stopColor="#00873F" />
        <stop offset="0.7433" stopColor="#40A737" />
        <stop offset="1" stopColor="#5CB531" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4430_189584"
        x1="21.1124"
        y1="14.6704"
        x2="29.353"
        y2="14.6704"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#007940" />
        <stop offset="0.2285" stopColor="#00873F" />
        <stop offset="0.7433" stopColor="#40A737" />
        <stop offset="1" stopColor="#5CB531" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_4430_189584"
        x1="21.1124"
        y1="14.6704"
        x2="29.353"
        y2="14.6704"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#007940" />
        <stop offset="0.2285" stopColor="#00873F" />
        <stop offset="0.7433" stopColor="#40A737" />
        <stop offset="1" stopColor="#5CB531" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_4430_189584"
        x1="2.66456"
        y1="16.0009"
        x2="11.0327"
        y2="16.0009"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1F286F" />
        <stop offset="0.4751" stopColor="#004E94" />
        <stop offset="0.8261" stopColor="#0066B1" />
        <stop offset="1" stopColor="#006FBC" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_4430_189584"
        x1="11.8449"
        y1="16.0009"
        x2="19.972"
        y2="16.0009"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6C2C2F" />
        <stop offset="0.1735" stopColor="#882730" />
        <stop offset="0.5731" stopColor="#BE1833" />
        <stop offset="0.8585" stopColor="#DC0436" />
        <stop offset="1" stopColor="#E60039" />
      </linearGradient>
    </defs>
  </svg>
));

export default JCB;
