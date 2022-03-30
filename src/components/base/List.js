import React from "react";
import ListItem from "./ListItem";

import { listContainerCN, listCN, listDividerCN } from "./styles";

const List = ({ items }) => {
  return (
    <div className={listContainerCN}>
      <div className={listCN}>
        <ul className={listDividerCN}>
          {items.map((item) => (
            <ListItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
