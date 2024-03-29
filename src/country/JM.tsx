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
      <g clipPath="url(#clip0_4430_187534)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#FFDA44"
        />
        <path
          d="M19.3054 2.48075C17.2819 0.925388 14.749 0.00012207 11.9996 0.00012207C9.25024 0.00012207 6.7173 0.925434 4.69385 2.48075L11.9996 9.7865L19.3054 2.48075Z"
          fill="#6DA544"
        />
        <path
          d="M2.48009 4.6936C0.924824 6.71706 -0.000488281 9.24995 -0.000488281 11.9994C-0.000488281 14.7488 0.924824 17.2817 2.48014 19.3052L9.78593 11.9994L2.48009 4.6936Z"
          fill="black"
        />
        <path
          d="M4.69385 21.5188C6.71735 23.0741 9.25024 23.9994 11.9996 23.9994C14.7491 23.9994 17.2819 23.0741 19.3054 21.5188L11.9996 14.213L4.69385 21.5188Z"
          fill="#6DA544"
        />
        <path
          d="M21.5191 19.3051C23.0745 17.2816 23.9997 14.7488 23.9997 11.9994C23.9997 9.24995 23.0745 6.71706 21.5191 4.6936L14.2134 11.9994L21.5191 19.3051Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187534">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
