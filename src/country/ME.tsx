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
      <g clipPath="url(#clip0_4430_187568)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#FFDA44"
        />
        <path
          d="M24.0005 11.9997C24.0005 7.88122 21.9254 4.24775 18.7639 2.08667H5.23703C2.07564 4.24775 0.000488281 7.88122 0.000488281 11.9997C0.000488281 16.1183 2.07564 19.7517 5.23703 21.9127H18.7639C21.9254 19.7517 24.0005 16.1183 24.0005 11.9997Z"
          fill="#A2001D"
        />
        <path
          d="M9.3916 8.87015H14.609V6.78323L13.5655 7.30495L12.0003 5.73975L10.4351 7.30495L9.3916 6.78323V8.87015Z"
          fill="#FFDA44"
        />
        <path
          d="M16.6961 12.0003H14.0884C14.1907 11.8234 14.2501 11.6187 14.2501 11.3997C14.2501 10.7347 13.711 10.1957 13.0461 10.1957C12.5867 10.1957 12.1877 10.4531 11.9846 10.8314C11.7816 10.4531 11.3826 10.1957 10.9232 10.1957C10.2583 10.1957 9.71917 10.7347 9.71917 11.3997C9.71917 11.6188 9.7787 11.8235 9.88089 12.0003H7.30469C7.30469 12.7983 7.9997 13.4451 8.79761 13.4451H8.74952C8.74952 14.0996 9.18484 14.6523 9.7817 14.8298L8.60903 16.0026L9.7158 17.1093L11.2858 15.5393C11.3473 15.5619 11.4109 15.5799 11.4767 15.5923L10.528 17.7342C10.9826 17.9191 11.4794 18.0217 12.0004 18.0217C12.5214 18.0217 13.0182 17.9191 13.4729 17.7342L12.5242 15.5923C12.5899 15.5799 12.6535 15.5619 12.715 15.5393L14.285 17.1093L15.3917 16.0026L14.219 14.8298C14.8158 14.6522 15.2512 14.0997 15.2512 13.4451H15.203C16.001 13.4451 16.6961 12.7983 16.6961 12.0003Z"
          fill="#FFDA44"
        />
        <path
          d="M12.0003 12.7828L10.3047 13.5654V15.1307L12.0003 16.1741L13.696 15.1307V13.5654L12.0003 12.7828Z"
          fill="#6DA544"
        />
        <path
          d="M13.696 11.9991H10.3047V14.0861H13.696V11.9991Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="clip0_4430_187568">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
);

export default Microsoft;
