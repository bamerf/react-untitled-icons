import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Next = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.0898 13.0024H27.6158V13.9593H25.4237V18.9929H24.3276V13.9593H22.0898V13.0024Z"
      fill="black"
    />
    <path
      d="M13.0015 13.0024V13.9593H8.5721V15.4985H12.1342V16.4553H8.5721V18.0361H13.0015V18.9929H7.47604V13.9593H7.47559V13.0024H13.0015Z"
      fill="black"
    />
    <path
      d="M15.7606 13.005H14.3262L19.4639 18.9955H20.9025L18.3333 16.0023L20.8984 13.0096L19.4639 13.0117L17.6151 15.1656L15.7606 13.005Z"
      fill="black"
    />
    <path
      d="M17.2327 17.284L16.5144 16.4462L14.3223 19H15.7608L17.2327 17.284Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.51469 18.993L2.37007 13H1V18.9905H2.09606V14.2805L6.13776 18.993H7.51469Z"
      fill="black"
    />
    <path
      d="M26.351 18.9565C26.2707 18.9565 26.2024 18.9304 26.1453 18.8782C26.0881 18.826 26.0598 18.7629 26.0606 18.688C26.0598 18.6153 26.0881 18.5528 26.1453 18.5006C26.2024 18.4485 26.2707 18.4224 26.351 18.4224C26.4282 18.4224 26.4958 18.4485 26.5529 18.5006C26.6109 18.5528 26.6398 18.6153 26.6406 18.688C26.6398 18.7375 26.6265 18.7828 26.5997 18.8233C26.5723 18.8645 26.5374 18.8967 26.4935 18.9201C26.4504 18.9441 26.4029 18.9565 26.351 18.9565Z"
      fill="black"
    />
    <path
      d="M28.2222 16.4326H28.7079V18.188C28.7072 18.3494 28.67 18.4873 28.5973 18.6034C28.5238 18.7194 28.422 18.8079 28.2913 18.8704C28.1613 18.9322 28.0091 18.9638 27.836 18.9638C27.6778 18.9638 27.536 18.937 27.4098 18.8848C27.2835 18.8327 27.1833 18.7544 27.1097 18.6514C27.0354 18.5484 26.999 18.4201 26.999 18.2663H27.4855C27.4863 18.3336 27.5026 18.3919 27.5338 18.4407C27.5649 18.4894 27.608 18.5265 27.663 18.5526C27.7186 18.5786 27.7826 18.5917 27.8546 18.5917C27.9326 18.5917 27.9994 18.5766 28.0536 18.5457C28.1078 18.5155 28.1494 18.4702 28.1784 18.4098C28.2066 18.35 28.2215 18.2759 28.2222 18.188V16.4326Z"
      fill="black"
    />
    <path
      d="M30.7064 17.1193C30.6945 17.0129 30.6425 16.9298 30.5519 16.8708C30.4605 16.8111 30.3425 16.7816 30.1976 16.7816C30.0959 16.7816 30.0083 16.796 29.9355 16.8241C29.8627 16.853 29.8063 16.8914 29.7676 16.9401C29.7291 16.9889 29.7098 17.0445 29.7082 17.107C29.7082 17.1591 29.7216 17.2044 29.7476 17.2422C29.7736 17.2806 29.8085 17.3129 29.8538 17.339C29.8983 17.3658 29.9481 17.3877 30.0024 17.4056C30.0573 17.4234 30.1123 17.4385 30.1672 17.4509L30.4204 17.5093C30.5222 17.5312 30.621 17.5607 30.7153 17.5985C30.8096 17.6356 30.895 17.6829 30.97 17.7399C31.045 17.7969 31.1045 17.8656 31.1483 17.9459C31.1921 18.0262 31.2144 18.1202 31.2144 18.2287C31.2144 18.3749 31.1743 18.5033 31.0933 18.6145C31.0123 18.7251 30.8957 18.8116 30.7428 18.874C30.5905 18.9358 30.4063 18.9674 30.1895 18.9674C29.9801 18.9674 29.7974 18.9372 29.6436 18.8768C29.4892 18.8171 29.3688 18.7292 29.282 18.6138C29.1951 18.4985 29.1483 18.3578 29.1416 18.1923H29.6229C29.6296 18.2788 29.6593 18.3509 29.7098 18.4093C29.761 18.4669 29.8278 18.5095 29.9095 18.5383C29.992 18.5665 30.084 18.5809 30.1858 18.5809C30.292 18.5809 30.3856 18.5658 30.4665 18.5363C30.5467 18.5067 30.6098 18.4656 30.6551 18.412C30.7012 18.3591 30.7242 18.2967 30.725 18.2253C30.7242 18.1601 30.7034 18.1058 30.6633 18.0633C30.6225 18.0207 30.566 17.985 30.4939 17.9562C30.4212 17.9273 30.3365 17.9013 30.24 17.8786L29.9326 17.8058C29.7105 17.753 29.5345 17.6726 29.406 17.5649C29.2768 17.4571 29.2129 17.3143 29.2129 17.1351C29.2129 16.9882 29.2559 16.8591 29.3429 16.7486C29.429 16.6381 29.5471 16.5523 29.6964 16.4912C29.8464 16.4294 30.0157 16.3992 30.2043 16.3992C30.396 16.3992 30.5638 16.4294 30.7086 16.4912C30.8534 16.5523 30.9671 16.6374 31.0495 16.7459C31.1319 16.8543 31.175 16.9786 31.1772 17.1193H30.7064Z"
      fill="black"
    />
  </svg>
));

export default Next;