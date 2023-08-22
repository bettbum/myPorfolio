import * as React from 'react';
const SvgHealth = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="m192 218.368 64 128.001 34.517-69.036h130.219c-30.058 57.827-84.97 121.827-164.736 192-79.766-70.173-134.678-134.173-164.736-192h71.254L192 218.368ZM332.8 64C396.423 64 448 115.577 448 179.2c0 17.724-3.078 36.213-9.235 55.466H311.85L288 186.965l-32 63.98-64-127.98-55.872 111.703-62.893-.001C67.078 215.413 64 196.924 64 179.2 64 115.577 115.577 64 179.2 64c29.513 0 56.434 11.098 76.817 29.348C276.383 75.091 303.297 64 332.8 64Z"
    />
  </svg>
);
export default SvgHealth;
