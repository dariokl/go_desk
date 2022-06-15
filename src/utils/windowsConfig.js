import History from "../components/history/History";
import Stocks from "../components/stocks/Stocks";
import Reddit from "../components/reddit/Reddit";

export const windowsConfig = [
  {
    id: "item-0",
    name: "History",
    icon: "IoIosBookmarks",
    component: History,
    active: false,
  },
  {
    id: "item-1",
    name: "Stocks",
    icon: "IoIosTrendingUp",
    component: Stocks,
    active: false,
  },
  {
    id: "item-2",
    name: "Reddit",
    icon: "IoIosReddit",
    component: Reddit,
    active: false,
  },
];
