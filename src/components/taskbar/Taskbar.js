import React from "react";

import Item from "./Item";
import Clock from "./Clock";

import { taskBarWrapperCN, dividerCN } from "./styles";

const TaskBar = ({ onIconClick, windows }) => {
  return (
    <div className={taskBarWrapperCN}>
      {windows.map((window) => (
        <Item
          key={window.id}
          title={window.name}
          icon={window.icon}
          onClick={() => onIconClick(window.id)}
        />
      ))}
      <span className={dividerCN}></span>
      <Clock />
    </div>
  );
};

export default TaskBar;
