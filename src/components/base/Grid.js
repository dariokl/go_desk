import React from "react";
import Icon from "./Icon";

import { iconParser, titleParser } from "../../utils/helpers";

import { gridItemCN } from "./styles";

const Grid = ({ items }) => {
  return (
    <div className="mt-20 mb-10 flex flex-row items-center justify-center">
      <div className="grid grid-cols-5">
        {items.map((item) => (
          <a href={item.url} target="_blank" rel="noreferrer">
            <div className={gridItemCN}>
              <Icon name={iconParser(item.url)} size="28" />
              <span className="group-hover:text-white">
                {titleParser(item.url)}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Grid;
