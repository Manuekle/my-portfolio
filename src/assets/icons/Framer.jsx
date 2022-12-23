/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Framer(props) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z" />
    </svg>
  );
}

export default Framer;
