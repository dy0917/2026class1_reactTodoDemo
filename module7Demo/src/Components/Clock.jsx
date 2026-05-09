import { useState, useEffect } from "react";

// Renders a digital time that updates every second
export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // first arg is usually an arrow function
    const clockInterval = setInterval(() => tick(), 1000);
    console.log("Clock component mounted");

    return () => {
      console.log("Clock component unmounted");
      clearInterval(clockInterval);
    };
  }, []);

  useEffect(() => {});

  const tick = () => {
    setDate(new Date());
    console.log("tick"); // track the effect frequency
  };

  const changeToObj = () => {
    setDate({});
  };

  return (
    <div className="Clock">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
    </div>
  );
}
