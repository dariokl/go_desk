import React from "react";

import Icon from "../../base/Icon";
import { iconParser, titleParser } from "../../../utils/helpers";

import { gridItemCN, gridContainerCN } from "./styles";

const Grid = ({ items }) => {
  return (
    <div className={gridContainerCN}>
      {items.map((item) => (
        <a
          href={item.url}
          className={gridItemCN}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name={iconParser(item.url)} size="28" />
          <span className="group-hover:text-white">
            {titleParser(item.url)}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Grid;
