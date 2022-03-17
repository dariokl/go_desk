import React from "react";

import Icon from "../base/Icon";

const Item = ({ title, icon, onClick }) => {
  return (
    <div
      className="
    group
    relative
    flex 
    h-12 
    w-12 
    transform 
    items-center 
    justify-center 
    rounded-xl
    border-none 
    bg-gray-800 
    transition 
    transition duration-300 
    ease-in-out 
    hover:-translate-y-1 
    hover:scale-100 
    motion-reduce:transform-none"
      onClick={onClick}
    >
      <div
        className="
      invisible
      absolute 
      -top-8
      rounded
      bg-gray-800
      p-0.5
      group-hover:visible"
      >
        {title}
      </div>
      <Icon name={icon} size="24" />
    </div>
  );
};

export default Item;
