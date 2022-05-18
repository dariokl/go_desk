import React, { useState } from "react";

import Icon from "../../base/Icon";
import { iconParser, titleParser } from "../../../utils/helpers";
import { gridItemCN } from "./styles";

const GridItem = ({ url }) => {
  const [iconColor, setIconColor] = useState("black");
  return (
    <div
      className={gridItemCN}
      onMouseEnter={() => setIconColor("white")}
      onMouseLeave={() => setIconColor("black")}
    >
      <a
        href={url}
        className="flex flex-col items-center justify-center"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name={iconParser(url)} size="28" iconColor={iconColor} />
        <span className="group-hover:text-white">{titleParser(url)}</span>
      </a>
      <div className="absolute top-0 h-1 w-full rounded-lg bg-gradient-to-r from-gray-700 to-transparent p-2 group-hover:bg-none">
        <Icon name="IoIosMore" iconClass="absolute top-0 right-0" />
      </div>
    </div>
  );
};

export default GridItem;
