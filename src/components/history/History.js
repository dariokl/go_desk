/*global chrome*/

import React, { useCallback, useReducer, useEffect } from "react";
import { initialState, reducer } from "./reducer";

import Search from "../base/Search";
import NavButtons from "../base/NavButtons";
import List from "../base/List";

const TOP_SITES = "topSites";
const BOOKMARKS = "bookmarks";

const History = () => {
  const [history, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (history.activeTab === BOOKMARKS) {
      chrome.bookmarks.getRecent(10, (data) => {
        dispatch({ type: "SET_BOOKMARKS", data });
      });
    }
    if (history.activeTab === TOP_SITES) {
      chrome.topSites.get((data) => {
        dispatch({ type: "SET_TOPSITES", data });
      });
    }
  }, [history.activeTab]);

  const getSearchPlaceHolder = () => {
    return history.buttons.find((button) => button.active).searchPlaceholder;
  };

  const onButtonClick = useCallback(
    (value) => {
      dispatch({ type: "BUTTON_CLICK", value: value });
    },
    [dispatch]
  );

  return (
    <div className="flex flex-col">
      <Search placeholder={getSearchPlaceHolder()} />
      <NavButtons buttons={history.buttons} onClick={onButtonClick} />
      <List items={history.bookmarks} />
    </div>
  );
};

export default History;
