import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const MP = forwardRef<SVGSVGElement, CommonProps>(({ size = 24 }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_4430_187584)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#338AF3"
      />
      <path
        d="M11.6211 19.5561C11.2976 19.5405 11.0299 19.3302 10.9251 19.0448C10.7399 19.2864 10.4216 19.408 10.108 19.3271C9.79394 19.2462 9.57433 18.9864 9.52891 18.6848C9.29828 18.8841 8.96228 18.9383 8.6717 18.796C8.38056 18.653 8.21781 18.354 8.2345 18.0498C7.96895 18.199 7.62878 18.1844 7.37261 17.9861C7.11695 17.7879 7.0173 17.4628 7.0945 17.168C6.80439 17.2609 6.47467 17.1785 6.26336 16.9327C6.05205 16.6875 6.01966 16.3489 6.15433 16.076C5.8517 16.1083 5.54495 15.9612 5.38736 15.6785C5.22925 15.3957 5.26581 15.0571 5.45308 14.8165C5.14994 14.7873 4.87862 14.5812 4.78159 14.2723C4.68405 13.9635 4.78839 13.639 5.02056 13.4412C4.72942 13.3514 4.50611 13.0947 4.47325 12.7728C4.44039 12.451 4.60736 12.1551 4.87394 12.008C4.60731 11.8619 4.43931 11.5661 4.47114 11.2447C4.47114 11.2447 4.47114 11.2447 4.47166 11.2447C4.50348 10.9222 4.7268 10.6651 5.01737 10.5742C4.7852 10.377 4.67983 10.053 4.77634 9.74411C4.87286 9.43474 5.14361 9.22811 5.4468 9.19783C5.25948 8.95783 5.22194 8.61916 5.37897 8.33594C5.536 8.05315 5.8428 7.90549 6.14594 7.93732C6.01028 7.66446 6.04211 7.32583 6.25291 7.0796C6.46319 6.83388 6.79291 6.75091 7.08353 6.84274C7.00525 6.54846 7.10439 6.22291 7.36005 6.02416C7.61519 5.82532 7.95536 5.81018 8.22091 5.95835C8.2037 5.65422 8.36594 5.35521 8.65656 5.21172C8.94667 5.06875 9.28319 5.122 9.51428 5.32127C9.55862 5.01977 9.77828 4.75891 10.0918 4.67744C10.4049 4.59607 10.7231 4.71658 10.9089 4.95761C11.0137 4.67224 11.2809 4.46144 11.6043 4.44527C11.9273 4.42863 12.2142 4.61013 12.3478 4.88308C12.5075 4.62429 12.8111 4.47091 13.131 4.51943C13.4513 4.56743 13.6971 4.80321 13.7732 5.09805C13.9819 4.87572 14.3106 4.7876 14.6143 4.89921C14.9185 5.01138 15.1115 5.29207 15.1261 5.59675C15.375 5.42149 15.7151 5.4011 15.9901 5.57224C16.2651 5.74286 16.3971 6.05641 16.3501 6.35744C16.6292 6.2359 16.9663 6.28441 17.2011 6.50664C17.4359 6.72944 17.5026 7.06282 17.3962 7.34819C17.6941 7.28505 18.0145 7.39985 18.2002 7.66539C18.3859 7.93043 18.3844 8.2706 18.2232 8.52888C18.5274 8.52677 18.818 8.70419 18.9468 9.00105C19.0752 9.29843 19.0047 9.63185 18.7945 9.85254C19.0935 9.91202 19.3423 10.1442 19.408 10.4614C19.4732 10.7786 19.3371 11.0901 19.0872 11.2638C19.3668 11.3823 19.564 11.6593 19.5646 11.9828C19.5646 11.9864 19.5646 11.9896 19.5646 11.9933C19.5646 11.9954 19.5646 11.998 19.5646 12.0001C19.5646 12.3235 19.3684 12.6011 19.0887 12.7206C19.3392 12.8933 19.4764 13.2048 19.4112 13.522C19.3465 13.8392 19.0982 14.0719 18.7992 14.1324C19.01 14.3526 19.0815 14.6854 18.9536 14.9834C18.8258 15.2808 18.5352 15.4587 18.2305 15.4571C18.3922 15.7154 18.3948 16.0556 18.2096 16.3211C18.0244 16.5867 17.7046 16.7025 17.4067 16.6399C17.5136 16.9248 17.4474 17.2587 17.2131 17.482C16.9783 17.7048 16.6418 17.7538 16.3627 17.6333C16.4102 17.9338 16.2787 18.2479 16.0042 18.4196C15.7298 18.5913 15.3896 18.5714 15.1402 18.3966C15.1261 18.7013 14.9341 18.9826 14.6305 19.0953C14.6305 19.0953 14.6305 19.0953 14.63 19.0953C14.3263 19.2074 13.9976 19.1198 13.7884 18.8981C13.7133 19.1934 13.4681 19.4297 13.1477 19.4788C12.8279 19.5273 12.5237 19.375 12.3636 19.1162C12.2363 19.3786 11.9671 19.557 11.6603 19.557C11.6472 19.5572 11.6342 19.5567 11.6211 19.5561Z"
        fill="#F3F3F3"
      />
      <path
        d="M12.0001 17.2183C14.8816 17.2183 17.2175 14.8824 17.2175 12.0009C17.2175 9.11947 14.8816 6.78357 12.0001 6.78357C9.11862 6.78357 6.78271 9.11947 6.78271 12.0009C6.78271 14.8824 9.11862 17.2183 12.0001 17.2183Z"
        fill="#338AF3"
      />
      <path
        d="M13.142 10.229C13.3983 10.0388 13.5652 9.73494 13.5652 9.39125V8.86953C13.5652 8.29321 13.0981 7.82605 12.5217 7.82605H11.4783C10.902 7.82605 10.4348 8.29321 10.4348 8.86953V9.39125C10.4348 9.73494 10.6017 10.0388 10.858 10.229L9.91309 19.826C9.91309 19.826 10.4348 20.3478 12.0001 20.3478C13.5653 20.3478 14.087 19.826 14.087 19.826L13.142 10.229Z"
        fill="#BDBCC1"
      />
      <path
        d="M12.0002 7.82605L12.9067 10.616H15.8404L13.4671 12.3404L14.3735 15.1304L12.0002 13.4061L9.62687 15.1304L10.5335 12.3404L8.16016 10.616H11.0937L12.0002 7.82605Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_4430_187584">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default MP;