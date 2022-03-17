import React, { useCallback, useState } from "react";
import { WindowContext, config } from "./windowsContext";

import TaskBar from "./components/taskbar/Taskbar";
import Desk from "./components/desk/Desk";

const App = () => {
  const [windows, setWindows] = useState(config);

  const onIconClick = useCallback(
    (id) => {
      setWindows(
        windows.map((window) =>
          window.id === id ? { ...window, active: !window.active } : window
        )
      );
      console.log("not");
    },
    [windows]
  );
  return (
    <WindowContext.Provider value={windows}>
      <div
        className="grid grid-cols-4"
        style={{
          backgroundImage: "url(/bg.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="col-span-1 h-screen-max-vh text-white">Side Bar</div>
        <div className="desk-container col-span-3 h-screen-max-vh">
          <Desk />
        </div>
        <div className="col-span-4 flex h-screen-fill-vh items-center justify-center text-white">
          <TaskBar onIconClick={(id) => onIconClick(id)} />
        </div>
      </div>
    </WindowContext.Provider>
  );
};

export default App;
