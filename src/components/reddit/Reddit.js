import React from "react";

import Dropdown from "../base/Dropdown";
import Icon from "../base/Icon";

import { redditContainerCN } from "./styles";

const Reddit = () => {
  const buttons = "";
  return (
    <div className={redditContainerCN}>
      <Dropdown />
      <Icon name="IoIosAddCircleOutline" color="black" size="24" />
    </div>
  );
};

export default Reddit;
