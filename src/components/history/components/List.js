import React from "react";

import Button from "../../base/Button";
import ListItem from "./ListItem";

import { listContainerCN, listCN, listDividerCN } from "./styles";

const List = ({ items, onUpdateItem, onDeleteItem, onLoadMoreBookmarks }) => {
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
        <div className="bottom-0 mt-2 flex items-center justify-center">
          <Button
            text="Load more..."
            onClick={onLoadMoreBookmarks}
            hoverColor="red"
          />
        </div>
      </div>
    </div>
  );
};

export default List;
