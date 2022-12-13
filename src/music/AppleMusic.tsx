import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const AppleMusic = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="16.0003"
        cy="16.0154"
        rx="12.7611"
        ry="12.7765"
        fill="url(#paint0_linear_4430_189437)"
      />
      <path
        d="M13.1551 8.51062L21.5629 6.8396C21.946 6.76345 22.3031 7.05657 22.3031 7.44718V20.3294C22.3031 21.4261 21.5362 22.3734 20.4635 22.6016L19.7207 22.7596C18.4268 23.0349 17.208 22.0482 17.208 20.7252C17.208 19.7933 17.8361 18.9785 18.7373 18.7413L20.8425 18.1873C21.1283 18.1121 21.3274 17.8538 21.3274 17.5583V11.5773C21.3274 11.3023 21.0748 11.0968 20.8056 11.1527L13.7993 12.6089C13.5837 12.6537 13.4292 12.8437 13.4292 13.0638V21.9955C13.4292 23.1951 12.5899 24.2311 11.4164 24.4801L10.9071 24.5881C9.57379 24.8709 8.31858 23.854 8.31858 22.4911C8.31858 21.6225 8.90319 20.8627 9.74278 20.6401L11.9464 20.0558C12.218 19.9838 12.4071 19.738 12.4071 19.457V9.42199C12.4071 8.97864 12.7203 8.59704 13.1551 8.51062Z"
        fill="url(#paint1_radial_4430_189437)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16ZM28.7611 16.0155C28.7611 23.0718 23.0477 28.792 16 28.792C8.95226 28.792 3.23894 23.0718 3.23894 16.0155C3.23894 8.95919 8.95226 3.23894 16 3.23894C23.0477 3.23894 28.7611 8.95919 28.7611 16.0155Z"
        fill="url(#paint2_radial_4430_189437)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4430_189437"
          x1="16.0003"
          y1="3.23889"
          x2="16.0003"
          y2="28.792"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#DDE2E7" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_4430_189437"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8.31858 27.7389) rotate(-55.1325) scale(28.0109 21.9967)"
        >
          <stop stopColor="#7A66FB" />
          <stop offset="0.440198" stopColor="#52A2F4" />
          <stop offset="0.702" stopColor="#FC5D6D" />
          <stop offset="1" stopColor="#E85E7B" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_4430_189437"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8.31858 27.7389) rotate(-55.1325) scale(28.0109 21.9967)"
        >
          <stop stopColor="#7A66FB" />
          <stop offset="0.440198" stopColor="#52A2F4" />
          <stop offset="0.702" stopColor="#FC5D6D" />
          <stop offset="1" stopColor="#E85E7B" />
        </radialGradient>
      </defs>
    </svg>
  )
);

export default AppleMusic;
