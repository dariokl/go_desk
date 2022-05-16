import React from "react";

const Houry = ({ forecast }) => {
  return (
    <>
      <div class="mb-1 text-xs text-gray-50">Today</div>
      <div class="mb-2 flex rounded-xl rounded-lg bg-gradient-to-r from-red-700 to-transparent p-2 shadow-xl">
        {forecast.map((i) => (
          <>
            <div class="flex-1 text-center text-gray-50">
              <div class="text-xs">{i.time}</div>
              <div>
                <i class="bi bi-cloud-fill"></i>
              </div>
              <div class="text-xs">{i.temperature}°</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Houry;
