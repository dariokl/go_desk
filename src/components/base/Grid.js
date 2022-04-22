import React from "react";
import Icon from "./Icon";

import { iconParser, titleParser } from "../../utils/helpers";

import { gridItemCN } from "./styles";

const Grid = ({ items }) => {
  return (
    <div className="mt-20 mb-10 grid grid-flow-col auto-rows-max grid-rows-2">
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
