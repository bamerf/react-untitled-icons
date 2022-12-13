import { forwardRef } from 'react';
import type { CommonProps } from '../types';

const Procreate = forwardRef<SVGSVGElement, CommonProps>(
  ({ size = 24 }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z"
        fill="#242424"
      />
      <path
        d="M9.86688 16.4C5.96689 19.2704 5.2002 23.4667 5.2002 26.9667C5.37797 25.9222 6.19353 23.4733 8.03353 22.0333C10.7669 19.8942 15.7668 20.5989 21.2335 16.9667C26.7002 13.3344 27.2335 8.60001 26.5335 4.96667C26.0472 8.47256 24.3874 10.0005 22.1002 11.3667C17.1336 14.3333 14.0336 13.3333 9.86688 16.4Z"
        fill="url(#paint0_linear_4430_189392)"
      />
      <path
        d="M9.86688 16.4C5.96689 19.2704 5.2002 23.4667 5.2002 26.9667C5.37797 25.9222 6.19353 23.4733 8.03353 22.0333C10.7669 19.8942 15.7668 20.5989 21.2335 16.9667C26.7002 13.3344 27.2335 8.60001 26.5335 4.96667C26.0472 8.47256 24.3874 10.0005 22.1002 11.3667C17.1336 14.3333 14.0336 13.3333 9.86688 16.4Z"
        fill="url(#paint1_linear_4430_189392)"
      />
      <path
        d="M5.24707 25.532C5.46108 22.3695 6.48794 18.887 9.86709 16.4C12.0393 14.8013 13.9215 14.3078 15.9295 13.7813C17.1013 13.4741 18.316 13.1556 19.656 12.5997C19.1671 13.0667 16.844 14.1567 15.0917 14.8849C13.344 15.6113 11.5013 16.3772 9.96711 17.4C6.88892 19.4521 5.6373 23.0225 5.24707 25.532Z"
        fill="url(#paint2_linear_4430_189392)"
      />
      <path
        d="M5.24707 25.532C5.46108 22.3695 6.48794 18.887 9.86709 16.4C12.0393 14.8013 13.9215 14.3078 15.9295 13.7813C17.1013 13.4741 18.316 13.1556 19.656 12.5997C19.1671 13.0667 16.844 14.1567 15.0917 14.8849C13.344 15.6113 11.5013 16.3772 9.96711 17.4C6.88892 19.4521 5.6373 23.0225 5.24707 25.532Z"
        fill="url(#paint3_linear_4430_189392)"
      />
      <path
        d="M24.2179 14.3709C23.8346 14.7463 23.4072 15.0825 22.9336 15.3667C20.8002 16.6467 18.5327 17.0595 16.3263 17.4611C14.568 17.7812 12.8486 18.0942 11.2669 18.8333C7.70047 20.4999 5.50053 23.9662 5.2003 26.9661C5.20027 26.9662 5.20025 26.9663 5.20023 26.9665C5.20022 26.9659 5.20021 26.9654 5.2002 26.9648C5.20021 26.7359 5.20351 26.5039 5.21076 26.2695C5.22893 25.8977 5.26738 25.4857 5.33099 25.0463C5.80182 22.5792 7.08239 19.323 9.96689 17.4C11.188 16.5859 12.6044 15.9347 14.0129 15.3365C15.2515 14.9298 16.3679 14.6768 17.4315 14.4356C19.1058 14.056 20.6493 13.7061 22.3336 12.8333C25.8677 11.002 26.7936 7.2388 26.5447 5.02515C27.0731 7.83003 26.8595 11.2799 24.2179 14.3709Z"
        fill="url(#paint4_linear_4430_189392)"
      />
      <path
        d="M24.2181 14.371C23.8348 14.7464 23.4075 15.0825 22.9338 15.3667C20.8005 16.6467 18.533 17.0595 16.3265 17.4611C14.5683 17.7812 12.8489 18.0942 11.2672 18.8333C9.21612 19.7918 7.61702 21.3455 6.57129 23.0634C7.49398 21.7669 8.89962 20.3185 10.6338 19.7667C12.3261 19.2282 13.9402 19.1726 15.6172 19.1148C16.0978 19.0982 16.5836 19.0815 17.0778 19.0532C18.4099 18.5682 19.8059 17.9154 21.2338 16.9667C22.4646 16.1489 23.4453 15.2753 24.2181 14.371Z"
        fill="url(#paint5_linear_4430_189392)"
      />
      <path
        d="M24.2181 14.371C23.8348 14.7464 23.4075 15.0825 22.9338 15.3667C20.8005 16.6467 18.533 17.0595 16.3265 17.4611C14.5683 17.7812 12.8489 18.0942 11.2672 18.8333C9.21612 19.7918 7.61702 21.3455 6.57129 23.0634C7.49398 21.7669 8.89962 20.3185 10.6338 19.7667C12.3261 19.2282 13.9402 19.1726 15.6172 19.1148C16.0978 19.0982 16.5836 19.0815 17.0778 19.0532C18.4099 18.5682 19.8059 17.9154 21.2338 16.9667C22.4646 16.1489 23.4453 15.2753 24.2181 14.371Z"
        fill="url(#paint6_linear_4430_189392)"
      />
      <path
        d="M26.5445 5.02515C26.5408 5.00562 26.5371 4.98613 26.5333 4.96667C26.047 8.47256 24.3872 10.0005 22.1 11.3667C21.2336 11.8842 20.4239 12.281 19.6555 12.5998C19.1665 13.0667 16.8435 14.1567 15.0912 14.885L15.091 14.8851C14.7344 15.0333 14.3738 15.1831 14.0127 15.3365C15.2513 14.9298 16.3677 14.6767 17.4313 14.4356C19.1055 14.056 20.6491 13.7061 22.3333 12.8333C25.8674 11.002 26.7933 7.2388 26.5445 5.02515Z"
        fill="url(#paint7_linear_4430_189392)"
      />
      <path
        d="M26.5445 5.02515C26.5408 5.00562 26.5371 4.98613 26.5333 4.96667C26.047 8.47256 24.3872 10.0005 22.1 11.3667C21.2336 11.8842 20.4239 12.281 19.6555 12.5998C19.1665 13.0667 16.8435 14.1567 15.0912 14.885L15.091 14.8851C14.7344 15.0333 14.3738 15.1831 14.0127 15.3365C15.2513 14.9298 16.3677 14.6767 17.4313 14.4356C19.1055 14.056 20.6491 13.7061 22.3333 12.8333C25.8674 11.002 26.7933 7.2388 26.5445 5.02515Z"
        fill="url(#paint8_linear_4430_189392)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4430_189392"
          x1="17.4002"
          y1="18.2"
          x2="5.86686"
          y2="26.4667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FE5004" />
          <stop offset="0.602538" stopColor="#FFB915" />
          <stop offset="1" stopColor="#FFFC41" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4430_189392"
          x1="12.8335"
          y1="18.9"
          x2="12.9002"
          y2="20.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD3E00" />
          <stop offset="1" stopColor="#FD4400" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4430_189392"
          x1="19.6671"
          y1="12"
          x2="3.40042"
          y2="26.4667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#005FC6" />
          <stop offset="0.279756" stopColor="#23A4DF" />
          <stop offset="0.465158" stopColor="#3AC2B7" />
          <stop offset="0.640642" stopColor="#60EC7A" />
          <stop offset="0.818668" stopColor="#CFFDBD" />
          <stop offset="1" stopColor="#D0FCB6" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_4430_189392"
          x1="16.3671"
          y1="14.7667"
          x2="14.9671"
          y2="13.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0061CB" />
          <stop offset="1" stopColor="#067EEA" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_4430_189392"
          x1="26.6002"
          y1="5.00001"
          x2="5.2002"
          y2="26.9333"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8E55F1" />
          <stop offset="0.140795" stopColor="#8B48DF" />
          <stop offset="0.274905" stopColor="#E04DD9" />
          <stop offset="0.492309" stopColor="#F496C8" />
          <stop offset="0.633104" stopColor="#FAD2BA" />
          <stop offset="0.856964" stopColor="#FEF7E5" />
          <stop offset="1" stopColor="#FFF5BF" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_4430_189392"
          x1="24.5005"
          y1="14.1667"
          x2="7.03379"
          y2="22.0667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F41A73" />
          <stop offset="0.399909" stopColor="#FC50A3" />
          <stop offset="0.584511" stopColor="#FE9485" />
          <stop offset="0.703104" stopColor="#FFAF88" />
          <stop offset="1" stopColor="#FFC385" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_4430_189392"
          x1="18.2005"
          y1="16.6"
          x2="18.2338"
          y2="18.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9B0008" />
          <stop offset="1" stopColor="#EA115A" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_4430_189392"
          x1="26.6"
          y1="6.80001"
          x2="10.8333"
          y2="17.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#231283" />
          <stop offset="0.362865" stopColor="#7053C6" />
          <stop offset="0.466353" stopColor="#7272DB" />
          <stop offset="0.634311" stopColor="#399EE9" />
          <stop offset="1" stopColor="#00CFFF" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_4430_189392"
          x1="22.6667"
          y1="12"
          x2="23.3667"
          y2="12.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3F259D" stopOpacity="0" />
          <stop offset="1" stopColor="#412DAA" />
        </linearGradient>
      </defs>
    </svg>
  )
);

export default Procreate;
