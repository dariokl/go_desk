/*global chrome*/
import React, { useCallback, useReducer, useEffect, useState } from "react";
import { initialState, reducer } from "./reducer";

import Search from "../base/Search";
import NavButtons from "../base/NavButtons";
import List from "./components/List";
import Grid from "./components/Grid";

const TOP_SITES = "topSites";
const BOOKMARKS = "bookmarks";

const History = () => {
  const [history, dispatch] = useReducer(reducer, initialState);
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    if (history.activeTab === BOOKMARKS) {
      chrome.bookmarks.getRecent(counter, (data) => {
        dispatch({ type: "SET_BOOKMARKS", data });
      });
    }
    if (history.activeTab === TOP_SITES) {
      chrome.topSites.get((data) => {
        dispatch({ type: "SET_TOPSITES", data });
      });
    }
  }, [history.activeTab, counter]);

  const getSearchPlaceHolder = () => {
    return history.buttons.find((button) => button.active).searchPlaceholder;
  };

  const onButtonClick = useCallback(
    (value) => {
      dispatch({ type: "BUTTON_CLICK", value: value });
    },
    [dispatch]
  );

  const handleLoadMoreBookmarks = useCallback(() => {
    setCounter(counter + 5);
  }, [counter]);

  const handleItemUpdate = useCallback(
    (item) => {
      const { id, title } = item;

      chrome.bookmarks.update(
        id,
        {
          title,
        },
        () => {
          dispatch({ type: "UPDATE_BOOKMARK", data: item });
        }
      );
    },
    [dispatch]
  );

  const handleItemDelete = useCallback(
    ({ id }) => {
      chrome.bookmarks.remove(id, () => {
        dispatch({ type: "DELETE_BOOKMARK", data: id });
      });
    },
    [dispatch]
  );

  return (
    <div className="flex flex-col">
      <Search placeholder={getSearchPlaceHolder()} />
      <NavButtons buttons={history.buttons} onClick={onButtonClick} />
      {history.activeTab === "topSites" ? (
        <Grid items={history.topSites} />
      ) : (
        <List
          items={history.bookmarks}
          onUpdateItem={handleItemUpdate}
          onDeleteItem={handleItemDelete}
          onLoadMoreBookmarks={handleLoadMoreBookmarks}
        />
      )}
    </div>
  );
};

export default History;
