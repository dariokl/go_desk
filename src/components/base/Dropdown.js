import React from "react";

import Icon from "./Icon";

export const Dropdown = ({ children, onOpenDropDown }) => {
  return (
    <div className="flex items-center justify-center">
      <Icon
        name="IoIosMore"
        iconClass="absolute top-0 right-0"
        onClick={onOpenDropDown}
      />
      <div className="mt-12">{children}</div>
    </div>
  );
};

export default Dropdown;
