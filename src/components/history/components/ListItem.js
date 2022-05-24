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
        <textarea
          rows="2"
          cols="2"
          wrap="soft"
          value={title}
          className="w-full resize-none bg-inherit outline-none"
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
                    "hidden group-hover:block transition duration-150 ease-in-out"
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
                    "hidden group-hover:block transition duration-150 ease-in"
                  }
                  iconColor="black"
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
                  "hidden group-hover:block transition duration-150 ease-in-out"
                }
                iconColor="black"
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
              iconColor="black"
            />
          </>
        )}
      </div>
    </li>
  );
};

export default ListItem;
