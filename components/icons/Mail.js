import * as React from 'react';
const SvgMail = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    className="mail_svg__icon mail_svg__glyph"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M22 8.32V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.69l2 1.09 7.52 4.1A1 1 0 0 0 12 14a1 1 0 0 0 .5-.14L20 9.49Z"
    />
    <path d="m22 6-2 1.18-8 4.67L4 7.5 2 6.4V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z" />
  </svg>
);
export default SvgMail;
