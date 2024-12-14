'use client'
import React, { useEffect, useState } from 'react';
import { format, differenceInMilliseconds, addDays, addHours } from 'date-fns';

const Countdown = () => {
  const storedLaunchDate = localStorage.getItem('launchDate');
  const storedLaunchDateObj = storedLaunchDate ? new Date(storedLaunchDate) : null;

  // Set the launch date to 7 days and 5 hours from today if not already stored
  const launchDate = storedLaunchDateObj || addHours(addDays(new Date(), 7), 5);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    localStorage.setItem('launchDate', launchDate.toString());

    const interval = setInterval(() => {
      const now = new Date();
      const difference = differenceInMilliseconds(launchDate, now);

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <div className='flex w-full flexCenter gap-7 text-bold mt-4'>
      <p>{`${timeLeft.days}  days `}</p>
        <span>:</span>
    <p>{` ${timeLeft.hours} hours `}</p>
     <span>:</span>
     <p>{`${timeLeft.minutes} minutes `}</p>
     <span>:</span>
     <p>{`${timeLeft.seconds} seconds`}</p>
    </div>
  );
};

export default Countdown;


