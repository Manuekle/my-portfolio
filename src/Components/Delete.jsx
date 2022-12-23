/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useRef, useEffect } from 'react';
import * as Toast from '@radix-ui/react-toast';
import Close from '../assets/Close';

function Delete({ open, setOpen }) {
  // const [open, setOpen] = useState(false);
  const eventDateRef = useRef(new Date());
  const timerRef = useRef(0);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <Toast.Provider swipeDirection="right" className="fixed">
      <Toast.Root
        className="ToastRoot cursor-move mx-4 my-4 bg-[#1C1C1C] p-4 rounded-md"
        open={open}
        onOpenChange={setOpen}
      >
        <span className="flex justify-between items-start">
          <h1 className="text-emerald-500/80 text-sm">
            Tu Mensaje se envio correctamente
          </h1>
          <Toast.Action asChild altText="success" className="cursor-pointer">
            <button type="button">
              <Close className="fill-white/50 hover:fill-white" />
            </button>
          </Toast.Action>
        </span>
        <Toast.Description asChild className="text-white/80 text-sm">
          <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        </Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport xl:w-[430px] w-full" />
    </Toast.Provider>
  );
}

function oneWeekAway(date) {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short'
  }).format(date);
}

export default Delete;
