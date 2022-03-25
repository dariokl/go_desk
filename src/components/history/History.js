import React, { useCallback, useReducer } from "react";
import { initialState, reducer } from "./reducer";

import Search from "../base/Search";
import NavButtons from "../base/NavButtons";
import List from "../base/List";

const History = () => {
  const [history, dispatch] = useReducer(reducer, initialState);

  const getSearchPlaceHolder = () => {
    return history.buttons.find((button) => button.active);
  };

  const onButtonClick = useCallback(
    (name) => {
      dispatch({ type: "BUTTON_CLICK", name: name });
    },
    [dispatch]
  );

  return (
    <div className="flex flex-col">
      <Search placeholder={getSearchPlaceHolder().searchPlaceholder} />
      <NavButtons buttons={history.buttons} onClick={onButtonClick} />
      <List items={history.bookmarks} />
    </div>
  );
};

export default History;
