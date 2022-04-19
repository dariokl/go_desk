import { historyButtons } from "../../utils/contants";

export const initialState = {
  buttons: historyButtons,
  topSites: [],
  bookmarks: [],
  activeTab: "topSites",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "BUTTON_CLICK":
      return {
        ...state,
        buttons: state.buttons.map((button) =>
          button.value === action.value
            ? { ...button, active: true }
            : { ...button, active: false }
        ),
        activeTab: action.value,
      };
    case "SET_BOOKMARKS": {
      return {
        ...state,
        bookmarks: action.data,
      };
    }

    case "SET_TOPSITES": {
      return {
        ...state,
        topSites: action.data,
      };
    }

    case "UPDATE_BOOKMARK":
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) =>
          bookmark.id === action.data.id ? { ...action.data } : bookmark
        ),
      };

    case "DELETE_BOOKMARK":
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id !== action.data
        ),
      };

    default:
      return state;
  }
};
