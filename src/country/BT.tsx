import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const BT = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187448)">
      <path
        d="M3.51422 20.4855C-1.17206 15.7993 -1.17206 8.2013 3.51422 3.51497C8.2005 -1.17136 15.7985 -1.17131 20.4848 3.51497C20.4848 3.51661 23.6708 14.2989 18.9845 18.9853C14.2983 23.6716 3.5175 20.4888 3.51422 20.4855Z"
        fill="#FFDA44"
      />
      <path
        d="M3.51465 20.4845C8.20093 25.1708 15.7989 25.1708 20.4853 20.4845C25.1716 15.7982 25.1716 8.20024 20.4853 3.51392L3.51465 20.4845Z"
        fill="#FF9811"
      />
      <path
        d="M18.7886 6.78204V4.69507H14.7885L14.4829 5.00065C13.3959 6.08763 13.5788 7.35569 13.7123 8.28157C13.8361 9.14046 13.8509 9.46947 13.5315 9.78893C13.2121 10.1083 12.883 10.0935 12.0242 9.96958C11.0983 9.83613 9.83032 9.65327 8.74334 10.7402C7.6564 11.8271 7.83935 13.0951 7.97294 14.0209C8.09684 14.8797 8.11174 15.2088 7.79243 15.528C7.47307 15.8473 7.14396 15.8324 6.28535 15.7085C5.95057 15.6602 5.6044 15.6103 5.23484 15.6062L5.21191 17.6931C5.4432 17.6957 5.70752 17.7337 5.98737 17.7741C6.31868 17.822 6.69368 17.8761 7.08865 17.8761C7.49796 17.8761 7.92855 17.8177 8.3538 17.6341V19.3038H11.4843V17.7386H9.91905V16.6952H10.9625V15.13H10.1285C10.1681 14.6236 10.0985 14.1387 10.0385 13.7231C9.91465 12.8643 9.89974 12.5352 10.2191 12.216C10.5385 11.8966 10.8674 11.9114 11.7264 12.0353C12.401 12.1325 13.2574 12.2554 14.093 11.8947V13.5647H17.2234V11.9995H15.6582V10.956H16.7017V9.39082H15.8678C15.9074 8.88443 15.8379 8.3996 15.7779 7.98377C15.6914 7.38372 15.658 7.04229 15.7548 6.78208H18.7886V6.78204Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187448">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default BT;
