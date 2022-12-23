/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function OpenNew(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M4.5 17q-.625 0-1.062-.438Q3 16.125 3 15.5v-11q0-.625.438-1.062Q3.875 3 4.5 3H10v1.5H4.5v11h11V10H17v5.5q0 .625-.438 1.062Q16.125 17 15.5 17zm3.562-4L7 11.938 14.438 4.5H12V3h5v5h-1.5V5.562z" />
    </svg>
  );
}

export default OpenNew;
