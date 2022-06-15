import React, { useRef, useEffect, useState } from "react";

import Icon from "./Icon";

export const Dropdown = ({ hasIcon, iconclass, iconName }) => {
  const [position, setPosition] = useState({});
  const [open, setOpen] = useState(false);
  const buttonEl = useRef(null);

  useEffect(() => {
    const { bottom, left } = buttonEl.current.getBoundingClientRect();
    setPosition({ top: bottom + 10, left: left });
  }, [buttonEl]);
  return (
    <>
      <div className="container" ref={buttonEl}>
        {hasIcon ? (
          <Icon name={iconName} iconclassName={iconclass} />
        ) : (
          <button
            className="text-white-50 inline-flex items-center 
          rounded-lg bg-gradient-to-r  from-gray-700 to-gray-600 px-4 py-2.5 text-center 
          text-sm font-medium focus:outline-none  
         "
            type="button"
            onClick={() => setOpen(!open)}
          >
            Dropdown button
            <Icon name="IoIosArrowDown" color="white" iconClass="ml-2" />
          </button>
        )}
      </div>
      {open ? (
        <div
          className="absolute z-10 w-44 bg-gradient-to-r  from-gray-700 to-gray-600 "
          style={{ left: position.left, top: position.top }}
        >
          <ul
            className="text-white-50 divide-y divide-gray-700 py-1 text-sm dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            <li>
              <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Dashboard
              </span>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Dropdown;
