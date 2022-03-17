import React, { useContext } from "react";
import { WindowContext } from "../../windowsContext";

import Window from "../window/Window";

const Desk = () => {
  const windows = useContext(WindowContext);

  return (
    <div>
      {windows.map((window) =>
        window.active ? (
          <Window item={window} name={window.name} key={window.id} />
        ) : null
      )}
    </div>
  );
};

export default Desk;
