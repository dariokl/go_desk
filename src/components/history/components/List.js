import React from "react";
import ListItem from "./ListItem";

import { listContainerCN, listCN, listDividerCN } from "./styles";

const List = ({ items, onUpdateItem, onDeleteItem }) => {
  const handleEditClick = (item) => {
    onUpdateItem({ ...item, edit: true });
  };

  const handleCancelEditClick = (item) => {
    onUpdateItem({ ...item, edit: false, markedForDelete: false });
  };

  const handleSaveClick = (item, title) => {
    onUpdateItem({ ...item, title: title, edit: false });
  };

  const handleDeleteClick = (item) => {
    onUpdateItem({ ...item, markedForDelete: true });
  };

  const handleItemDeleteClick = (item) => {
    onDeleteItem(item);
  };

  return (
    <div className={listContainerCN}>
      <div className={listCN}>
        <ul className={listDividerCN}>
          {items.map((item) => (
            <ListItem
              item={item}
              key={item.id}
              onEditClick={handleEditClick}
              onCancelEditClick={handleCancelEditClick}
              onSaveClick={handleSaveClick}
              onDeleteClick={handleDeleteClick}
              onItemDeleteClick={handleItemDeleteClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
