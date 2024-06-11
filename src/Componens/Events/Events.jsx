import React, { useState, useEffect } from 'react';
import './Events.css';

export default function Events() {
  const ramadanDate = new Date('2024-04-02T00:00:00');

  const calculateTimeLeft = () => {
    const difference = ramadanDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdown = (
    <div>
      <p>Time until Ramadan:</p>
      <p>{timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds</p>
    </div>
  );

  return (
    <div>
      <section className="event">
        <div className="eventtime">
          <h2>UPCOMING EVENTS</h2>
          {countdown}
        </div>
      </section>
    </div>
  );
}
