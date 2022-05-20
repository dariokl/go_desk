import React, { useState, useCallback } from "react";

import Icon from "../../base/Icon";
import Dropdown from "../../base/Dropdown";

import { iconParser, titleParser } from "../../../utils/helpers";
import { gridItemCN } from "./styles";

const GridItem = ({ url }) => {
  const [iconColor, setIconColor] = useState("black");
  const [open, setOpen] = useState(false);

  const handleOpenDropDown = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <div
      className={gridItemCN}
      onMouseEnter={() => setIconColor("white")}
      onMouseLeave={() => setIconColor("black")}
    >
      {open ? null : (
        <a
          href={url}
          className="flex flex-col items-center justify-center"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name={iconParser(url)} size="28" iconColor={iconColor} />
          <span className="mt-2 leading-tight group-hover:text-white">
            {titleParser(url)}
          </span>
        </a>
      )}
      <div className="absolute top-0 h-1 w-full rounded-lg bg-gradient-to-r from-gray-700 to-transparent p-2 group-hover:bg-none">
        <Dropdown onOpenDropDown={handleOpenDropDown}>
          {open ? (
            <ul className="mt-2 group-hover:text-white">
              <li className="flex">
                <span>Delete</span>
              </li>
              <li> Edit </li>
              <li> Edit </li>
            </ul>
          ) : null}
        </Dropdown>
      </div>
    </div>
  );
};

export default GridItem;
