/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Mail(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} {...props}>
      <path d="M3.5 16q-.625 0-1.062-.438Q2 15.125 2 14.5v-9q0-.625.438-1.062Q2.875 4 3.5 4h13q.625 0 1.062.438Q18 4.875 18 5.5v9q0 .625-.438 1.062Q17.125 16 16.5 16zm6.5-5L3.5 7.271V14.5h13V7.271zm0-1.771L16.5 5.5h-13zM3.5 7.271V5.5v9z" />
    </svg>
  );
}

export default Mail;
