import React, { useCallback, useState } from "react";

import { windowsConfig } from "./utils/windowsConfig";

import TaskBar from "./components/taskbar/Taskbar";
import Desk from "./components/desk/Desk";
import Weather from "./components/weather/Weather";

import { desktopCN, sideBarCN, taskBarCN } from "./styles";

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

  const onCloseWindow = useCallback(
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
      style={{
        backgroundImage: "url(/bg2.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-4">
        <div className={sideBarCN}>
          <Weather></Weather>
        </div>
        <div className={desktopCN}>
          <Desk windows={windows} onCloseWindow={(id) => onCloseWindow(id)} />
          <div class="align-center flex items-center justify-center"></div>
        </div>
        <div className={taskBarCN}>
          <TaskBar windows={windows} onIconClick={(id) => onIconClick(id)} />
        </div>
      </div>
    </div>
  );
};

export default App;
