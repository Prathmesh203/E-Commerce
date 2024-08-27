import React from "react";
import { useState, useEffect } from "react";
const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
const calculateTimeLeft = () => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  const timeLeft = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
  return timeLeft;
};
function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown flex flex-col ml-10">
      <h1 className="text-[#DB4444] text-3xl font-extrabold ">
        TODAY'S SALE!!!
      </h1>
      <div className="flex items-center gap-10">
        <h1 className=" text-4xl font-semibold ">ENDS IN </h1>
        <h1 className="text-4xl font-bold">
          {timeLeft.days}d <span className="text-[#DB4444]">:</span>{" "}
          {timeLeft.hours}h <span className="text-[#DB4444]">:</span>{" "}
          {timeLeft.minutes}m <span className="text-[#DB4444]">:</span>{" "}
          {timeLeft.seconds}s
        </h1>
      </div>
    </div>
  );
}

export default Countdown;
