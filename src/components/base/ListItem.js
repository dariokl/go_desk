import React from "react";

import { listItemCN, listItemButtonCN } from "./styles";

const ListItem = ({ item }) => {
  return (
    <li className={listItemCN}>
      <span>{item.title}</span>
      <div className="flex">
        <button className={listItemButtonCN({ isSaveButton: true })}>
          Save
        </button>
        <button className={listItemButtonCN({ isSaveButton: false })}>
          Cancel
        </button>
      </div>
    </li>
  );
};

export default ListItem;
