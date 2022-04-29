import React, { useCallback, useState } from "react";
import { windowsConfig } from "./utils/windowsConfig";

import TaskBar from "./components/taskbar/Taskbar";
import Desk from "./components/desk/Desk";

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
      className="grid grid-cols-4"
      style={{
        backgroundImage: "url(/bg2.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className={sideBarCN}>Side Bar</div>
      <div className={desktopCN}>
        <Desk windows={windows} onCloseWindow={(id) => onCloseWindow(id)} />
      </div>
      <div className={taskBarCN}>
        <TaskBar windows={windows} onIconClick={(id) => onIconClick(id)} />
      </div>
    </div>
  );
};

export default App;
