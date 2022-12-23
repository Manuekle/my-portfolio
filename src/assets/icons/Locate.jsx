/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Locate(props) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.53 7.47a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-2-2a.75.75 0 111.06-1.06l1.47 1.47 2.97-2.97a.75.75 0 011.06 0z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.524 8.857a8.288 8.288 0 018.26-7.607h.432a8.288 8.288 0 018.26 7.607 8.944 8.944 0 01-1.99 6.396l-4.793 5.861a2.187 2.187 0 01-3.386 0l-4.793-5.861a8.943 8.943 0 01-1.99-6.396zm8.26-6.107A6.788 6.788 0 005.02 8.98a7.443 7.443 0 001.656 5.323l4.793 5.862a.687.687 0 001.064 0l4.793-5.862A7.443 7.443 0 0018.98 8.98a6.788 6.788 0 00-6.765-6.23h-.432z"
        fill="#fff"
      />
    </svg>
  );
}

export default Locate;
