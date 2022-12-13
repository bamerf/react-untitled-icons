import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const AO = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187430)">
      <path
        d="M0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12C23.4783 12 12 13.5652 12 13.5652L0 12Z"
        fill="#D80027"
      />
      <path
        d="M24 12.0004C24 18.6277 18.6274 24.0004 12 24.0004C5.37262 24.0004 0 18.6277 0 12.0004"
        fill="black"
      />
      <path
        d="M10.354 9.54353L11.3713 10.2818L10.9836 11.4775L12.0002 10.738L13.0175 11.4763L12.6284 10.281L13.6448 9.54156L12.3879 9.54231L11.9987 8.34705L11.611 9.54273L10.354 9.54353Z"
        fill="#FFDA44"
      />
      <path
        d="M14.9999 6.80332C14.0543 6.25736 13.0204 5.99969 11.9999 6.00147V7.56635C12.7542 7.56499 13.5183 7.7553 14.2173 8.1589C16.335 9.38158 17.0632 12.0992 15.8405 14.2169C14.6178 16.3346 11.9002 17.0628 9.78248 15.8402C9.16551 15.484 8.66747 15.0003 8.30034 14.4422L6.99365 15.3048C7.49039 16.06 8.1652 16.7137 8.9999 17.1956C11.8651 18.8498 15.5418 17.8646 17.196 14.9995C18.8502 12.1343 17.8651 8.45754 14.9999 6.80332Z"
        fill="#FFDA44"
      />
      <path
        d="M8.53996 10.9561C8.12512 11.7144 8.40365 12.6656 9.16199 13.0804L14.2455 15.8582C13.8998 16.4902 14.0834 17.2593 14.7154 17.605L16.0886 18.3562C16.7205 18.702 17.5132 18.4698 17.8589 17.8379L18.6101 16.4647L8.53996 10.9561Z"
        fill="#FFDA44"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187430">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default AO;