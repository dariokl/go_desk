import { historyButtons } from "../../utils/contants";

export const initialState = {
  buttons: historyButtons,
  topSites: [],
  bookmarks: [],
  activeTab: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "BUTTON_CLICK":
      return {
        ...state,
        buttons: state.buttons.map((button) =>
          button.value === action.value
            ? { ...button, active: !button.active }
            : { ...button, active: !button.active }
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

    default:
      return state;
  }
};
