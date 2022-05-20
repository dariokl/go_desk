import React from "react";

import Icon from "./Icon";

export const Dropdown = ({ children, onOpenDropDown }) => {
  return (
    <>
      <Icon
        name="IoIosMore"
        iconClass="absolute top-0 right-0"
        onClick={onOpenDropDown}
      />
      {children}
    </>
  );
};

export default Dropdown;
