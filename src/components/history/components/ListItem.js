import React, { useState } from "react";
import Icon from "../../base/Icon";
import { MdModeEditOutline } from "react-icons/md";

import { listItemCN, listItemButtonCN } from "./styles";

const ListItem = ({
  item,
  onEditClick,
  onCancelEditClick,
  onSaveClick,
  onDeleteClick,
  onItemDeleteClick,
}) => {
  const [title, setTitle] = useState(item.title);

  return (
    <li className={listItemCN}>
      {item.edit ? (
        <input
          type="text"
          value={title}
          className="w-full bg-inherit outline-none"
          onInput={(e) => {
            setTitle(e.target.value);
          }}
        />
      ) : (
        <span>{item.title}</span>
      )}
      <div className="flex">
        {item.edit || item.markedForDelete ? (
          <>
            {item.edit ? (
              <button
                className={listItemButtonCN({ isSaveButton: true })}
                onClick={() => onSaveClick(item, title)}
              >
                <span className="block group-hover:hidden">Save</span>
                <Icon
                  name="IoIosCheckmark"
                  size={28}
                  iconClass={
                    "hidden group-hover:block transition duration-300 ease-in-out"
                  }
                />
              </button>
            ) : (
              <button
                className={listItemButtonCN({ isSaveButton: true })}
                onClick={() => onItemDeleteClick(item)}
              >
                <span className="block group-hover:hidden">Delete</span>
                <Icon
                  name="IoIosCheckmark"
                  size={28}
                  iconClass={
                    "hidden group-hover:block transition duration-300 ease-in"
                  }
                />
              </button>
            )}

            <span className="pr-1" />

            <button
              className={listItemButtonCN({ isSaveButton: false })}
              onClick={() => onCancelEditClick(item)}
            >
              <span className="block group-hover:hidden">Cancel</span>
              <Icon
                name="IoIosClose"
                size={26}
                iconClass={
                  "hidden group-hover:block transition duration-300 ease-in-out"
                }
              />
            </button>
          </>
        ) : (
          <>
            <MdModeEditOutline size="18" onClick={() => onEditClick(item)} />
            <Icon
              name="IoIosTrash"
              size="18"
              onClick={() => onDeleteClick(item)}
            />
          </>
        )}
      </div>
    </li>
  );
};

export default ListItem;
