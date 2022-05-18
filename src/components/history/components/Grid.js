import React from "react";

import GridItem from "./GridItem";
import { gridContainerCN } from "./styles";

const Grid = ({ items }) => {
  return (
    <div className={gridContainerCN}>
      {items.map((item, idx) => (
        <GridItem key={idx} url={item.url} />
      ))}
    </div>
  );
};

export default Grid;
