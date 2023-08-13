'use client'
import { useDarkMode } from "usehooks-ts";

export default function Third({ ...props }) {
  const {isDarkMode} = useDarkMode()
  return (
    <svg
      width="1280"
      height="238"
      viewBox="0 0 1280 238"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 95.4479L36 119C71 142.552 142 190.896 213 205.771C284 221.885 356 205.771 427 166.104C498 126.438 569 63.2188 640 55.7813C711 47.1042 782 95.4479 853 119C924 142.552 996 142.552 1067 119C1138 95.4479 1209 47.1042 1244 23.5521L1280 0V238H1244C1209 238 1138 238 1067 238C996 238 924 238 853 238C782 238 711 238 640 238C569 238 498 238 427 238C356 238 284 238 213 238C142 238 71 238 36 238H0V95.4479Z"
        fill={!isDarkMode ? "#008FEF" : "#010D2C" }
      />
    </svg>
  );
}
