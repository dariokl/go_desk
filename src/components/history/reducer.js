import { historyButtons } from "../../utils/contants";

export const initialState = {
  buttons: historyButtons,
  topSites: [],
  bookmarks: [
    {
      name: "stranica",
      url: "www.google.com",
    },
    {
      name: "stranica",
      url: "www.google.com",
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "BUTTON_CLICK":
      return {
        ...state,
        buttons: state.buttons.map((button) =>
          button.name === action.name
            ? { ...button, active: !button.active }
            : { ...button, active: !button.active }
        ),
      };

    default:
      return state;
  }
};
