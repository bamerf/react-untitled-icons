import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const AI = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187431)">
      <path
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 12.0029 12 0.0013125 12 0C18.6274 0 24 5.37262 24 12Z"
        fill="#0052B4"
      />
      <path
        d="M11.9673 12.0005H11.9995C11.9995 11.9897 11.9995 11.9792 11.9995 11.9684C11.9887 11.9791 11.978 11.9898 11.9673 12.0005Z"
        fill="#F0F0F0"
      />
      <path
        d="M12 6.26086C12 4.14937 12 2.76586 12 0H11.998C5.37145 0.001125 0 5.37323 0 12H6.26086V8.47448L9.78637 12H11.9679C11.9786 11.9893 11.9893 11.9786 12 11.9679C12 11.1594 12 10.4381 12 9.78647L8.47443 6.26086H12Z"
        fill="#F0F0F0"
      />
      <path
        d="M6.07075 1.56506C4.19393 2.63377 2.6336 4.19405 1.56494 6.07088V11.9999H4.6954V4.69561V4.69552H11.9997C11.9997 3.70819 11.9997 2.7676 11.9997 1.56506H6.07075Z"
        fill="#D80027"
      />
      <path
        d="M11.9994 10.5248L7.73588 6.26135H6.26025V6.26145L11.9993 12.0005H11.9994C11.9994 12.0005 11.9994 10.9829 11.9994 10.5248Z"
        fill="#D80027"
      />
      <path
        d="M20.2942 13.7574C20.6393 13.2826 20.8698 12.7029 20.8698 12.0008V6.78339C20.4337 7.11095 19.8919 7.30511 19.3046 7.30511C18.4512 7.30511 17.6935 6.89528 17.2176 6.26172C16.7416 6.89528 15.984 7.30511 15.1306 7.30511C14.5433 7.30511 14.0014 7.11091 13.5654 6.78348V12.0008C13.5654 12.7029 13.7959 13.2826 14.141 13.7574H20.2942Z"
        fill="#F3F3F3"
      />
      <path
        d="M19.2085 11.0321C19.3746 10.6269 19.5038 10.0345 19.5038 9.7397C19.5038 9.26603 18.8863 8.88208 18.8863 8.88208C18.8863 8.88208 18.2687 9.26603 18.2687 9.7397C18.2687 10.0345 18.398 10.6269 18.564 11.0321L18.2075 11.837C18.4171 11.9222 18.6461 11.9696 18.8863 11.9696C19.1265 11.9696 19.3555 11.9222 19.5651 11.837L19.2085 11.0321Z"
        fill="#FF9811"
      />
      <path
        d="M16.7951 8.42672C16.3612 8.4855 15.7835 8.66995 15.5283 8.81733C15.1181 9.05419 15.0942 9.78089 15.0942 9.78089C15.0942 9.78089 15.7356 10.1237 16.1457 9.88687C16.4011 9.73945 16.8494 9.33145 17.1172 8.98495L17.9927 8.8912C17.9617 8.66723 17.888 8.44519 17.768 8.2372C17.6479 8.02922 17.4925 7.85447 17.3139 7.71558L16.7951 8.42672Z"
        fill="#FF9811"
      />
      <path
        d="M15.7445 11.8206C16.0123 12.1669 16.4608 12.5748 16.7162 12.7223C17.1264 12.9591 17.7677 12.6164 17.7677 12.6164C17.7677 12.6164 17.7438 11.8896 17.3336 11.6528C17.0782 11.5053 16.5007 11.3211 16.0667 11.2624L15.5479 10.5511C15.3694 10.69 15.214 10.8648 15.0938 11.0726C14.9738 11.2807 14.9003 11.5027 14.8691 11.7268L15.7445 11.8206Z"
        fill="#FF9811"
      />
      <path
        d="M14.0112 13.5657C14.9857 15.1292 17.217 15.6525 17.217 15.6525C17.217 15.6525 19.4482 15.1292 20.4227 13.5657H14.0112Z"
        fill="#338AF3"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187431">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default AI;