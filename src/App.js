import React, { useCallback, useState } from "react";

import { windowsConfig } from "./utils/windowsConfig";

import SvgBG from "./SvgBG";
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
    <>
      <SvgBG />
      <div className="grid grid-cols-4">
        <div className={sideBarCN}>
          <Weather></Weather>
        </div>
        <div className={desktopCN}>
          <Desk windows={windows} onCloseWindow={(id) => onCloseWindow(id)} />
        </div>
        <div className={taskBarCN}>
          <TaskBar windows={windows} onIconClick={(id) => onIconClick(id)} />
        </div>
      </div>
    </>
  );
};

export default App;
