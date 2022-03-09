import React from "react";

import Item from "./Item";
import Clock from "./Clock";

const TaskBar = () => {
  return (
    <div
      className="
     flex 
     w-fit
     items-center 
     justify-center 
     gap-3 
     rounded-lg 
     bg-gray-400 
     bg-opacity-50
     p-1
     outline 
     outline-1 
     outline-white
     backdrop-blur-lg 
     backdrop-filter"
    >
      <Item />
      <Item />
      <Item />
      <span className="h-8 w-px bg-white"></span>
      <Clock />
    </div>
  );
};

export default TaskBar;
