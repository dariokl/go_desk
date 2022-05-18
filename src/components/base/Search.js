import React from "react";
import Icon from "../base/Icon";

import { searchButtonCN, searchCN } from "./styles";

const Search = ({ placeholder }) => {
  return (
    <div className="relative mx-auto pt-2 ">
      <input
        className={searchCN}
        type="text"
        name="search"
        placeholder={placeholder}
      />
      <button type="submit" className={searchButtonCN}>
        <Icon name="IoIosSearch" size="16" iconColor="black" />
      </button>
    </div>
  );
};

export default Search;
