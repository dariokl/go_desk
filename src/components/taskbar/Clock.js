import React, { useEffect, useState } from "react";

const Clock = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{value.toLocaleTimeString([], { timeStyle: "short" })}</div>;
};

export default Clock;
