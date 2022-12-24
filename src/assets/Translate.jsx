/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Translate(props) {
  return (
    <svg
      width="48px"
      height="48px"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" fillOpacity={0.01} d="M0 0H48V48H0z" />
      <path
        d="M42 42l-2.286-5M26 42l2.286-5m0 0L34 24l5.714 13m-11.428 0h11.428M16 6l1 3M6 11h22M10 16s1.79 6.26 6.263 9.74C20.737 29.216 28 32 28 32"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 11s-1.79 8.217-6.263 12.783C13.263 28.348 6 32 6 32"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Translate;
