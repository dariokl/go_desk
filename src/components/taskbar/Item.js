import React from "react";

import Icon from "../base/Icon";

import { itemCN, itemNameCN } from "./styles";

const Item = ({ title, icon, onClick }) => {
  return (
    <div className={itemCN} onClick={onClick}>
      <div className={itemNameCN}>{title}</div>
      <Icon name={icon} size="24" />
    </div>
  );
};

export default Item;
