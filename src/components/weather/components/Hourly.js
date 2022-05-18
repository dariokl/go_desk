import React from "react";

import { hourlyContainerCN } from "./styles";

const Houry = ({ forecast }) => {
  return (
    <>
      <div className="mb-1 text-xs text-gray-50">Today</div>
      <div className={hourlyContainerCN}>
        {forecast.map((i) => (
          <>
            <div className="flex-1 text-center text-gray-50">
              <div className="text-xs">{i.time}</div>
              <div>
                <i className="bi bi-cloud-fill"></i>
              </div>
              <div className="text-xs">{i.temperature}°</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Houry;
