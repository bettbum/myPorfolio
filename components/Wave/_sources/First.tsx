'use client'
import { useDarkMode } from 'usehooks-ts';

export default function FirstWave({ ...props }) {
  const { isDarkMode } = useDarkMode();
  return (
    <svg
      width="1280"
      height="280"
      viewBox="0 0 1280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_2_3)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 25.8782L35.2 17.9705C71.4667 10.0628 141.867 -5.75249 213.333 2.15517C284.8 10.0628 355.2 41.6935 426.667 104.955C498.133 168.216 568.533 263.108 640 302.646C711.467 342.185 781.867 326.369 853.333 286.831C924.8 247.293 995.2 184.031 1066.67 152.401C1138.13 120.77 1208.53 120.77 1244.8 120.77H1280V358H1244.8C1208.53 358 1138.13 358 1066.67 358C995.2 358 924.8 358 853.333 358C781.867 358 711.467 358 640 358C568.533 358 498.133 358 426.667 358C355.2 358 284.8 358 213.333 358C141.867 358 71.4667 358 35.2 358H0V25.8782Z"
          fill={!isDarkMode ? "#3FB2FF" : "#A7B5CF" }
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2_3"
          x="-4"
          y="0"
          width="1288"
          height="366"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_3"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_3"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
