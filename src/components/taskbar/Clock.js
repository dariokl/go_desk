import React, { useEffect, useState } from "react";

const Clock = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {value.getHours()}: {value.getMinutes()}
    </div>
  );
};

export default Clock;
