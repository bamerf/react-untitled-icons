import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Discord = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 11.6C2 8.23969 2 6.55953 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C6.55953 2 8.23969 2 11.6 2H20.4C23.7603 2 25.4405 2 26.7239 2.65396C27.8529 3.2292 28.7708 4.14708 29.346 5.27606C30 6.55953 30 8.23969 30 11.6V20.4C30 23.7603 30 25.4405 29.346 26.7239C28.7708 27.8529 27.8529 28.7708 26.7239 29.346C25.4405 30 23.7603 30 20.4 30H11.6C8.23969 30 6.55953 30 5.27606 29.346C4.14708 28.7708 3.2292 27.8529 2.65396 26.7239C2 25.4405 2 23.7603 2 20.4V11.6Z"
      fill="url(#paint0_linear_4430_189387)"
    />
    <path
      d="M24.2752 10.0267C22.7615 8.74667 20.945 8.10667 19.0275 8L18.7248 8.32C20.4404 8.74667 21.9541 9.6 23.367 10.7733C21.6514 9.81333 19.7339 9.17333 17.7156 8.96C17.1101 8.85333 16.6055 8.85333 16 8.85333C15.3945 8.85333 14.8899 8.85333 14.2844 8.96C12.2661 9.17333 10.3486 9.81333 8.63303 10.7733C10.0459 9.6 11.5596 8.74667 13.2752 8.32L12.9725 8C11.055 8.10667 9.23853 8.74667 7.72477 10.0267C6.00917 13.44 5.10092 17.28 5 21.2267C6.51376 22.9333 8.63303 24 10.8532 24C10.8532 24 11.5596 23.1467 12.0642 22.4C10.7523 22.08 9.54128 21.3333 8.73395 20.16C9.44037 20.5867 10.1468 21.0133 10.8532 21.3333C11.7615 21.76 12.6697 21.9733 13.578 22.1867C14.3853 22.2933 15.1927 22.4 16 22.4C16.8073 22.4 17.6147 22.2933 18.422 22.1867C19.3303 21.9733 20.2385 21.76 21.1468 21.3333C21.8532 21.0133 22.5596 20.5867 23.2661 20.16C22.4587 21.3333 21.2477 22.08 19.9358 22.4C20.4404 23.1467 21.1468 24 21.1468 24C23.367 24 25.4862 22.9333 27 21.2267C26.8991 17.28 25.9908 13.44 24.2752 10.0267ZM12.6697 19.3067C11.6606 19.3067 10.7523 18.3467 10.7523 17.1733C10.7523 16 11.6606 15.04 12.6697 15.04C13.6789 15.04 14.5872 16 14.5872 17.1733C14.5872 18.3467 13.6789 19.3067 12.6697 19.3067ZM19.3303 19.3067C18.3211 19.3067 17.4128 18.3467 17.4128 17.1733C17.4128 16 18.3211 15.04 19.3303 15.04C20.3394 15.04 21.2477 16 21.2477 17.1733C21.2477 18.3467 20.3394 19.3067 19.3303 19.3067Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4430_189387"
        x1="16"
        y1="2"
        x2="16"
        y2="30"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#687EC9" />
        <stop offset="1" stopColor="#5971C3" />
      </linearGradient>
    </defs>
  </svg>
));

export default Discord;