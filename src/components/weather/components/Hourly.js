import React from "react";

const Houry = () => {
  return (
    <>
      <div class="mb-1 text-xs text-white">Today</div>
      <div class="mb-2 flex rounded-xl bg-indigo-200 bg-opacity-20 p-2">
        <div class="flex-1 text-center text-white ">
          <div class="text-xs">8:30 am</div>
          <div>
            <i class="bi bi-cloud-fill"></i>
          </div>
          <div class="text-xs">27°</div>
        </div>
      </div>
    </>
  );
};

export default Houry;
