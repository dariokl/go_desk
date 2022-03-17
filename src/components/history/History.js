import React, { useCallback, useReducer } from "react";
import { initialState, reducer } from "./reducer";

import Search from "../base/Search";
import NavButtons from "../base/NavButtons";

const History = () => {
  const [history, dispatch] = useReducer(reducer, initialState);

  const onButtonClick = useCallback(
    (name) => {
      dispatch({ type: "BUTTON_CLICK", name: name });
    },
    [dispatch]
  );

  return (
    <div className="flex flex-col">
      <Search />
      <NavButtons buttons={history.buttons} onClick={onButtonClick} />
    </div>
  );
};

export default History;
