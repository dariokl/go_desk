import React, { useState, useCallback } from "react";

import Icon from "../../base/Icon";
import Dropdown from "../../base/Dropdown";

import { iconParser, titleParser } from "../../../utils/helpers";
import { gridItemCN, gridMenuContainerCN, gridMenuButtonCN } from "./styles";

const GridItem = ({ url }) => {
  const [iconColor, setIconColor] = useState("black");
  const [open, setOpen] = useState(false);

  const handleOpenDropDown = useCallback(() => {
    // TODO once chrome.topsites API supports deleting.
    setOpen(false);
  }, []);

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
      <div className={gridMenuContainerCN}>
        <Dropdown
          hasIcon
          iconName="IoIosMore"
          iconClass="absolute top-0 right-0"
        />
      </div>
    </div>
  );
};

export default GridItem;
