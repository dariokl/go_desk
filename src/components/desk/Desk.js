import React from "react";

import Window from "../window/Window";

const Desk = ({ windows }) => {
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
