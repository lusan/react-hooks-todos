import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState("");

  const time = () => {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    // return currentTime = h + ":" + m + ":" + s;
    setCurrentTime(h + ":" + m + ":" + s);
  };

  useEffect(() => {
    const clock = setInterval(time, 1000);
    return () => {
      clearInterval(clock);
    };
  });

  return <div className="Clock">{currentTime}</div>;
};

export default Clock;
