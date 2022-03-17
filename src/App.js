import React, { useCallback, useState } from "react";
import { windowsConfig } from "./utils/windowsConfig";

import TaskBar from "./components/taskbar/Taskbar";
import Desk from "./components/desk/Desk";

const App = () => {
  const [windows, setWindows] = useState(windowsConfig);

  const onIconClick = useCallback(
    (id) => {
      setWindows(
        windows.map((window) =>
          window.id === id ? { ...window, active: !window.active } : window
        )
      );
    },
    [windows]
  );
  return (
    <div
      className="grid grid-cols-4"
      style={{
        backgroundImage: "url(/bg.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="col-span-1 h-screen-max-vh text-white">Side Bar</div>
      <div className="desk-container col-span-3 h-screen-max-vh">
        <Desk windows={windows} />
      </div>
      <div className="col-span-4 flex h-screen-fill-vh items-center justify-center text-white">
        <TaskBar windows={windows} onIconClick={(id) => onIconClick(id)} />
      </div>
    </div>
  );
};

export default App;
