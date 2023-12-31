'use client'
import { useDarkMode } from "usehooks-ts";

export default function Second({ ...props }) {
  const {isDarkMode} = useDarkMode()
  return <svg
    width="1280"
    height="200"
    viewBox="0 0 1280 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 61.8127L35.2 66.0076C71.4667 70.2025 141.867 78.5924 213.333 82.7873C284.8 86.9823 355.2 86.9823 426.667 99.5671C498.133 112.152 568.533 137.322 640 124.737C711.467 112.152 781.867 61.8127 853.333 32.4481C924.8 3.08355 995.2 -5.30632 1066.67 3.08355C1138.13 11.4734 1208.53 36.643 1244.8 49.2278L1280 61.8127V238H1244.8C1208.53 238 1138.13 238 1066.67 238C995.2 238 924.8 238 853.333 238C781.867 238 711.467 238 640 238C568.533 238 498.133 238 426.667 238C355.2 238 284.8 238 213.333 238C141.867 238 71.4667 238 35.2 238H0V61.8127Z"
      fill={!isDarkMode ? "#1D68AA" : "#111F41" }
    />
  </svg>;
}
