import React, { useRef, useEffect, useState } from "react";

const CountDown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  const setTimer = () => {
    const countdownDate = new Date("Dec 30, 2022 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (100 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    setTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="ptf-animated-block" data-aos="fade" data-aos-delay="100">
      {/* <!--Countdown--> */}
      <div
        className="ptf-countdown"
        data-due-date="2022/01/01"
        style={{ maxWidth: "40.3125rem" }}
      >
        <div className="ptf-countdown__item">
          <div className="days">
            <span className="digits">{timerDays}</span>
            <span className="label">Days</span>
          </div>
        </div>
        {/* End .ptf-countdown__item */}

        <div className="ptf-countdown__item">
          <div className="sep">:</div>
        </div>

        <div className="ptf-countdown__item">
          <div className="hours">
            <span className="digits">{timerHours}</span>
            <span className="label">Hours</span>
          </div>
        </div>
        {/* End .ptf-countdown__item */}

        <div className="ptf-countdown__item">
          <div className="sep">:</div>
        </div>

        <div className="ptf-countdown__item">
          <div className="minutes">
            <span className="digits">{timerMinutes}</span>
            <span className="label">Minutes</span>
          </div>
        </div>
        {/* End .ptf-countdown__item */}

        <div className="ptf-countdown__item">
          <div className="sep">:</div>
        </div>

        <div className="ptf-countdown__item">
          <div className="seconds">
            <span className="digits">{timerSeconds}</span>
            <span className="label">Seconds</span>
          </div>
        </div>
        {/* End .ptf-countdown__item */}
      </div>
    </div>
  );
};

export default CountDown;
