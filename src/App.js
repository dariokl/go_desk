import React from "react";

import TaskBar from "./components/taskbar/Taskbar";

const App = () => {
  console.log(window.width);

  return (
    <div
      className="grid grid-cols-4"
      style={{
        backgroundImage: "url(/bg.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="h-screen-max-vh col-span-1 text-white">Side Bar</div>
      <div className="h-screen-max-vh col-span-3">02</div>
      <div className="h-screen-fill-vh col-span-4 text-white flex justify-center items-center">
        <TaskBar />
      </div>
    </div>
  );
};

export default App;
